import { Router,Request,Response } from "express"
import { SponsorController } from "../controllers/sponsor"
import { isAuthenticated } from "../middleware"
import validateSponsor from "../middleware/validateSponsor"



const router  = Router()

// use isAuthenticated in production after / and before upload middleware.
router.post('/',validateSponsor,isAuthenticated,SponsorController.create)

router.get('/',SponsorController.index)

router.put('/:sponsorID',SponsorController.update)

router.delete('/:sponsorID',SponsorController.delete)

export default router