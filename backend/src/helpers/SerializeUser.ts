import {User, Role} from "@prisma/client";

interface SerializedUser {
    name?: string;
    role: {
        name: string;
        permissions: string
    };
}

export const SerializeUser = (user: User, role: Role): SerializedUser => {
    return {
        name: user.name || undefined,
        role: {
            name: role.name,
            permissions: role.permissions
        },
    }
}