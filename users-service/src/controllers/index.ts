import { Request, Response } from "express";

/**
 * GET /
 * Home page.
 */
export let index = (req: Request, res: Response) => {
    res.json({data:{
        host:req.host,
        originalUrl:req.originalUrl,
        protocol : req.protocol,
    }});
};
