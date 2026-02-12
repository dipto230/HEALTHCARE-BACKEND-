import nodemailer from "nodemailer"
import { envVars } from "../../config/env"

const transporter = nodemailer.createTransport({
    host: envVars.EMAIL_SENDER.SMTP_HOST,
    secure: true,
    auth: {
        user: envVars.EMAIL_SENDER_SMTP_USER,
        pass:envVars.EMAIL
    }
})