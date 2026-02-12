import nodemailer from "nodemailer"
import { envVars } from "../../config/env"

const transporter = nodemailer.createTransport({
    host: envVars.EMAIL_SENDER.SMTP_HOST,
    
})