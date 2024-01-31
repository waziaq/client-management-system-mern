import {User, Role} from "@prisma/client";

interface SerializedUser {
    id: string;
    name?: string;
    email: string;
    role: {
        id: string;
        name: string;
        permissions: string
    };
    phone?: string;
}

export const SerializeUser = (user: User, role: Role): SerializedUser => {
    return {
        id: user.id,
        name: user.name || undefined,
        email: user.email,
        role: {
            id: role.id,
            name: role.name,
            permissions: role.permissions
        },
        phone: user.phone || undefined
    }
}