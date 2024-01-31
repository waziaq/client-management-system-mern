import {PrismaClient} from "@prisma/client";
import bcrypt from "bcryptjs";
import {createRefreshToken, createTokens} from "../../helpers/CreateTokens";
import {SerializeUser} from "../../helpers/SerializeUser";

const prisma = new PrismaClient();

interface Request {
    email: string;
    password: string;
}

const AuthUserServices = async ({email, password}: Request) => {
    const user = await prisma.user.findUnique({
        where: {
            email
        },
        include: {
            role: true
        }
    });

    if (!user) {
        throw new Error("ERR_INVALID_CREDENTIALS");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
        throw new Error("ERR_INVALID_CREDENTIALS");
    }

    const token = createTokens(user);
    const refreshToken = createRefreshToken(user);

    const serializedUser = SerializeUser(user, user.role);

    return { token, refreshToken, serializedUser };
}

export default AuthUserServices;