import Footer from '../layouts/generic/footer';
import Header from '../layouts/generic/header';
import { PolicyHeaderImage } from '../lib/images';
import { ROUTES } from '../lib/route-links';

const CancellationPolicy = () => {   

    return (
        <div className="w-full justify-start items-center bg-white">
            <main className="w-full block">
               <Header link={ROUTES.SIGNUP} buttonText='Get Started'/>
               <section className='w-full flex min-h-[300px] bg-[#FFFFFF] bg-cover bg-no-repeat bg-[center_center]' style={{ backgroundImage: `url(${PolicyHeaderImage})` }}>
                    <div className='w-full flex items-center px-20 max-sm:px-0 max-sm:justify-center'> 
                      <h1 className='text-[#FFFFFF] font-bold text-left text-[35px] max-sm:text-[30px]'>Cancellation Policy</h1>
                    </div>
                </section> 
                <section className='relative min-h-[450px] max-sm:min-h-[650px] bg-[#FFFFFF] py-10 px-20 max-sm:px-10'>
                    <div className='flex space-x-2 justify-center'>
                      <h4 className='text-[35px] font-semibold text-[#2F3934]'>Our <span className='text-[#EF7822]'>Cancellation Policy</span></h4>
                    </div>
                    <div className='w-full py-10 px-20 max-sm:px-5 text-left'>
                        <p className='text-[#000000] text-[14px] mb-5'>At APPA, we understand that sometimes circumstances change and you may need to cancel your delivery order. This Cancellation Policy sets forth our policies and procedures for canceling orders placed through our ecommerce delivering platform ("APPA").</p>
                        <p className='text-[#000000] text-[14px] font-semibold mt-3'>Cancellation Procedures</p>
                        <span className='text-[#000000] text-[14px]'>You may cancel your order at any time before the order is processed for delivery. If the order has already been processed, please contact our customer service team to determine if a cancellation is possible.<br />
To cancel your order, please log in to your APPA account and follow the cancellation instructions on the order page. If you experience any issues canceling your order, please contact our customer service team at support@appastore.co
</span>
                        <p className='text-[#000000] text-[14px] font-semibold mt-3'>Refunds</p>
                        <span className='text-[#000000] text-[14px]'>If you cancel your order before it has been processed for delivery, you will receive a full refund to the original payment method used for the order. Refunds may take up to 24hour  to process.<br />
If the order has already been processed, we may not be able to issue a refund. Please contact our customer service team to determine if a refund is possible.
</span>
                        <p className='text-[#000000] text-[14px] font-semibold mt-3'>Changes to this Cancellation Policy</p>
                        <span className='text-[#000000] text-[14px]'>We may update this Cancellation Policy from time to time, and we will post the updated Cancellation Policy on the APPA platform. Your continued use of the APPA platform after the updated Cancellation Policy is posted constitutes your acceptance of the updated Cancellation Policy.</span>
                       
                        <p className='text-[#000000] text-[14px] font-semibold mt-3'>Contact Us</p>
                        <span className='text-[#000000] text-[14px]'>If you have any questions or concerns about this Cancellation Policy or our cancellation procedures, please contact us at support@appastore.co</span>
                    </div>
                </section>
            </main>
            <Footer type={1} />
        </div>
    );
};

export default CancellationPolicy;