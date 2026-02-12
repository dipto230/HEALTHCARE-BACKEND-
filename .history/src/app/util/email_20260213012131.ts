import nodemailer from "nodemailer"
import { envVars } from "../../config/env"

const transporter = nodemailer.createTransport({
    host: envVars.EMA
})