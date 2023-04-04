import { Request,Response } from "express"
import prisma from "../../prisma/prisma"

class SponsorGroupController{
    public static async index(req:Request, res:Response){
        // add group logic here
        const data = await prisma.sponsorGroups.findMany()
        return res.status(200).json({
            success:true,
            error:false,
            data:data
        })
    }

    public static async delete(req:Request, res:Response){
        // add group delete logic here
        try{
            const deleted = await prisma.sponsorGroups.delete({
                where:{
                    id:req.params.sponsorGroupID
                }
            })
            return res.status(200).json(deleted)
        }
        catch(error){
            return res.status(500).json({success:false,error:true,"detail":error})
        }
        
    }

    public static async add(req:Request, res:Response){
        //  add group add logic here
        //OK
        const created = await prisma.sponsorGroups.create({
            data:{
                name:res.locals.validated.name
            }
        })
        return res.status(200).json({success:true,error:false,data:created})
    }

}

export default SponsorGroupController