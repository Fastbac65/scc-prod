import { createFirebaseAdminApp } from 'src/lib/createFireBaseAdminApp';
const { db } = createFirebaseAdminApp();
// const host = process.env.NODE_ENV === 'development' ? 'http://192.168.0.220:5002' : 'https://scc-prod.vercel.app'; /* : 'https://www.scc.com'; */

const membersRef = db.collection('members');
let members = [];
console.log('init ran');
const initSnap = await membersRef.get();
initSnap.forEach((doc) => {
  members.push(doc.data());
});

export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.body.api_key !== process.env.API_ROUTE_SECRET) {
    return res.status(401).send('Not Authorised To Access This API');
  }

  // mode and email vars
  const { mode, email } = req.body;

  const obj = { a: 'test', b: [{ nam: 'ter', addr: 'curly' }] };
  console.log(JSON.stringify(obj), obj);

  if (req.method === 'POST') {
    try {
      switch (mode) {
        case 'add': {
          // await db.ref('members').update({ ...customers }); // sends update to db - lets us know the server is in sync
          return res.status(200).json({ adduser: 'test' });
        }

        case 'role': {
          const user = members.filter((member) => member.email === email[0]);
          // await db.ref('server_customers/').update({ ...customers });
          return res.status(200).json({ request: email, member: user.length ? user[0] : 'empty' });
        }
        default: {
          return res.status(200).json({ error: 'No mode' });
        }
      }
    } catch (error) {
      console.log('Error in API', error.message);
      return res.status(200).json({ error: 'Error in API', reason: error });
    }
  } else {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }
}
