import { Router } from "express"
import isAuthenticated from "../middleware/isAuthenticated"
import { SponsorController } from "../controllers/sponsor"

const router  = Router()

router.post('/',isAuthenticated,SponsorController.create)

router.get('/',SponsorController.index)

router.put('/:sponsorID',SponsorController.update)

router.delete('/:sponsorID',SponsorController.delete)

