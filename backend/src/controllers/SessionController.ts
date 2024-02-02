import { Request, Response } from "express";
import AuthUserServices from "../services/UserServices/AuthUserServices";
import { SendRefreshToken } from "../helpers/SendRefreshToken";

export const store = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const { token, refreshToken, serializedUser } = await AuthUserServices({ email, password });

        SendRefreshToken(res, refreshToken);

        return res.status(200).json({
            token,
            data: serializedUser
        });
    } catch (error: any) {
        return res.status(400).json({ error: error.message });
    }
}
