import { v2 as cloudinary } from "cloudinary"
import { envVars } from "./env"

cloudinary.config({
    cloud_name: envVars.CLOUDINARY.CLOUDINARY_CLOUD_NAME,
    api_key: envVars.CLOUDINARY.CLOUDINARY_API_KEY,
    api_secret:envVars.CLOUDINARY.CLOUDINARY_API_SECRET,
})

export const deleteFileFromCloudinary = async (ulr: string) => {
    const regex = /\/v\d+\/(.+?)(?:\.[a-zA-Z0-9]+)+$/;
    const match = url(regex)
    
}

export const cloudinaryUpload = cloudinary;