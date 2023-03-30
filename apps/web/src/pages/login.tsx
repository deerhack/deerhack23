import { Layout } from "@/components/Layout";
import readDataFile from "@/utilities/readDataFile";
import Head from "next/head";

type Props = {
    pageData: PageData;
};

const Login = ({pageData}:Props) => {
    return (
        <Layout pageData={pageData}>
            <>
                <Head>
                    <title>Login Page</title>
                </Head>
                    <section className="bg-gradient-to-r from-[#100A28] to-[#4F3E93]" id="login">
                        <div className="py-24 px-[10%]">
                            <div className="bg-[#000000] bg-opacity-20 rounded-3xl flex flex-row">
                                <div className="w-1/2">
                                    <img src="/images/loginpage.png" className="rounded-l-3xl"/>
                                </div>
                                <div className="w-1/2">
                                    <div className="h-[40%]">
                                        <div className="flex-column">
                                            <h1 className="pt-[35%] text-xl md:text-5xl font-poppins font-bold text-[#FFD152] text-center">LOG IN</h1>
                                            <p className="text-[#FFFFFF] text-center md:text-base text-[10%]">Not registered? <span className="text-[#FFD152]">Register</span> now </p>
                                        </div>
                                    </div>
                                    <div className="h-[60%]">
                                        <form className="mx-[10%] flex-column space-y-4">
                                            <div className="flex-column space-y-2">
                                                <label className="font-poppins text-[#4B64A3] text-xs md:text-xl">Email:</label><br/>
                                                <input className= "bg-transparent outline-2 rounded-xl w-[100%] h-8 outline outline-[#4B64A3] pl-1" type="text" id="email" name="email"/><br/>
                                            </div>
                                            <div className="flex-column space-y-2">
                                                <label className="font-poppins text-[#4B64A3] text-xs md:text-xl">Password:</label><br/>
                                                <input className= "bg-transparent outline-2 rounded-xl w-[100%] h-8 outline outline-[#4B64A3] pl-1" type="password" id="password" name="password"/><br/><br/>
                                            </div>
                                            <div>
                                                <input className= "bg-transparent outline-2 rounded-xl w-[100%] outline outline-[#FFD152] pl-1 text-[#FFD152] text-2xl py-3 font-poppins" type="submit" value="Open my Profile"/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            </>
        </Layout>

    )
}

export default Login;

export async function getStaticProps() {
    const pageData = await readDataFile("pagedata.json");
  
    return {
      props: {
        pageData: pageData,
      },
    };
  }

//   <div className="flex-column m-auto w-1/2 h-1/2">
//   <h1 className="text-xs md:text-5xl font-poppins font-bold text-[#FFD152] text-center">LOG IN</h1>
//   <p className="text-[#FFFFFF]">Not registered? <span className="text-[#FFD152]">Register</span> now </p>
// </div>
// <div className="m-auto">
// </div>