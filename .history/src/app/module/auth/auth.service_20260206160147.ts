import { Role, User } from "../../../generated/prisma/client";
import { auth } from "../../lib/auth";



const registerPatient = async (payload:User) => {
    const { name, email, password } = payload;
    const data = await auth.api.signUpEmail({
        body: {
            name,
            email,
            password,
            needPasswordChange:false,
            role:Role.PATIENT
        }
    })
    if (!data.user) {
        throw new Error("Failed to register patient")
    }

}