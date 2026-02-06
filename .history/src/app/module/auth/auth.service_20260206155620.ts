import { User } from "../../../generated/prisma/client";

const registerPatient = async (payload:User) => {
    const { name, email, password } = payload;
    const user = await auth
}