import { Request, Response, NextFunction } from "express"
import AddSponsorSchema from "../requests/AddSponsor"

const validateSponsor = async (req:Request,res:Response,next:NextFunction)=>{
    try {
        // we cannot verify both req.file and req.body, making custom file checker.
        if(!req!.files || !req!.files.logo){
            return res.status(400).json({"error":"Logo of the Company Required!","success":false})
        }

        const validated = await AddSponsorSchema.validateAsync(req.body)
        console.log(validated)
        next();
    } catch (error) {
        return res.status(400).json(error)
    }
}


export default validateSponsor