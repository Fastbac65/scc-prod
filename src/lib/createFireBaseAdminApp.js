import admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';

const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_KEY || {});

export function createFirebaseAdminApp() {
  // if already created, return the same instance
  if (admin.apps.length > 0) {
    return { app: admin.app(), db: admin.database() };
  }

  const app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // The database URL depends on the location of the database
    // databaseURL: 'https://sjbtherapy-365805-default-rtdb.asia-southeast1.firebasedatabase.app',
  });
  const db = getFirestore(app);
  return { app, db };
}
