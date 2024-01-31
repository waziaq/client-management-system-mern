import {PrismaClient} from "@prisma/client";
import bcrypt from "bcryptjs";
const prisma = new PrismaClient();

interface Request {
    name: string;
    email: string;
    password: string;
    role: string;
    phone: string;
}

const CreateUserServices = async ({name, email, password, role, phone}: Request) => {
    // validate all the inputs
    if (!name || !email || !password) {
        throw new Error("ERR_REQUIRED_FIELDS");
    }

    // Check if user already exists
    const userExists = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if (userExists) {
        throw new Error("ERR_USER_ALREADY_EXISTS");
    }

    // check the role
    if (!role) {
        // find the user role
        const userRoleId = await prisma.role.upsert({
            where: {name: "User"},
            update: {},
            create: {
                name: "User",
                permissions: "READ"
            }
        })

        role = userRoleId?.id;
    }

    const passwordHash = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password : passwordHash,
            roleId: role,
            phone
        }
    })

    return user;
}

export default CreateUserServices;