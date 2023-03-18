import { ChangeEvent, FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

type formData = {
  email: string;
  password: string;
};

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  // backend error
  const [error, setError] = useState("");

  const handleFormSubmit = async (values: formData) => {
    console.log(values);

    const res = await signIn("credentials", { ...values, redirect: false });

    if (res?.ok) {
      window.location.replace("/");
      return;
    }

    if (res?.status == 401) {
      setError("Invalid username/password.");
    }

    // handle error
  };

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleFormSubmit}
        validationSchema={loginSchema}
      >
        {(formikProps) => (
          <Form>
            {error && <div>{error}</div>}
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" id="email" />
            <ErrorMessage
              name="email"
              component="div"
              className="field-error"
            />

            <label htmlFor="password">Password</label>
            <Field name="password" type="password" id="password" />
            <ErrorMessage
              name="password"
              component="div"
              className="field-error"
            />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;


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
