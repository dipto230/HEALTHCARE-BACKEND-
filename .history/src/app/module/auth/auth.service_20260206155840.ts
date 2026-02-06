import { Role, User } from "../../../generated/prisma/client";
import { auth } from "../../lib/auth";

const registerPatient = async (payload:User) => {
    const { name, email, password } = payload;
    const user = await auth.api.signUpEmail({
        body: {
            name,
            email,
            password,
            role:Role.PATIENT
        }
    })
    if(!user)
}