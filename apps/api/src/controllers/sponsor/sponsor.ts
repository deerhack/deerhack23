import {Request, Response} from "express"
import path from "path"
import { saveSponsorLogo,deleteSponsorLogo } from "../../libs/utils";
import prisma from "../../prisma/prisma";

const logo_save_path :string = path.join(__dirname,"..","..","..","public/")




class SponsorController {
    public static create = async (req:Request, res: Response)=>{
        try {
            const file_name  = await saveSponsorLogo(req?.files?.logo,logo_save_path) as string
            try {

                const added_data =  await prisma.sponsors.create({
                    data:{
                        name:req.body.name,
                        logo:`${req.protocol}://${req.get('host')}/public/${file_name}`,
                        sponsor_group:req.body.sponsor_group,
                        link:req.body.link
                    }
                })

                return res.status(200).json({success:true,error:false,added_data})

                
            } catch (error) {
                return res.status(500).json({error,"success":false})
            }
            
        } catch (error) {
            return res.status(500).json({error,"success":false})
        }
        

    }

    public static index = async (req: Request, res: Response)=>{
        const data = await prisma.sponsors.findMany({
            select:{
                id:true,
                sponsor_group:true,
                name:true,
                logo:true,
                link:true
            }
        })
        return res.status(200).json(data)

    }

    public static update = (req : Request, res: Response)=>{

    }

    public static delete = async (req:Request, res:Response)=>{
        const given_sponsor_data = await prisma.sponsors.findUnique({
            where:{
                id:req.params.sponsorID
            }
        })
        if(!given_sponsor_data){
            return res.status(404).json({error:true,success:false})
        }
        // deletes logo image
        deleteSponsorLogo(path.join(logo_save_path,path.basename(given_sponsor_data.logo)))

        const deleted = await prisma.sponsors.delete({
            where:{
                id:req.params.sponsorID
            }
        })

        return res.status(200).json({error:false,success:true,deleted})
    }
}
export default SponsorController