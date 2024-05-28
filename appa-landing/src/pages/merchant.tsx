import { useEffect, useState } from 'react';
import Footer from '../layouts/generic/footer';
import Header from '../layouts/generic/header';
import { MerchantHeaderImage } from '../lib/images';
import { MerchantMiddleImage } from '../lib/images';
import { rocketIcon } from '../lib/images';
import { starIcon } from '../lib/images';
import { pinIcon } from '../lib/images';
import { ArrowRightIcon } from '../assets/icons/arrow-right';
import Panel from '../components/accordion/panel';

    const panels = [
        {
            label: 'How does this work?',
            content: 'Its pretty simple! All you have to do is register and input the necessary details. Then get in contact with us so we can take it from there',
        },
        {
            label: 'What are the products you deliver?',
            content: 'We deliver all kinds of products from stores, restaurants, bakeries and parcels',
        },	
        {
            label: 'What is Appastore?',
            content: 'Appastore is an online delivery platform that provides delivery services for businesses that offer or plan to offer online purchase services to their customers',
        },
        {
            label: 'What is the estimated time for delivery of your goods?',
            content: 'It takes from 15 minutes to a an hour for each delivery to get to their destination',
        },
        {
            label: 'How will I receive the orders?',
            content: 'After making an order, a rider is sent to your address and items are picked at your doorstep'
        },
    ];

const Merchant = () => {

   // const iframeRef = useRef<HTMLIFrameElement | null>(null);
    const [activeTab, setActiveTab] = useState<number | undefined>(0);

 /*   useEffect(() => {
        //const head = document.querySelector("head");
        const script = document.createElement("script");
        script.async = true
    
        script.setAttribute("src", "https://groot.mailerlite.com/js/w/webforms.min.js?vc2affd81117220f6978e779b988d5128");
        //head?.appendChild(script);

        document.body.appendChild(script)
    
        return () => {
            document.body.removeChild(script);
        };
      }, []); */

     /* useEffect(() => {
        const iframe = iframeRef.current;
        if (!iframe) return undefined;
    
        // not sure if we need to check if the iframe already loaded (e.g. readyState)
    
        const listener = () => console.log("event listener");
    
        iframe.addEventListener("load", listener);
    
        return () => {
          iframe.removeEventListener("load", listener);
        };
      });*/

      
      useEffect(()=> {
        
        var ifr = document.getElementById("JotFormIFrame-231652306855053") as HTMLIFrameElement;
        if (ifr) {
          var src = ifr.src;
          var iframeParams: any = [];
          if (window.location.href && window.location.href.indexOf("?") > -1) {
            iframeParams = iframeParams.concat(window.location.href.substr(window.location.href.indexOf("?") + 1).split('&'));
          }
          if (src && src.indexOf("?") > -1) {
            iframeParams = iframeParams.concat(src.substr(src.indexOf("?") + 1).split("&"));
            src = src.substr(0, src.indexOf("?"))
          }
          iframeParams.push("isIframeEmbed=1");
          ifr.src = src + "?" + iframeParams.join('&');
        }
        window.handleIFrameMessage = function(e: any) {
          if (typeof e.data === 'object') { return; }
          var args = e.data.split(":");
          var iframe: any = null;
          if (args.length > 2) { iframe = document.getElementById("JotFormIFrame-" + args[(args.length - 1)]); } else { iframe = document.getElementById("JotFormIFrame"); }
          if (!iframe) { return; }
          switch (args[0]) {
            case "scrollIntoView":
              iframe.scrollIntoView();
              break;
            case "setHeight":
              iframe.style.height = args[1] + "px";
              if (!isNaN(args[1]) && parseInt(iframe.style.minHeight) > parseInt(args[1])) {
                iframe.style.minHeight = args[1] + "px";
              }
              break;
            case "collapseErrorPage":
              if (iframe.clientHeight > window.innerHeight) {
                iframe.style.height = window.innerHeight + "px";
              }
              break;
            case "reloadPage":
              window.location.reload();
              break;
            case "loadScript":
              if( !window.isPermitted(e.origin, ['jotform.com', 'jotform.pro']) ) { break; }
              var src = args[1];
              if (args.length > 3) {
                  src = args[1] + ':' + args[2];
              }
              var script = document.createElement('script');
              script.src = src;
              script.type = 'text/javascript';
              document.body.appendChild(script);
              break;
            case "exitFullscreen":
              if (window.document.exitFullscreen) window.document.exitFullscreen();
              break;
          }
          var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false;
          if(isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) {
            var urls = {"docurl":encodeURIComponent(document.URL),"referrer":encodeURIComponent(document.referrer)};
            iframe.contentWindow.postMessage(JSON.stringify({"type":"urls","value":urls}), "*");
          }
        };
        window.isPermitted = function(originUrl: string, whitelisted_domains: any) {
          var url = document.createElement('a');
          url.href = originUrl;
          var hostname = url.hostname;
          var result = false;
          if( typeof hostname !== 'undefined' ) {
            whitelisted_domains.forEach(function(element: any) {
                if( hostname.slice((-1 * element.length - 1)) === '.'.concat(element) ||  hostname === element ) {
                    result = true;
                }
            });
            return result;
          }
        };
        if (window.addEventListener) {
          window.addEventListener("message", window.handleIFrameMessage, false);
        } else if (window.attachEvent) {
          window.attachEvent("onmessage", window.handleIFrameMessage);
        }
      });

      

      const activateTab = (index: number | undefined) => {
        setActiveTab((prevState: number | undefined) => ( prevState === index ? -1 : index));
      }
   

    return (
        <div className="w-full justify-start items-center bg-white">
            <main className="w-full block">
               <Header link='https://ng.appastore.co/store/apply' buttonText='Become A Merchant'/>
                <section className='flex px-20 py-10 max-sm:px-10 relative justify-between items-center bg-[#FFFAF5] before:bg-cover before:left-0 z-10 before:bg-bottom-curve-left-light before:bg-[center_bottom] before:w-full before:absolute max-sm:before:bottom-[-150px] max-sm:before:h-[150px] before:bottom-[-150px] before:h-[150px] before:bg-no-repeat min-h-[450px] max-sm:min-h-[350px]'>
                    <div className='w-1/2 max-sm:w-full justify-center max-sm:pt-10'>
                        <h1 className='text-[#2F3934] font-bold text-left max-sm:text-center text-[35px]'>Become a successful business person with Appastore</h1>
                        <p className='text-[#2F3934] text-left max-sm:text-center text-[14px] pb-10 py-2'>Register and become a successful merchant. Sell more and increase your sales with Appastore. Start now and enjoy all our  benefits</p>
                    </div>
                    <div className='flex justify-end w-1/2 max-sm:hidden'>
                        <img
                            src={MerchantHeaderImage}
                            alt=""
                            className='w-[450px]'
                        />
                    </div>
                </section>
                <section className='w-full flex max-sm:flex-col mt-[20px] max-sm:pt-[250px] min-h-[800px] bg-cover bg-no-repeat' style={{ backgroundImage: `url(${MerchantMiddleImage})` }}>
                    {/*
                    <div className='w-1/2 z-50 px-20 max-sm:w-full max-sm:order-2 max-sm:px-10'>
                        <iframe
                            id="JotFormIFrame-231652306855053"
                            title="Form"
                            allowTransparency
                            allowFullScreen
                            allow="geolocation; microphone; camera"
                            src="https://form.jotform.com/231652306855053"
                            frameBorder="0"
                            style={{ width:"100%", height:"900px", border:"none" }}
                            scrolling="no"
                        >
                        </iframe>
                    </div>
    */}
                    <div className='w-full flex items-center justify-center px-10 max-sm:w-full max-sm:order-1'> 
                        <div className='flex flex-col items-center'>
                            <h1 className='text-[#FFFFFF] font-bold text-center text-[30px] mb-5'>Not a merchant with Appastore yet?</h1>
                            <a href="#" className='block w-[150px] rounded-md bg-[#EF7822] py-4 px-6 text-[#FFFFFF] text-sm font-semibold'>Get Started</a>
                        </div>    
                    </div>
                </section> 
                <section className='relative min-h-[450px] max-sm:min-h-[650px] bg-[#FFFBF8] py-20 px-20 max-sm:px-10 after:bg-bottom-curve-light after:bg-[left_bottom] after:w-full after:bg-cover after:absolute max-sm:after:bottom-[-150px] max-sm:after:h-[150px] after:left-0 after:bottom-[-200px] after:h-[200px] after:bg-no-repeat'>
                    <h4 className='text-[35px] font-semibold text-[#000000]'>How to register with us</h4>
                    <div className='w-full py-20 grid grid-cols-3 gap-10'>
                        <div className='flex flex-col items-center max-sm:col-span-3 bg-[#FFFFFF] py-5 h-[200px] px-5 drop-shadow-lg'>
                            <img
                                src={rocketIcon}
                                alt=""
                            />
                            <p className='text-[#2F3934] text-[14px] font-semibold my-3'>Sign up</p>
                            <span className='block text-[#2F3934] text-[13px]'>A simple process of registering your business and other info for the slot,You’re ready to go!</span>
                        </div>

                        <div className='flex flex-col items-center max-sm:col-span-3 bg-[#FFFFFF] py-5 h-[200px] px-5 drop-shadow-lg'>
                            <img
                                src={starIcon}
                                alt=""
                            />
                            <p className='text-[#2F3934] text-[14px] font-semibold my-3'>Log in</p>
                            <span className='block text-[#2F3934] text-[13px]'>After your registration has been approved, you can simply start by logging in </span>
                        </div>

                        <div className='flex flex-col items-center max-sm:col-span-3 bg-[#FFFFFF] py-5 h-[200px] px-5 drop-shadow-lg'>
                            <img
                                src={pinIcon}
                                alt=""
                            />
                            <p className='text-[#2F3934] text-[14px] font-semibold my-3'>Send deliveries</p>
                            <span className='block text-[#2F3934] text-[13px]'>You can start selling your goods. Get ready to start earning!</span>
                        </div>
                    </div>
                    <a href="#" className='block mx-auto w-[150px] rounded-md bg-[#EF7822] py-4 px-6 text-[#FFFFFF] text-sm font-semibold'>Get Started</a>
                </section>
                <section className='relative w-full flex max-sm:flex-col min-h-[500px] pt-40 pb-20 px-20 max-sm:pb-10 after:w-full after:bg-[#FFFFFF] after:absolute max-sm:after:bottom-[-150px] max-sm:after:h-[150px] after:left-0 after:bottom-[-150px] after:h-[150px] z-50'>
                    <div className='w-1/2 md:pr-20 max-sm:w-full max-sm:order-1'>
                        <h4 className='text-[35px] font-semibold text-[#000000] md:text-left'>Got any questions? <br />We got you</h4>
                        <p className='text-[16px] text-[#000000] md:text-left mt-5'>We have a curated list of most popular questions here. If none of your questions are here. Shoot us a quick email, we’ll be happy to help!</p>
                        <a href="mailto: support@appastore.co" target="_blank" className='flex w-[120px] items-center space-x-2 py-1 mt-3 px-2 text-[#000000] text-sm font-semibold'><span>Send Email </span><ArrowRightIcon className='w-3'/></a>
                    </div>
                   <div className='w-1/2 max-sm:w-full max-sm:mt-10 max-sm:order-2'>
                        <div className='accordion' role='tablist'>
                            {panels.map((panel, index) => 
                                <Panel
                                    key={index}
                                    {...panel}
                                    index={index}
                                    activeTab={activeTab}
                                    activateTab={()=> activateTab(index)}
                                />
                            )}

                        </div>
                      </div>
                </section>
                
            </main>
            <Footer />
        </div>
    );
};

export default Merchant;