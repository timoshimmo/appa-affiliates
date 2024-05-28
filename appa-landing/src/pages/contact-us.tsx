import { useState } from 'react';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Footer from '../layouts/generic/footer';
import Header from '../layouts/generic/header';
import { DriverMiddleImage } from '../lib/images';
import { ROUTES } from '../lib/route-links';
import Input from '../components/forms/input';
import Alert from '../components/forms/alert';
import Button from '../components/forms/button';
import TextArea from '../components/forms/text-area';
import { contactTwitterIcon } from '../lib/images';
import { contactFacebookIcon } from '../lib/images';
import { contactInstagramIcon } from '../lib/images';

type FormValues = {
  fullName: string;
  email: string;
  message: string;
}

const contactSchema = yup.object().shape({
  fullName: yup
    .string()
    .required('Fullname is required'),
  email: yup
    .string()
    .email("Invalid email format")
    .required('Email is required'),
  message: yup.string().required('Message is required')
    .min(10, 'Message must be at least 10 characters long'),
});

const defaultValues = {
  fullName: "",
  email: "",
  message: "",
};


const ContactUs = () => {   

    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const {
      register,
      handleSubmit,
  
      formState: { errors },
    } = useForm<FormValues>({
      defaultValues,
      resolver: yupResolver(contactSchema),
    });

    function onSubmit({ fullName, email, message }: FormValues) {

      if(!loading) {

          setLoading(true);


          const obj = {
              fullName: fullName,
              email: email,
              message: message
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
        <div className="w-full justify-start items-center bg-white">
            <main className="w-full block">
               <Header link={ROUTES.SIGNUP} buttonText='Get Started'/>
               <section className='w-full flex min-h-[300px] bg-[#FFFFFF] bg-cover bg-no-repeat bg-[center_center]' style={{ backgroundImage: `url(${DriverMiddleImage})` }}>
                    <div className='w-full flex items-center px-20 max-sm:px-0 max-sm:justify-center'> 
                      <h1 className='text-[#FFFFFF] font-bold text-left text-[35px] max-sm:text-[30px]'>Contact Us</h1>
                    </div>
                </section> 
                <section className='relative min-h-[450px] max-sm:min-h-[650px] bg-[#FFFFFF] py-10 px-20 max-sm:px-10'>
                  <div className='flex justify-center space-x-2'>
                    <h4 className='text-[35px] font-semibold text-[#2F3934]'>Contact <span className='text-[#EF7822]'>AppaStore</span></h4>
                  </div>
                  <div className='w-full py-20 flex max-sm:flex-col md:space-x-20'>
                    <div className='w-1/2 max-sm:w-full max-sm:mt-20 max-sm:order-2'>
                      <h6 className='text-[#000000] text-[16px] text-left mb-5'>To get in touch with Appastore, call or send us an email. For specific requests, kindly fill the form below</h6>

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

                          <div className='flex w-full space-x-4'>

                                <Input
                                  label="Your name"
                                  {...register('fullName')}
                                  type="text"
                                  variant="solid"
                                  className="mb-5 w-full"
                                  error={errors.fullName?.message!}
                              />

                              <Input
                                  label="Your email"
                                  {...register('email')}
                                  type="email"
                                  variant="solid"
                                  className="mb-5 w-full"
                                  error={errors.email?.message!}
                              />

                          </div>
                          
                          <TextArea
                            label="Write your comment here"
                            {...register('message')}
                            variant="solid"
                            className="mb-5"
                            error={errors.message?.message!}
                          />

                          <div className='w-full flex justify-start'>
                            <Button
                                className="h-11 w-[200px] mt-6"
                                loading={loading || !errors}
                                disabled={loading}
                            >
                                {loading ? "Loading..." : "Submit Message"}
                            </Button>
                          </div>  
                        </form>

                    </div>

                    <div className='w-1/2 max-sm:w-full max-sm:order-1'>
                        <div className='w-full py-10 bg-gray-100 rounded-md px-10'>
                            <h6 className='text-[#656867] text-[14px] font-semibold text-left mb-2'>Social Links</h6>
                            <div className='w-full flex space-x-2 mb-7'>
                              <a href="https://twitter.com/MyappaNg?t=Mhz-iMfoqOhXlIwf0FMEXw&s=09" target="_blank">
                                <img
                                    src={contactTwitterIcon}
                                    alt=""
                                  />

                              </a>
                                
                              <a href="https://www.facebook.com/settings?tab=profile&section=username" target="_blank">
                                <img
                                    src={contactFacebookIcon}
                                    alt=""
                                  />                             
                              </a>
                              
                              <a href="https://instagram.com/appastoreng?igshid=MzNlNGNkZWQ4Mg==" target="_blank"> 
                                <img
                                  src={contactInstagramIcon}
                                  alt=""
                                />
                              </a>
                                
                            </div>
                            <div className='w-full mb-7'>
                              <h6 className='text-[#656867] text-[14px] font-semibold text-left mb-2'>Address</h6>
                              <p className='text-[#2F3934] text-[14px] text-left'>8, Fadeyi Street, Off Awolowo Road, Ikeja, Lagos.</p>
                            </div>
                            <div className='w-full mb-7'>
                              <h6 className='text-[#656867] text-[14px] font-semibold text-left mb-2'>Email Address</h6>
                              <p className='text-[#2F3934] text-[14px] text-left'>support@appastore.co</p>
                            </div>
                            <div className='w-full mb-7'>
                              <h6 className='text-[#656867] text-[14px] font-semibold text-left mb-2'>Contact</h6>
                              <p className='text-[#2F3934] text-[14px] text-left'>+234 912 454 7698</p>
                            </div>
                        </div>
                    </div>
                  </div>
                </section>
            </main>
            <Footer type={1} />
        </div>
    );
};

export default ContactUs;