import { Role } from "../../generated/prisma/enums";
import { IRequestUser } from "./request.user.interface";

declare global {
    namespace Express{
        interface Request{
            user: IRequestUser
        }
    }
}