import jwt from "jsonwebtoken";
import path from "path";
import { unlink } from "fs";

const getToken = (data: Object) => {
  const token = jwt.sign(data, process.env.TOKEN_KEY || "", {
    expiresIn: "2h",
  });
  return token;
};

const saveSponsorLogo = (image:any,image_path:string)=>{
    try {
      let file_name :string = image_path + image.name
      image.mv(file_name)
      return path.basename(file_name)
  } catch (error) {
      console.log(error)
      return error
  }

}

const deleteSponsorLogo = (image_path:string)=>{
  try {
    unlink(image_path,(error)=>{
      if (error) throw error;
    })
    
  } catch (error) {
    
  }
}

export { getToken ,saveSponsorLogo, deleteSponsorLogo };
