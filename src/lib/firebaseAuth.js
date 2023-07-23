import { deleteUser, getAdditionalUserInfo, signInWithPopup, updateEmail } from 'firebase/auth';

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
          await updateEmail(newuser, newuser.providerData[0].email);
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
