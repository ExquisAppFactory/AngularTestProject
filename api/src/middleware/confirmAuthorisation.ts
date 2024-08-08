import { NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { Response, Request } from 'express';

export const protectRoute = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(403).json({ message: 'unauthorized, no token' });
    }
    try {
        const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`)
    
        if(decoded.type === "access"){
            req.user = decoded
            next();
        }
        else {
            res.status(403).send({message:"unathourized, invalid token"})
        }
    } 
    catch (error) {
        return res.status(403).json({ error: error, message: "unauthorized token" });
    }
};
