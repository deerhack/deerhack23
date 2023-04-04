import {NextFunction, Request,Response} from "express"
import AddSponsorGroupSchema from "../requests/AddSponsorGroup"


const validateSponsorGroup = async (req:Request, res:Response,next:NextFunction)=>{
    try{
        const validated = await AddSponsorGroupSchema.validateAsync(req.body)
        res.locals.validated = validated
        next()
    }catch (error){
        return res.status(422).json(error)
    }
}

export default validateSponsorGroup