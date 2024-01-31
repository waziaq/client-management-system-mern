import { Response } from "express";

export const SendRefreshToken = (res: Response, token: string): void => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);

    res.cookie("access_token", token, {
        httpOnly: true,
        expires: expirationDate
    });
};