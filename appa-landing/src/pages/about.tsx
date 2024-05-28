import Footer from '../layouts/generic/footer';
import Header from '../layouts/generic/header';
import { AboutHeaderImage } from '../lib/images';
import { AboutMiddleImage } from '../lib/images';
import { ROUTES } from '../lib/route-links';

const About = () => {   

    return (
        <div className="w-full justify-start items-center bg-white">
            <main className="w-full block">
               <Header link={ROUTES.SIGNUP} buttonText='Get Started'/>
               <section className='w-full flex min-h-[300px] bg-[#FFFFFF] bg-cover bg-no-repeat bg-[top_center]' style={{ backgroundImage: `url(${AboutHeaderImage})` }}>
                    <div className='w-full flex items-center px-20 max-sm:px-0 max-sm:justify-center'> 
                      <h1 className='text-[#FFFFFF] font-bold text-left text-[35px] max-sm:text-[30px]'>About Us</h1>
                    </div>
                </section> 
                <section className='relative min-h-[450px] max-sm:min-h-[650px] bg-[#FFFFFF] py-10 px-20 max-sm:px-10'>
                  <div className='flex justify-center space-x-2'>
                    <h4 className='text-[35px] font-semibold text-[#2F3934] text-[16px]'>About</h4>
                    <h4 className='text-[35px] font-semibold text-[#EF7822] text-[16px]'>AppaStore</h4>
                  </div>
                  
                  <div className='w-full py-20 grid grid-cols-2 max-sm:grid-cols-1 gap-10'>
                    <p className='text-[#000000] text-[14px] font-semibold text-left'>Our team is made up of dedicated professionals who are passionate about making your life easier. We use the latest technology to ensure that your orders are processed quickly and efficiently, and we go the extra mile to make sure that you are completely satisfied with our service and we are always here to help you achieve your goals.</p>
                    <p className='text-[#000000] text-[14px] font-semibold text-left'>Welcome to Appa, the premier delivery service for all your needs. We are a tech start-up operating in Nigeria, Australia, and Canada, and we specialize in delivering a wide range of items and food straight to your customer’s door.</p>
                    <p className='text-[#000000] text-[14px] font-semibold text-left'>At Appa, we're passionate about helping businesses grow by taking care of their delivery needs. Our platform is designed to be user-friendly, affordable, and highly secure, no matter the size of your operation. Our goal is to empower you to focus on what you do best - creating amazing products that your customers love.</p>
                    <p className='text-[#000000] text-[14px] font-semibold text-left'>At Appa, we pride ourselves on our unwavering commitment to integrity and reliability. You can trust us to get your products where they need to go, safely and on time. Let's do this!</p>
                    <p className='text-[#000000] text-[14px] font-semibold text-left'>Thanks for choosing Appa as your go-to delivery platform! We're stoked to be working with you and can't wait to help you take your business to the next level. Our team of logistics experts is always available to answer your questions and provide real-time updates on your deliveries.</p>
                    <p className='text-[#000000] text-[14px] font-semibold text-left'>We believe in building long-lasting relationships with our customers, and we understand the importance of timely and reliable deliveries. That's why we work hard to ensure that your products are delivered with the utmost care and attention to detail.</p>    
                  </div>
                </section>
                <section className='flex max-sm:flex-col bg-[#FFFBF8] py-20 px-20 max-sm:px-10'>
                    <div className='w-1/2 max-sm:w-full flex flex-col justify-center md:pr-20 max-sm:order-2'>
                      <h4 className='text-[35px] font-semibold text-[#2F3934] mb-2 text-left'>Quality services and committed employees</h4>
                      <p className='text-[#000000] text-[14px] font-semibold text-left'>We have been well equipped to deliver on our mission. This is not just a job for us, its about making a difference. We do the job by creating a very friendly and efficient environment for our staff and clients. Hence, our clients are always in control of what is going on</p>
                    </div>
                    
                    <div className='w-1/2 max-sm:w-full max-sm:mb-20 max-sm:order-1'>
                        <img
                          src={AboutMiddleImage}
                          alt=""
                          className='border rounded'
                        />
                    </div>
                </section>
            </main>
            <Footer type={1} />
        </div>
    );
};

export default About;