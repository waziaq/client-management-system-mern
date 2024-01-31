import { User } from "@prisma/client";
import { sign } from "jsonwebtoken";

export const createTokens = (user: User): string => {
    return sign(
        { userId: user.id, userName: user.name, userRole: user.roleId },
        process.env.JWT_SECRET as string,
        { expiresIn: "15m" }
    );
};

export const createRefreshToken = (user: User): string => {
    return sign(
        { userId: user.id, userName: user.name, userRole: user.roleId },
        process.env.REFRESH_TOKEN_SECRET as string,
        { expiresIn: "7d" }
    );
};