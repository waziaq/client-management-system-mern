import { Request, Response } from "express";

import CreateUserServices from "../services/UserServices/CreateUserServices";

export const store = async (req: Request, res: Response) => {
    const { name, email, password, role, phone } = req.body;

    try {
        await CreateUserServices({
            name,
            email,
            password,
            role,
            phone
        });

        return res.status(201).json({ msg: "USER_CREATED" });
    } catch (error: any) {
        return res.status(400).json({ error: error.message });
    }
}