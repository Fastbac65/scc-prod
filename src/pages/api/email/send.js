// Expirations
// Password reset (generatePasswordResetLink): 1 hour
// Email verification (generateEmailVerificationLink): 3 days (not using as users are forced to signIn with email from the start)
// Email link sign-in (generateSignInWithEmailLink): 6 hours
// generate an API key
// node -e "console.log(crypto.randomBytes(32).toString('hex'))"

import { Resend } from 'resend';
import { getAuth } from 'firebase-admin/auth';

// import { getAuth } from 'firebase-admin/auth';
import { createFirebaseAdminApp } from 'src/lib/createFireBaseAdminApp';
import ResetPasswordEmail from 'src/components/email/ResetPasswordEmail';
import SignUpEmail from 'src/components/email/SignupEmail';
import BookingEmail from 'src/components/email/BookingEmail';

const resend = new Resend(process.env.RESEND_API_KEY);
const { db } = createFirebaseAdminApp();
const host = 'https://southcurlcurlslsc.com.au';
const host1 = process.env.NODE_ENV === 'development' ? 'http://192.168.0.124:5002' : 'https://southcurlcurlslsc.com.au';

// Lets connect the email API server to the customer database
// const ref = db.ref('customers/');
// let customers = [];
// ref.on(
//   'value',
//   (snapshot) => {
//     if (snapshot.val()) customers = Object.values(snapshot.val());
//   },
//   (error) => {
//     console.log('Error reading DB', error.name, error.message);
//   }
// );

export default async function handler(req, res) {
  if (req.body.api_key !== process.env.API_ROUTE_SECRET) {
    return res.status(401).send('Not Authorised To Access This API');
  }
  let currentUser = {}; // if user is a current client it will populate
  // mode and email vars
  const { mode = '', currentUserEmail: email = '', currentUserName: name = '', currentUserPhone: mobile = '', booking = '' } = req.body;
  // will hold the correct link depending on mode
  let link = null;

  if (req.method === 'POST') {
    try {
      const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for
        // this URL must be whitelisted in the Firebase Console.
        url: `${host}?fn=${encodeURI(name)}&em=${email}&ph=${mobile}`,
        // This must be true for email link sign-in.
        // handleCodeInApp: true,
        // iOS: {
        //   bundleId: 'com.example.ios',
        // },
        // android: {
        //   packageName: 'com.example.android',
        //   installApp: true,
        //   minimumVersion: '12',
        // },
        // // FDL custom domain.
        // dynamicLinkDomain: 'coolapp.page.link',
      };

      https: switch (mode) {
        case 'signInWithEmail': {
          link = await getAuth().generateSignInWithEmailLink(email, actionCodeSettings);
          try {
            await resend.emails.send({
              from: 'South Curly Members <onboarding@southcurlcurlslsc.com.au>',
              reply_to: 'webadmin@southcurlcurlslsc.com.au',
              to: email,
              bcc: ['webadmin@southcurlcurlslsc.com.au' /*mail@southcurlcurlslsc.org*/],
              subject: 'Welcome to South Curl Curl SLSC Members',
              html: '<strong>Please finalise your members account setup</strong>',
              react: SignUpEmail({ link, email, name }),
            });
          } catch (error) {
            console.log(error);
          }
          // await db.ref('server_customers/').update({ ...customers }); // sends update to db - lets us know the server is in sync
          return res.status(200).json({ signin: link });
        }
        case 'bookingInquiry': {
          try {
            const res = await db.collection('bookings').doc(booking.email).set(booking);
            await resend.emails.send({
              from: 'SCC Venue Management <caretaker@southcurlcurlslsc.com.au>',
              reply_to: 'SCC Venue Management <caretaker@southcurlcurlslsc.com.au>',

              to: booking.email,
              bcc: ['SCC Venue Management <caretaker@southcurlcurlslsc.com.au>'],
              subject: 'Venue Booking Inquiry',
              html: '<strong>Venue Booking Inquiry Received</strong>',
              react: BookingEmail({ booking }),
            });
          } catch (error) {
            console.log(error);
          }
          // await db.ref('server_customers/').update({ ...customers }); // sends update to db - lets us know the server is in sync
          return res.status(200).json({ booking: 'Received OK' });
        }
        // case 'emailVerify': {
        //   link = await getAuth().generateEmailVerificationLink(email, actionCodeSettings);
        //   return res.status(200).json({ signin: link });
        // }
        case 'resetPassword': {
          currentUser = await getAuth().getUserByEmail(email);
          if (currentUser) {
            link = await getAuth().generatePasswordResetLink(email, actionCodeSettings);
            const firstName = currentUser?.displayName.split(/[ ]+/)[0];
            try {
              const data = await resend.emails.send({
                from: 'support@resend.dev',
                to: 'sccslsc.webdev@gmail.com',
                // to: 'terry.durnin@yahoo.com',
                // to: email,
                subject: 'South Curl Curl SLSC - Reset Password',
                html: '<strong>Request to reset password</strong>',
                react: ResetPasswordEmail({ link, email, name: firstName }),
              });
            } catch (error) {
              console.log(error);
            }
            // await db.ref('server_customers/').update({ ...customers });
            return res.status(200).json({ signin: link, user: currentUser });
          }
        }
        // case 'changeEmail': {
        //   link = await getAuth().generateVerifyAndChangeEmailLink(email, newUserEmail, actionCodeSettings);
        //   return res.status(200).json({ signin: link });
        // }
        case 'isClient': {
          currentUser = await getAuth().getUserByEmail(email);
          return res.status(200).json({ ...currentUser });
        }
        default: {
          return res.status(200).json({ error: 'No mode' });
        }
      }
    } catch (error) {
      console.log('Email API', error.message);
      currentUser = 'Error fetching user';
      return res.status(200).json({ error: 'Email API', reason: error });
    }

    // try {
    //   const data = await resend.emails.send({
    //     from: 'onboarding@resend.dev',
    //     to: email,
    //     subject: 'TezD Nextjs Proj',
    //     html: '<strong>It works!</strong>',
    //     react: emailTemplate({ firstName: 'John' }),
    //   });

    //   res.status(200).json(data);
    // } catch (error) {
    //   console.log(error);
    //   return res.status(error.statusCode || 500).json({ message: error.message });
    // }
  } else {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }
  // return null;
}
