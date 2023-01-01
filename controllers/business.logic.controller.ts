import { Request, Response } from 'express';
import { success, error } from "../utils/api.response";

export const updateBalance = async (req: Request, res: Response) => {

    return success(res, {});

    const number = Math.floor(Math.random() * 100);

    if (number % 2 === 0)
        success(res, {});
    else
        error(res, {});

}
