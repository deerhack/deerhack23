import Joi from "joi"

const AddSponsorGroupSchema = Joi.object().keys({
    name: Joi.string().min(2).max(300).required(),
    description : Joi.string().min(20).max(3000)
})

export default AddSponsorGroupSchema
