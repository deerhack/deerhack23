import Joi from "joi"

const AddSponsorSchema :any = Joi.object().keys({
    name: Joi.string().min(2).max(300).required(),
    sponsor_group : Joi.string().valid( "GOLD","SILVER","BRONZE","ECOMMERCE_PARTNER","RANKING_PARTNER","SUPPORTED_BY").required(),
    link:Joi.string().uri({scheme:["http","https"]}).required(),
    sponsor_group_id:Joi.string().length(36).required()
})
export default AddSponsorSchema

