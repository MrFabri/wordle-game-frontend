import { Response } from 'express';

const errorMessage = (res: Response, statusCode: number , errorMsg: string) => {
    res.status(statusCode).json({
        status: statusCode,
        error: errorMsg
    });
}

export { errorMessage };