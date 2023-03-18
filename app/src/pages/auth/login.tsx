import { ChangeEvent, FormEvent, useState } from "react";
import {signIn} from "next-auth/react"

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await signIn('credentials', {redirect:false, token:"eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..s_OXMyxDye37MTz8.qhMP--EXspTOkedVXoBe1aPaDAEe0MBsGfucoVD_abwE0pMF8vQYeGYQvYgbBCbo4akMl2LzGivCkoo2p7Ixy5ick3ynEWtLiIi1rv3QmqHBm7f_kqnUsRkzjUs5PD_ByUBYHRNNmIqrehQrcBTbnh_co4M8LII8TfS1sQ.f3rZvGyo0EaoRABixbQlBQ"});
    console.log(res);
    
  };

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input type="email" name="email" onChange={handleFormChange} value={formData.email} className="border border-gray-100" />
        <input type="password" name="password" onChange={handleFormChange} value={formData.password}  className="border border-gray-100"/>
        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default Login;
