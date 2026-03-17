import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(), // Expects GOOGLE_APPLICATION_CREDENTIALS env var
    storageBucket: process.env.STORAGE_BUCKET
  });
}

export const db = admin.firestore();
export const storage = admin.storage();
export const auth = admin.auth();

export default admin;
