import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function run() {
    const roles = await prisma.role.upsert({
        where: { name: "Admin" },
        update: {},
        create: {
            name: "Admin",
            permissions: "ALL"
        }
    })

    const roleAdminID = await prisma.role.findFirst({
        where: { name: "Admin" }
    });

    if (!roleAdminID) {
        throw new Error("Role not found");
    }

    const users = await prisma.user.upsert({
        where: { email: "admin@clientms.com" },
        update: {},
        create: {
            name: "Admin",
            email: "admin@clientms.com",
            role: {
                connect: {
                    id: roleAdminID.id
                }
            },
            password: "admin",
        }
    });

    console.log({ users });
}

run()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })