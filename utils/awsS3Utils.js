import { S3Client } from "@aws-sdk/client-s3";
import dotenv from "dotenv";
import { Upload } from "@aws-sdk/lib-storage";

dotenv.config();

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export default s3Client;

export const uploadImage = async (file) => {
    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: `gemstones/${Date.now()}_${file.originalname}`,
      Body: file.buffer,
      ContentType: file.mimetype,
    };
  
    const upload = new Upload({
      client: s3Client,
      params,
    });
  
    // Wait for upload to finish
    return await upload.done();
  };
