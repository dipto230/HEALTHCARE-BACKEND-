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
        .slice(0, -1)
        .join(".")
            .toLowerCase()
            .replace(/\s+/g, "-")
        .replace(/[^a-z0-9\-]/g, "")
    }
})

export const multerUpload = multer({storage})