import {Router,Request, Response} from "express";
import { SponsorGroupController } from "../controllers/sponsor";
import validateSponsorGroup from "../middleware/vaidateSponsorGroup";

const router :Router = Router()

router.post("/",validateSponsorGroup,SponsorGroupController.add)
router.get("/",SponsorGroupController.index)
router.delete("/:sponsorGroupID",SponsorGroupController.delete)

export default router