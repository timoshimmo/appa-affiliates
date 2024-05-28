import { useState } from 'react';
import { bottomCornerImage } from "../lib/images";
import { ROUTES } from '../lib/route-links';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Alert from '../components/forms/alert';
import Input from '../components/forms/input';
import PasswordInput from '../components/forms/password-input';
import Checkbox from '../components/forms/checkbox';
import Button from '../components/forms/button';
//import axios from 'axios';

type FormValues = {
    email: string;
    password: string;
    remember: boolean;
  }

  const userSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required('Email is required'),
    password:  yup.string().required('Password is required')
      .min(5, 'Password must be at least 5 characters long'),
    remember: yup.boolean().required("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted."),
  });

  const defaultValues = {
    email: "",
    password: "",
    remember: false
  };
  

const Login = () => {

    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const {
        register,
        handleSubmit,
    
        formState: { errors },
      } = useForm<FormValues>({
        defaultValues,
        resolver: yupResolver(userSchema),
      });
    
    function onSubmit({ email, password, remember }: FormValues) {

        if(!loading) {

            setLoading(true);


            const obj = {
                email: email,
                password: password,
                remember: remember
            };

            console.log(obj);

            window.setTimeout(() => {
                setLoading(false);
              }, 1000);

           
        /*    SERVICES.post(`admins/register`, obj)
            .then(response => {
            const res = response.data;
            console.log(res);
            setManagerLoading(false);
            setSuccessMsg("Admin login username and password have been sent to the registered email. Use those credentials to access the dashboard");

            })
            .catch(error => {
            setManagerLoading(false);
            const resError = error.response ? error.response.data.message : "Something went wrong please try again";
            setErrorMsg(resError);
            });

            */

        }
    }

    return (
        <div className="w-full max-h-screen h-screen justify-start items-center bg-white">
            <main className="w-full h-full block">
                <section className='flex relative justify-between items-center h-full'>
                    <div className="w-1/2 max-sm:hidden h-full flex flex-col justify-center pl-10 py-10 pr-40 bg-login-side-image bg-cover">
                        <p className="text-[#FFF7F1] text-[45px] text-left" style={{ fontFamily: 'Gayathri Lato' }}>“</p>
                        <h6 className="text-[#EF7822] text-[25px] mb-2 text-left font-semibold">Fun Fact</h6>
                        <span className="text-[#FFFFFF] text-[14px] text-left leading-6">
                        Did you know that Nike's online store has a feature called "Nike Fit" that uses augmented reality to help customers find their perfect shoe size? By using your smartphone's camera, Nike Fit scans your feet and provides recommendations on the best size and fit for different Nike shoe styles.
                        </span>
                        <p className="text-[#FFFFFF] text-[14px] text-right mt-5 py-2 px-4">Nike.com</p>
                        <div className="flex justify-end mt-6">
                            <img src={bottomCornerImage} alt="" />
                        </div>
                    </div>
                    <div className="w-1/2 max-sm:w-full h-full bg-[#FFFFFF] py-10 px-20 max-sm:px-10 overflow-y-auto">
                        <div className="w-full h-auto border border-[rgba(0, 0, 0, 0.125)] rounded-md p-10">
                            <h2 className="text-[#000000] text-[27px] font-bold text-left">Log in</h2>
                            <div className="mt-6 w-full">
                                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                                    {errorMsg ? (
                                        <Alert
                                        message={errorMsg}
                                        variant="error"
                                        closeable={true}
                                        className="my-4"
                                        onClose={() => setErrorMsg("")}
                                        />
                                    ) : null}

                                    {successMsg ? (
                                        <Alert
                                        message={successMsg}
                                        variant="success"
                                        className="my-4"
                                        onClose={() => setSuccessMsg("")}
                                        />
                                    ) : null}

                                    <Input
                                        label="Email"
                                        {...register('email')}
                                        type="email"
                                        variant="outline"
                                        className="mb-5"
                                        error={errors.email?.message!}
                                    />

                                    <PasswordInput
                                        label="Password"
                                        {...register('password')}
                                        error={errors.password?.message!}
                                        variant="outline"
                                        className="mb-5"
                                    />

                                    <Checkbox {...register('remember')} label='Remember me'/>

                                    <Button
                                        className="h-11 w-full mt-8"
                                        loading={loading || !errors}
                                        disabled={loading}
                                    >
                                        {loading ? "Loading..." : "Login"}
                                    </Button>

                                    <a href={ROUTES.SIGNUP} className="block text-[#EF7822] text-[13px] my-5 text-left">Forgot password?</a>
                                    
                                    <div className="flex space-x-1 mt-1"><span className="text-[#212529] text-[13px]">Don't have an account?</span><a href={ROUTES.SIGNUP} className="text-[#EF7822] text-[13px]">Register here</a></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Login;