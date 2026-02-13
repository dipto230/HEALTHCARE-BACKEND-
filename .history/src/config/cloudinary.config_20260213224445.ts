import { v2 as cloudinary } from "cloudinary"
import { envVars } from "./env"

cloudinary.config({
    cloud_name: envVars.CLOUDINARY.CLOUDINARY_CLOUD_NAME,
    
})