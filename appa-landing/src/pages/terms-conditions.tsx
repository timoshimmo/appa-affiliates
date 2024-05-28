import Footer from '../layouts/generic/footer';
import Header from '../layouts/generic/header';
import { GetInTouchImage } from '../lib/images';
import { ROUTES } from '../lib/route-links';
import { ArrowRightUpIcon } from '../assets/icons/arrow-right-up';

const TermsConditions = () => {   

    return (
        <div className="w-full justify-start items-center bg-white">
            <main className="w-full block">
               <Header link={ROUTES.SIGNUP} buttonText='Get Started'/>
               <section className='w-full flex min-h-[300px] bg-[#FFFFFF] bg-cover bg-no-repeat bg-[center_center]' style={{ backgroundImage: `url(${GetInTouchImage})` }}>
                    <div className='w-full flex items-center px-20 max-sm:px-0 max-sm:justify-center'> 
                      <h1 className='text-[#FFFFFF] font-bold text-left text-[35px] max-sm:text-[30px]'>Terms & Conditions</h1>
                    </div>
                </section> 
                <section className='relative min-h-[450px] max-sm:min-h-[650px] bg-[#FFFFFF] py-10 px-20 max-sm:px-10'>
                    <div className='flex space-x-2 justify-center'>
                      <h4 className='text-[35px] font-semibold text-[#2F3934]'>Our <span className='text-[#EF7822]'>Terms & Conditions</span></h4>
                    </div>
                    <div className='w-full py-10 px-20 max-sm:px-5 text-left'>
                      <h6 className='text-[#000000] text-[14px] font-semibold'>Welcome to APPA</h6>
                      <p className='text-[#000000] text-[14px] mb-5'>These terms and conditions (“Terms”) govern your use of the APPA website, mobile application, and all related services (collectively, the “Service”).
Please read these Terms and Conditions ("Agreement", "Terms and Conditions") carefully before using our ecommerce delivering platform ("APPA") operated by Early Bird Crystal Technologies ("us", "we", or "our"). This Agreement sets forth the legally binding terms and conditions for your use of the Platform APPA.</p>
                        <span className='text-[#000000] text-[14px]'>By using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use the Service.</span>
                        <p className='text-[#000000] text-[14px] font-semibold'>1. Service Description</p>
                        <span className='text-[#000000] text-[14px]'>APPA is an online platform that facilitates delivery of items and food to end customers. The platform connects businesses with independent delivery drivers to provide a seamless, efficient, and reliable delivery service.
    APPA reserves the right to modify, suspend, or terminate the Service at any time and for any reason, without liability to you.</span>
                        <p className='text-[#000000] text-[14px] font-semibold mt-3'>2. Use of the Service</p>
                        <span className='text-[#000000] text-[14px]'>You must be at least 18 years of age to use the Service. By using the Service, you represent and warrant that you are at least 18 years old.
    You agree to use the Service only for lawful purposes and in compliance with all applicable laws, rules, and regulations.
    You are responsible for maintaining the confidentiality of your account information, including your username and password. You agree to notify APPA immediately of any unauthorized use of your account.</span>
                        <p className='text-[#000000] text-[14px] font-semibold mt-3'>3. Payment</p>
                        <span className='text-[#000000] text-[14px]'>You agree to pay all fees and charges associated with your use of the Service. Fees may include delivery fees, processing fees, and other charges as applicable.
    APPA uses third-party payment processors to handle payment transactions. By using the Service, you agree to be bound by the terms and conditions of the payment processor.</span>
                        <p className='text-[#000000] text-[14px] font-semibold mt-3'>4. User Content</p>
                        <span className='text-[#000000] text-[14px]'>You are solely responsible for any content you post or transmit through the Service (“User Content”). User Content includes but is not limited to text, images, and other materials.
    You represent and warrant that your User Content does not infringe on any third-party intellectual property rights or violate any applicable laws, rules, or regulations.
    By posting or transmitting User Content, you grant APPA a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use, reproduce, modify, distribute, and display your User Content in connection with the Service.</span>
                        <p className='text-[#000000] text-[14px] font-semibold mt-3'>5. Intellectual Property</p>
                        <span className='text-[#000000] text-[14px]'>APPA and its licensors own all intellectual property rights in the Service, including but not limited to trademarks, copyrights, and patents.
    You agree not to reproduce, modify, or distribute any part of the Service without the express written permission of APPA.</span>
    <p className='text-[#000000] text-[14px] font-semibold mt-3'>6. Indemnification</p>
                        <span className='text-[#000000] text-[14px]'>You agree to indemnify and hold APPA and its officers, directors, employees, and agents harmless from any and all claims, liabilities, damages, and expenses, including reasonable attorneys’ fees, arising out of or in connection with your use of the Service or your violation of these Terms.</span>
                        <p className='text-[#000000] text-[14px] font-semibold mt-3'>7. Disclaimer of Warranties</p>
                        <span className='text-[#000000] text-[14px]'>APPA provides the Service “as is” and “as available.” To the maximum extent permitted by law, APPA makes no representations or warranties of any kind, express or implied, regarding the Service, including but not limited to its availability, reliability, or fitness for a particular purpose.</span>
                        <p className='text-[#000000] text-[14px] font-semibold mt-3'>8. Limitation of Liability</p>
                        <span className='text-[#000000] text-[14px]'>To the maximum extent permitted by law, APPA shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of the Service or these Terms.</span>
                        <p className='text-[#000000] text-[14px] font-semibold mt-3'>9. Governing Law</p>
                        <span className='text-[#000000] text-[14px]'>These Terms and your use of the Service shall be governed by and construed in accordance with the laws of the jurisdiction in which APPA is headquartered, without giving effect to any principles of conflicts of law.</span>
                        <p className='text-[#000000] text-[14px] font-semibold mt-3'>10. Dispute Resolution</p>
                        <span className='text-[#000000] text-[14px]'>Any dispute arising out of or in connection with these Terms or your use of the Service shall be resolved through binding arbitration in accordance with the rules of Australia.
    Entire Agreement</span>
                    </div>
                    <div className='flex items-center px-20 max-sm:px-5'><span className='text-[#000000] text-[14px]'>Go to</span><a href={ROUTES.INDEX} className='text-[14px] text-[#EF7822] flex ml-1'> Home <ArrowRightUpIcon className='w-2 ml-1'/></a></div>
                </section>
            </main>
            <Footer type={1} />
        </div>
    );
};

export default TermsConditions;