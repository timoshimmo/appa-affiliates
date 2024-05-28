import Footer from '../layouts/generic/footer';
import Header from '../layouts/generic/header';
import { deliveryImage } from '../lib/images';
import { groceriesImage } from '../lib/images';
import { restautantImage } from '../lib/images';
import { globeImage } from '../lib/images';
import { phonesImage } from '../lib/images';
import { appStoreLogo } from "../lib/images";
import { playStoreLogo } from "../lib/images";
import { togetherImage } from '../lib/images';
import { join1Image } from '../lib/images';
import { join2Image } from '../lib/images';
import { join3Image } from '../lib/images';
import { HomeHeaderImage1 } from '../lib/images';
import { HomeHeaderImage2 } from '../lib/images';
import { HomeHeaderImage3 } from '../lib/images';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { ROUTES } from '../lib/route-links';

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px',
    width: '400px'
  }

  const slideImages = [
    {
      url: {HomeHeaderImage1},
      caption: 'Slide 1'
    },
    {
        url: {HomeHeaderImage2},
        caption: 'Slide 2'
    },
    {
        url: {HomeHeaderImage3},
        caption: 'Slide 3'
    },
  ];

  const images = [
    HomeHeaderImage1,
    HomeHeaderImage2,
    HomeHeaderImage3,
  ];

const Home = () => {
    return (
        <div className="w-full justify-start items-center bg-white">
            <main className="w-full block">
               <Header link='/signup' buttonText='Get Started'/>
                <section className='flex max-sm:flex-col relative md:justify-between items-center bg-[#EF7822] before:bg-cover before:bg-bottom-curve before:bg-[center_bottom] before:w-full before:absolute max-sm:before:bottom-[-150px] max-sm:before:h-[150px] before:bottom-[-200px] before:h-[220px] before:bg-no-repeat min-h-[400px] max-sm:min-h-[850px]'>
                    <div className='relative h-[450px] w-3/5 flex max-sm:w-full md:pt-10 md:pl-5 pt-20 max-sm:justify-center'>
                        <div className="slide-container" style={{ width: '100%', height: '100%'}}>
                            <Fade>
                                {images.map((item, index) => (
                                    <div key={index} className='flex justify-center'>
                                        <img className='h-[500px] max-sm:h-[380px]' src={item} />
                                    </div>
                                ))}
                            </Fade>
                        </div>
                    </div>
                    <div className='w-2/5 h-full max-sm:w-full md:pr-10 max-sm:pt-10 max-sm:px-5'>
                        <h1 className='text-[#FFFFFF] font-bold text-center text-[35px] max-sm:px-10'>Order Anything with AppaStore</h1>
                        <p className='text-[#FFFFFF] text-center text-[14px] pb-10 py-2'>We are the go-to option for quick, safe, and hassle-free delivery thanks to cutting edge technology and a staff of skilled specialists.</p>
                        <a href="/signup" className='rounded-md bg-[#FFFFFF] py-4 px-6 text-[#2F3934] text-[16px] font-semibold'>Get Started</a>
                    </div>
                </section>
                <section className='w-full mt-[200px] py-20 px-20 max-sm:py-10 max-sm:px-10'>
                    <h4 className='text-[35px] font-semibold'>Our Specialities</h4>
                    <p className='text-[18px] text-[#1F1F1F]'>We guarantee fast and safe delivery of all your goods!</p>
                    <div className='w-full flex justify-center py-10 grid grid-cols-3 max-sm:grid-cols-1 gap-10'>
                        <div className='bg-[#FFFBF8] pt-10 h-[400px] px-10'>
                            <div className='flex justify-center mb-7'>
                                <img
                                    src={restautantImage}
                                    alt=""
                                    className='w-40 rounded shadow-lg'
                                />
                            </div>
                           
                            <p className='text-[#2F3934] text-md font-semibold mb-4'>Top eateries in your location</p>
                            <span className='text-[#000000] text-[13px]'>With our easy-to-use app or website, you can order your favorite dishes from your favorite restaurants and have them delivered straight to your doorstep.</span>
                        </div>

                        <div className='bg-[#FFFBF8] pt-10 h-[400px] px-10'>
                            <div className='flex justify-center mb-7'>
                                <img
                                    src={deliveryImage}
                                    alt=""
                                    className='w-40 rounded shadow-lg'
                                />
                            </div>
                           
                            <p className='text-[#2F3934] text-md font-semibold mb-4'>Speedy delivery</p>
                            <span className='text-[#000000] text-[13px]'>We are a fast way to get send all your delivery with zero stress</span>
                        </div>

                        <div className='bg-[#FFFBF8] pt-10 h-[400px] px-10'>
                            <div className='flex justify-center mb-7'>
                                <img
                                    src={groceriesImage}
                                    alt=""
                                    className='w-40 rounded shadow-lg'
                                />
                            </div>
                           
                            <p className='text-[#2F3934] text-md font-semibold mb-4'>Grocery/Parcel delivery</p>
                            <span className='text-[#000000] text-[13px]'>Get your shopping done around the city from your favorite spots- Pharmacies, stationery, fashion stores, etc.</span>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <a href={ROUTES.ABOUT} className='rounded-md bg-[#EF7822] py-4 px-6 text-[#FFFFFF] text-sm font-semibold'>Learn More...</a>
                    </div>
                </section> 
                <section className='bg-[#FFFBF8] pt-20 pb-[250px] mt-[-90px] max-sm:mt-[-50px] px-20 max-sm:px-10'>
                    <h4 className='text-[35px] font-semibold text-[#2F3934]'>Our Advantages</h4>
                    <div className='w-full py-10 grid grid-cols-3 gap-10'>
                        <div className='max-sm:col-span-3 bg-[#FEF8FF] py-5 h-[200px] px-5 shadow'>
                            <h6 className='text-[#EF7822] font-semibold text-[17px] text-left'>1</h6>
                            <p className='text-[#000000] text-[13px] font-bold mb-4 text-left mt-5'>Experience</p>
                            <span className='block text-[#2F3934] text-[13px] text-left'>We have been in this industry for over ten years. More than --- people have benefited from our services.</span>
                        </div>

                        <div className='max-sm:col-span-3 bg-[#FFF8F9] py-5 h-[200px] px-5 shadow'>
                            <h6 className='text-[#EF7822] font-semibold text-[17px] text-left'>2</h6>
                            <p className='text-[#000000] text-[13px] font-bold mb-4 text-left mt-5'>Transparency</p>
                            <span className='block text-[#2F3934] text-[13px] text-left'>Our transport department specialists keep a close eye on shipments. You can also follow your products in real time.</span>
                        </div>

                        <div className='max-sm:col-span-3 bg-[#F8FFFE] py-5 h-[200px] px-5 shadow'>
                            <h6 className='text-[#EF7822] font-semibold text-[17px] text-left'>3</h6>
                            <p className='text-[#000000] text-[13px] font-bold mb-4 text-left mt-5'>Versatility</p>
                            <span className='block text-[#2F3934] text-[13px] text-left'>We organize delivery across three nations and counting for all different kinds of goods and services.</span>
                        </div>
                        <div className='flex max-sm:flex-col justify-center space-x-10 max-sm:space-x-0 max-sm:space-y-10 col-span-3'>

                            <div className='w-1/3 max-sm:w-full bg-[#FFFDF2] py-5 h-[200px] px-5 shadow'>
                                <h6 className='text-[#EF7822] font-semibold text-[17px] text-left'>4</h6>
                                <p className='text-[#000000] text-[13px] font-bold mb-4 text-left mt-5'>Prices</p>
                                <span className='block text-[#2F3934] text-[13px] text-left'>We offer the most competitive rates for any services you may require.</span>
                            </div>

                            <div className='w-1/3 max-sm:w-full bg-[#FFFFFF] py-5 h-[200px] px-5 shadow'>
                                <h6 className='text-[#EF7822] font-semibold text-[17px] text-left'>5</h6>
                                <p className='text-[#000000] text-[13px] font-bold mb-4 text-left mt-5'>Responsibility</p>
                                <span className='block text-[#2F3934] text-[13px] text-left'>We are accountable for every delivery to a customer. In addition to our prompt and dependable services, you can depend on safe delivery.</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='relative mb-40 bg-[#EF7822] px-10 before:bg-swerving-curve before:bg-[left_top] before:w-full before:bg-cover before:absolute max-sm:before:top-[-150px] max-sm:before:h-[150px] before:left-0 before:top-[-100px] before:h-[100px] before:bg-no-repeat min-h-[350px] max-sm:min-h-[350px] after:bg-bottom-right-curve after:bg-[left_bottom] after:w-full after:bg-cover after:absolute max-sm:after:bottom-[-150px] max-sm:after:h-[150px] after:left-0 after:bottom-[-200px] after:h-[200px] after:bg-no-repeat'>
                    <div className='flex justify-center mb-5'>
                        <img
                            src={globeImage}
                            alt=""
                        />
                        
                    </div>
                    <h4 className='text-[35px] font-semibold text-[#FFFFFF]'>Where You Can Find Us</h4>
                    <p className='text-[18px] text-[#FFFFFF]'>A complete list of all the cities we are currently operating. More cities coming soon</p>
                    <div className='grid grid-cols-5 gap-10 max-sm:grid-cols-2 w-full md:p-20 max-sm:py-20'>
                        <p className='rounded bg-[#FFFFFF] py-4 px-8 text-[#2F3934] text-lg max-sm:text-sm font-semibold'>Lagos</p>
                        <p className='rounded bg-[#FFFFFF] py-4 px-8 text-[#2F3934] text-lg max-sm:text-sm font-semibold'>Ibadan</p>
                        <p className='rounded bg-[#FFFFFF] py-4 px-8 text-[#2F3934] text-lg max-sm:text-sm font-semibold'>Abuja</p>
                        <p className='rounded bg-[#FFFFFF] py-4 px-8 text-[#2F3934] text-lg max-sm:text-sm font-semibold'>Ajah</p>
                        <p className='rounded bg-[#FFFFFF] py-4 px-8 text-[#2F3934] text-lg max-sm:text-sm font-semibold'>Lekki</p>
                    </div>
                </section>
                <section className='flex justify-between items-center max-sm:flex-col py-[200px] px-20 max-sm:px-10'>
                    <div className='w-1/2 md:pr-20 max-sm:w-full max-sm:order-2'>
                        <h4 className='text-[35px] font-semibold text-[#000000] md:text-left'>Download the app</h4>
                        <p className='text-[16px] text-[#000000] md:text-left mt-5'>Install the Appastore app and track your deliveries in real time. Share the app and earn rewards with our referral program</p>
                        <div className='flex space-x-5 mt-10'>
                            <a href='https://play.google.com/store/apps/details?id=com.appastore.app' target="_blank">
                                <img
                                    src={playStoreLogo}
                                    alt=""
                                    className='w-40'
                                />
                            </a>
                            <a href='#'>
                                <img
                                    src={appStoreLogo}
                                    alt=""
                                    className='w-40'
                                />
                            </a>

                            
                        </div>
                    </div>
                    <div className='w-1/2 flex justify-end max-sm:w-full max-sm:justify-center max-sm:order-1'>
                        <img
                            src={phonesImage}
                            alt=""
                        />
                    </div>
                </section>
                <section className='relative px-20 max-sm:px-10 max-sm:mt-[150px] z-50 bg-[#FFFAF5] before:bg-swerving-curve-light before:bg-[left_top] before:w-full before:bg-cover before:absolute max-sm:before:top-[-150px] max-sm:before:h-[150px] before:left-0 before:top-[-100px] before:h-[100px] before:bg-no-repeat min-h-[450px] max-sm:min-h-[650px] after:bg-bottom-curve-light after:bg-[left_bottom] after:w-full after:bg-cover after:absolute max-sm:after:bottom-[-150px] max-sm:after:h-[150px] after:left-0 after:bottom-[-200px] after:h-[200px] after:bg-no-repeat'>
                    <div className='flex justify-center mb-5'>
                        <img
                            src={togetherImage}
                            alt=""
                        />
                        
                    </div>
                    <h4 className='text-[35px] font-semibold text-[#2F3934]'>Join the Appa Family</h4>
                    <p className='text-[18px] text-[#2F3934]'>Let's Bring Happiness to Every Doorstep</p>
                    <div className='w-full py-10 grid grid-cols-3 max-sm:grid-cols-1 gap-10'>
                        <div className='pt-10 h-[500px] px-10'>
                            <div className='flex justify-center mb-7'>
                                <img
                                    src={join1Image}
                                    alt=""
                                />
                            </div>
                           
                            <p className='text-[#2F3934] text-lg font-bold mb-4'>Become a delivery rider</p>
                            <span className='text-[#000000] text-[13px]'>You can sign up to become part of our team delivery service. Our goal is to empower you to do what you love whilst earning from it.</span>
                            <a href={ROUTES.RIDERS} className='block rounded-md w-[150px] ml-auto mr-auto mt-5 bg-[#EF7822] py-4 px-6 text-[#FFFFFF] text-sm font-semibold'>Join Us</a>
                        </div>

                        <div className='pt-10 h-[500px] px-10'>
                            <div className='flex justify-center mb-7'>
                                <img
                                    src={join2Image}
                                    alt=""
                                />
                            </div>
                           
                            <p className='text-[#2F3934] text-lg font-bold mb-4'>Become a merchant</p>
                            <span className='text-[#000000] text-[13px]'>Grow with Appastore! Our technology and user base can help you boost sales and unlock new opportunities!</span>
                            <a href={ROUTES.MERCHANTS} className='block w-[150px] ml-auto mr-auto mt-5 rounded-md bg-[#EF7822] py-4 text-[#FFFFFF] text-sm font-semibold'>Join Us</a>
                        </div>

                        <div className='pt-10 h-[500px] px-10'>
                            <div className='flex justify-center mb-7'>
                                <img
                                    src={join3Image}
                                    alt=""
                                />
                            </div>
                           
                            <p className='text-[#2F3934] text-lg font-bold mb-4'>Join our affiliate program</p>
                            <span className='text-[#000000] text-[13px]'>We would love to work with intelligent, innovative and self organizing folks. Easily earn and become a partner</span>
                            <a href={ROUTES.AFFILIATES} className='block w-[150px] ml-auto mr-auto mt-5 rounded-md bg-[#EF7822] py-4 px-6 text-[#FFFFFF] text-sm font-semibold'>Join Us</a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;