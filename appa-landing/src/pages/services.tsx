import Footer from '../layouts/generic/footer';
import Header from '../layouts/generic/header';
import { ServicesHeaderImage } from '../lib/images';
import { ROUTES } from '../lib/route-links';


const Services = () => {

    return (
        <div className="w-full justify-start items-center bg-white">
            <main className="w-full block">
               <Header link={ROUTES.SIGNUP} buttonText='Get Started'/>
               <section className='w-full flex min-h-[300px] bg-[#FFFFFF] max-sm:bg-cover bg-contain bg-no-repeat bg-[top_center]' style={{ backgroundImage: `url(${ServicesHeaderImage})` }}>
                    <div className='w-full flex items-center px-20 max-sm:px-0 max-sm:justify-center'> 
                      <h1 className='text-[#FFFFFF] font-bold text-left text-[35px] max-sm:text-[30px]'>Our Services</h1>
                    </div>
                </section> 
                <section className='relative min-h-[450px] max-sm:min-h-[650px] bg-[#FFFFFF] py-10 px-20 max-sm:px-10'>
                  <h4 className='text-[35px] font-semibold text-[#2F3934] text-[16px] md:px-60'>We Provide Reliable Transport Service for All Kinds Of Goods</h4>
                  <div className='w-full py-20 grid grid-cols-3 gap-10'>
                        <div className='flex flex-col items-center max-sm:col-span-3 bg-[#FFFDFB] py-5 h-[250px] px-5 drop-shadow-lg'>
                            <p className='text-[#000000] text-[14px] font-semibold my-3'>Appa Food Service Delivery</p>
                            <span className='block text-[#000000] text-[13px]'>Looking for a food delivery service that's fast, reliable, and offers an amazing selection of mouth-watering meals? Look no further than our food delivery business! With our easy-to-use app or website, you can order your favorite dishes from your favorite restaurants and have them delivered straight to your doorstep.</span>
                        </div>

                        <div className='flex flex-col items-center max-sm:col-span-3 bg-[#FFFDFB] py-5 h-[250px] px-5 drop-shadow-lg'>
                            <p className='text-[#000000] text-[14px] font-semibold my-3'>Appa Store</p>
                            <span className='block text-[#000000] text-[13px]'>Looking for a fast and affordable way to get your shopping done without leaving your home? Our delivery business has got you covered! With just a phone call or online order, you can have all of your favorite items from the store delivered straight to your doorstep.</span>
                        </div>

                        <div className='flex flex-col items-center max-sm:col-span-3 bg-[#FFFDFB] py-5 h-[250px] px-5 drop-shadow-lg'>
                            <p className='text-[#000000] text-[14px] font-semibold my-3'>Appa Parcel Delivery</p>
                            <span className='block text-[#000000] text-[13px]'>Do you need to send a parcel but don't have the time or means to do it yourself? Our parcel delivery business has got you covered! With our fast and affordable service, you can send and receive parcels from anywhere.</span>
                        </div>
                    </div>
                </section>
                <section className='bg-[#FFFBF8] py-20 px-20 max-sm:px-10'>
                    <h4 className='text-[35px] font-semibold text-[#2F3934]'>Our Advantages</h4>
                    <div className='w-full py-10 grid grid-cols-3 gap-10'>
                        <div className='max-sm:col-span-3 bg-[#FEF8FF] py-5 h-[170px] px-5 shadow'>
                            <h6 className='text-[#EF7822] font-semibold text-[17px] text-left'>1</h6>
                            <p className='text-[#000000] text-[13px] font-bold mb-4 text-left mt-5'>Experience</p>
                            <span className='block text-[#2F3934] text-[13px] text-left'>We have been in this industry for over ten years. More than --- people have benefited from our services.</span>
                        </div>

                        <div className='max-sm:col-span-3 bg-[#FFF8F9] py-5 h-[170px] px-5 shadow'>
                            <h6 className='text-[#EF7822] font-semibold text-[17px] text-left'>2</h6>
                            <p className='text-[#000000] text-[13px] font-bold mb-4 text-left mt-5'>Transparency</p>
                            <span className='block text-[#2F3934] text-[13px] text-left'>Our transport department specialists keep a close eye on shipments. You can also follow your products in real time.</span>
                        </div>

                        <div className='max-sm:col-span-3 bg-[#F8FFFE] py-5 h-[170px] px-5 shadow'>
                            <h6 className='text-[#EF7822] font-semibold text-[17px] text-left'>3</h6>
                            <p className='text-[#000000] text-[13px] font-bold mb-4 text-left mt-5'>Versatility</p>
                            <span className='block text-[#2F3934] text-[13px] text-left'>We organize delivery across three nations and counting for all different kinds of goods and services.</span>
                        </div>
                        <div className='flex max-sm:flex-col justify-center space-x-10 max-sm:space-x-0 max-sm:space-y-10 col-span-3'>

                            <div className='w-1/3 max-sm:w-full bg-[#FFFDF2] py-5 h-[170px] px-5 shadow'>
                                <h6 className='text-[#EF7822] font-semibold text-[17px] text-left'>4</h6>
                                <p className='text-[#000000] text-[13px] font-bold mb-4 text-left mt-5'>Prices</p>
                                <span className='block text-[#2F3934] text-[13px] text-left'>We offer the most competitive rates for any services you may require.</span>
                            </div>

                            <div className='w-1/3 max-sm:w-full bg-[#FFFFFF] py-5 h-[170px] px-5 shadow'>
                                <h6 className='text-[#EF7822] font-semibold text-[17px] text-left'>5</h6>
                                <p className='text-[#000000] text-[13px] font-bold mb-4 text-left mt-5'>Responsibility</p>
                                <span className='block text-[#2F3934] text-[13px] text-left'>We are accountable for every delivery to a customer. In addition to our prompt and dependable services, you can depend on safe delivery.</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer type={1} />
        </div>
    );
};

export default Services;