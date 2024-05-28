import Footer from '../layouts/generic/footer';
import Header from '../layouts/generic/header';
import { PolicyHeaderImage } from '../lib/images';
import { ROUTES } from '../lib/route-links';

const RefundPolicy = () => {   

    return (
        <div className="w-full justify-start items-center bg-white">
            <main className="w-full block">
               <Header link={ROUTES.SIGNUP} buttonText='Get Started'/>
               <section className='w-full flex min-h-[300px] bg-[#FFFFFF] bg-cover bg-no-repeat bg-[center_center]' style={{ backgroundImage: `url(${PolicyHeaderImage})` }}>
                    <div className='w-full flex items-center px-20 max-sm:px-0 max-sm:justify-center'> 
                      <h1 className='text-[#FFFFFF] font-bold text-left text-[35px] max-sm:text-[30px]'>Refund Policy</h1>
                    </div>
                </section> 
                <section className='relative min-h-[450px] max-sm:min-h-[650px] bg-[#FFFFFF] py-10 px-20 max-sm:px-10'>
                    <div className='flex space-x-2 justify-center'>
                      <h4 className='text-[35px] font-semibold text-[#2F3934]'>Our <span className='text-[#EF7822]'>Refund Policy</span></h4>
                    </div>
                    <div className='w-full py-10 px-20 max-sm:px-5 text-left'>
                      <p className='text-[#000000] text-[14px] mb-5'>At APPA, we are committed to providing our customers with high-quality delivery services. This Refund Policy sets forth our policies and procedures for processing refunds in connection with your use of our ecommerce delivering platform ("APPA").</p>
                        <p className='text-[#000000] text-[14px] mb-1'>Eligibility for Refunds To be eligible for a refund, you must meet the following criteria:</p>
                          <ul className='list-disc px-10 mb-5'>
                            <li><span className='text-[#000000] text-[14px]'>You must have used the APPA platform to place the delivery order</span></li>
                            <li><span className='text-[#000000] text-[14px]'>The delivery must not have been completed or attempted</span></li>
                            <li><span className='text-[#000000] text-[14px]'>The item to be delivered must not have been damaged</span></li>
                            <li><span className='text-[#000000] text-[14px]'>You must request a refund within 24 hours of placing the order</span></li>
                          </ul>

                        <p className='text-[#000000] text-[14px] mb-5'>Refund Procedures To request a refund, please contact us at support@appastore.co with your order number and a detailed explanation of the reason for the refund request. We will review your request and notify you of the status of your refund as soon as possible.</p>
                        <p className='text-[#000000] text-[14px] mb-5'>If your refund request is approved, we will process the refund within 24hours and issue the refund to the original payment method used for the order. We are not responsible for any fees or charges incurred by the payment provider or bank.</p>
                        <p className='text-[#000000] text-[14px] mb-5'>Exchanges We do not offer exchanges for delivery orders placed through the APPA platform. If you wish to cancel your order and place a new order for a different item or delivery, please follow the refund procedures above and place a new order.</p>
                        <p className='text-[#000000] text-[14px] mb-5'>Changes to this Refund Policy We may update this Refund Policy from time to time, and we will post the updated Refund Policy on the APPA platform. Your continued use of the APPA platform after the updated Refund Policy is posted constitutes your acceptance of the updated Refund Policy.</p>
                        <p className='text-[#000000] text-[14px] mb-5'>Contact Us If you have any questions or concerns about this Refund Policy or our refund procedures, please contact us at support@appastore.co</p>
                    </div>
                </section>
            </main>
            <Footer type={1} />
        </div>
    );
};

export default RefundPolicy;