import {NextFunction, Request, Response} from "express";

export class  AuthController {
    async  ping(req : Request, res : Response, next : NextFunction){
        try {
            res.json({"app" : "pong"});
        }catch (error ){
            next(error);
        }
    }
}