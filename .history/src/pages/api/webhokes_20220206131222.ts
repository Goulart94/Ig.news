import { NextApiRequest, NextApiResponse } from "next";



export default (req: NextApiRequest, res: NextApiResponse)=>{
    console.log('envento recibido')
    
    res.status(200).json({ok: true});
}