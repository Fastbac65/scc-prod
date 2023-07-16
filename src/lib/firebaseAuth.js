import { deleteUser, getAdditionalUserInfo, signInWithPopup, updateEmail } from 'firebase/auth';
// import { auth, providerFacebook, providerGoogle } from './createFirebaseApp';

export const signInSocial = (auth, provider) => {
  return new Promise(async (resolve, reject) => {
    try {
      provider.addScope('email');
      const result = await signInWithPopup(auth, provider);
      const userInfo = getAdditionalUserInfo(result);
      const newuser = result.user;
      if (userInfo.isNewUser) {
        // first time social login we need to check if the email already exists
        try {
          const existingUser = await fetch('/api/email/send', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              currentUserEmail: newuser.providerData[0].email,
              mode: 'isClient',
              api_key: process.env.NEXT_PUBLIC_API_ROUTE_SECRET,
            }),
          }).then((res) => res.json());
          // if the account already existing throw a wobbler
          console.log('checked existing users', existingUser);
          if (existingUser.uid) {
            deleteUser(newuser);
            throw new Error(`Failed to create a new member account - It appears there is already an account on our system with email address ${existingUser.email}`);
          }
          updateEmail(newuser, newuser.providerData[0].email);
          // resolve new member so calling fct can write to member database
          resolve({ user: newuser, newUser: userInfo.isNewUser });
        } catch (error) {
          // fetch failed for some reason or the new social account's email address is already in use
          console.error(error);
          reject(error);
        }
      } else {
        // resolve new member so calling fct can write to member database
        resolve({ user: newuser, newUser: userInfo.isNewUser });
      }
    } catch (error) {
      console.log('signin error', error);

      reject(error);
    }
  });
};

export const signInGoogle = () => {
  return new Promise(async (resolve, reject) => {
    try {
      providerGoogle.addScope('email');
      const result = await signInWithPopup(auth, providerGoogle);
      const userInfo = getAdditionalUserInfo(result);
      const newuser = result.user;
      if (userInfo.isNewUser) {
        // first time social login we need to check if the email already exists
        try {
          const existingUser = await fetch('/api/email/send', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              currentUserEmail: newuser.providerData[0].email,
              mode: 'isClient',
              api_key: process.env.NEXT_PUBLIC_API_ROUTE_SECRET,
            }),
          }).then((res) => res.json());
          // if the account already existing throw a wobbler
          console.log('checked existing users', existingUser);
          if (existingUser.uid) {
            deleteUser(newuser);
            throw new Error(`Failed to create a new member account - It appears there is already an account on our system with email address ${existingUser.email}`);
          }
          updateEmail(newuser, newuser.providerData[0].email);
          // resolve new member so calling fct can write to member database
          resolve({ user: newuser, newUser: userInfo.isNewUser });
        } catch (error) {
          // fetch failed for some reason or the new social account's email address is already in use
          console.error(error);
          reject(error);
        }
      } else {
        // resolve new member so calling fct can write to member database
        resolve({ user: newuser, newUser: userInfo.isNewUser });
      }
    } catch (error) {
      console.log('signin error', error);

      reject(error);
    }
  });
};
export const signInFacebook = () => {
  return new Promise(async (resolve, reject) => {
    try {
      providerFacebook.addScope('email');
      const result = await signInWithPopup(auth, providerFacebook);
      console.log('signin', result);

      // const credential = FacebookAuthProvider.credentialFromResult(result);
      const userInfo = getAdditionalUserInfo(result);
      if (userInfo.isNewUser) {
        // first time FB login we need to copy the email from providerData into the user
        // UPDATE this will break if a user logged in and verified their email via google
        // if (result.user.email === null) {
        //   await updateEmail(result.user, result.user.providerData[0].email);
        //   console.log('email updated in profile');
        // }

        // write the user record
        const user = result.user;
        const docObject = {
          userId: user.uid,
          uName: user.displayName,
          uAvatar: user?.photoURL || '',
          uEmail: user?.email || user.providerData[0].email,
          uMobile: '',
          uRole: {
            basic: true,
          },
          provider: user.providerData[0].providerId,
        };
        await addDocument('Users', docObject, user.uid);
        let x = { ...currentUser, ...docObject };
        console.log(x);
      }
      // we can use this to determine a new user
      console.log(userInfo);
      // const accessToken = credential.accessToken;
      // userCreds = { ...credential };
      // console.log(userCreds);
      // console.log(accessToken);
      resolve(userInfo.isNewUser);
    } catch (error) {
      console.log('signin', error);
      reject(error);
    }
  });
};
