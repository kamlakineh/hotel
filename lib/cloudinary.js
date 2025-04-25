import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
export async function uploadImage(buffer) {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: 'uploades' },
      (error, result) => {
        if (error) reject(error);
        resolve(result);
      }
    );
    
    uploadStream.end(buffer);
  });
}

export async function deleteImages(imageUrls = []) {
  return new Promise((resolve, reject) => {
    if (!imageUrls.length) return reject(new Error('No image URLs provided'));

    const publicIds = imageUrls
      .filter(url => url)
      .map(url => {
        const parts = url.split('/upload/');
        if (parts.length < 2) return null;
        
        const afterUpload = parts[1];
        const segments = afterUpload.split('/');
        const versionIndex = segments.findIndex(seg => /^v\d+$/.test(seg));
        const publicIdSegments = versionIndex === -1 ? segments : segments.slice(versionIndex + 1);
        
        return publicIdSegments.join('/').split('.')[0];
      })
      .filter(id => id);

    if (!publicIds.length) return reject(new Error('Invalid Cloudinary URLs'));

    cloudinary.api.delete_resources(publicIds, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}