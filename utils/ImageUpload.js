const {cloudinary} = require('./cloudinary')

async function UploadImage(imageData) {
  return new Promise(async (resolve,reject)=>{  
    
    try {
      
      const uploadResponse = await cloudinary.uploader.upload(imageData, {
          upload_preset: 'project_ss',
      });
      resolve(uploadResponse)
    } catch (err) {
      console.error(err);
      reject(err)
    }
  })
}

module.exports = {
  UploadImage
}