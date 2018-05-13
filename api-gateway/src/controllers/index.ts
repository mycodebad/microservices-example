import { Request, Response } from "express";

/**
 * GET /
 * Home page.
 */
export let index = (req: Request, res: Response) => {
    console.log("process.env")
    console.log(process.env)
    res.json({data:{
        host:req.host,
        originalUrl:req.originalUrl,
        protocol : req.protocol,
    }});
};
