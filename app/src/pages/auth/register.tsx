import { Field, Form, Formik } from "formik";
import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";
import { authOptions } from "../api/auth/[...nextauth]";

type formFields = {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  dob: Date;
  github?: string;
  linkedin?: string;
};

const Register = () => {
  const handleSubmit = async (values: formFields) => {
    const registerResponse = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const responseData = await registerResponse.json();

    if (registerResponse.ok && responseData.success) {
      const signinResponse = await signIn("credentials", {
        token: responseData.data.user,
        redirect: false,
      });

      if (signinResponse?.ok) {
        window.location.replace("/application");
      }
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          phone: "",
          dob: new Date(),
          github: "",
          linkedin: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="name">Name:</label>
          <Field name="name" type="text" id="name" className="bg-slate-700" />

          <label htmlFor="email">Email</label>
          <Field name="email" type="email" id="email" />

          <label htmlFor="phone">Phone</label>
          <Field name="phone" type="text" id="phone" />

          <label htmlFor="password">Password</label>
          <Field name="password" type="password" id="password" />

          <label htmlFor="confirm_password">Confirm Password</label>
          <Field name="confirmPassword" type="password" id="confirm_password" />

          <label htmlFor="dob">Date of Birth</label>
          <Field name="dob" type="date" id="dob" />

          <label htmlFor="github">Github</label>
          <Field name="github" type="text" id="github" />

          <label htmlFor="linkedin">Linkedin</label>
          <Field name="linkedin" type="text" id="linkedin" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default Register;

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
