import { CloudinaryStorage } from "multer-storage-cloudinary";
import { cloudinaryUpload } from "./cloudinary.config";
import multer from "multer";

const storage = new CloudinaryStorage({
    cloudinary: cloudinaryUpload,
    params: async (req, file) => {
        const originalName = file.originalname;
        const extention = originalName.split(".").pop()?.toLocaleLowerCase()
        const fileNameWithoutExtension = originalName
            .split(".")
        .sl
    }
})

export const multerUpload = multer({storage})