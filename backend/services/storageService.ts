import { storage } from '../config/firebaseAdmin';

export const uploadAsset = async (file: Buffer, fileName: string, mimeType: string) => {
  const bucket = storage.bucket();
  const blob = bucket.file(fileName);
  
  await blob.save(file, {
    metadata: { contentType: mimeType },
    public: true
  });

  return `https://storage.googleapis.com/${bucket.name}/${fileName}`;
};

export const getAssetUrl = (fileName: string) => {
  const bucket = storage.bucket();
  return `https://storage.googleapis.com/${bucket.name}/${fileName}`;
};

export const deleteAsset = async (fileName: string) => {
  const bucket = storage.bucket();
  await bucket.file(fileName).delete();
  return true;
};
