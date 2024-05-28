import { useEffect, useRef, useState } from 'react';
import Footer from '../layouts/generic/footer';
import Header from '../layouts/generic/header';
import { AffiliateHeaderImage } from '../lib/images';
import { AffiliateMiddleImage } from '../lib/images';
import { rocketIcon } from '../lib/images';
import { ArrowRightIcon } from '../assets/icons/arrow-right';
import Panel from '../components/accordion/panel';
import { usersGroupIcon } from '../lib/images';
import { moneyBagIcon } from '../lib/images';

    const panels = [
        {
            label: 'How does the Affiliate Program work?',
            content: 'You just have to share our services and apps to purchasing customers and earn according to the number of customers that use Appastore',
        },
        {
            label: 'How do I qualify for this program?',
            content: 'Anybody is qualified to be an affiliate. All you have to do is regsiter on our platform as an affiliate',
        },	
        {
            label: 'How do I earn in this program?',
            content: `You earn by bringing in a rider, business or user and they register using your given referral code. You in turn earn a small commissions from each of their deliveries`,
        },
        {
            label: 'How do I sign up to the program?',
            content: 'Simple fill in the required registration form and you are part of the program',
        },
    ];

const Affiliate = () => {

    const iframeRef = useRef<HTMLIFrameElement | null>(null);
    const [activeTab, setActiveTab] = useState<number | undefined>(0);

      useEffect(()=> {
        
        var ifr = document.getElementById("JotFormIFrame-231696806971065") as HTMLIFrameElement;
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
          var iframe: any = null;
          var args = e.data.split(":");
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
              if      (window.document.exitFullscreen)        window.document.exitFullscreen();
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
               <Header link='https://appa-affiliates-one.vercel.app/' buttonText='Become An Affiliate'/>
               <section className='relative w-full flex max-sm:flex-col min-h-[800px] max-sm:bg-[#F9EFE6] bg-[#FFFBF8] max-sm:bg-cover bg-contain bg-no-repeat bg-[top_center] before:bg-cover before:z-10 before:left-0 before:bg-bottom-curve-light-shade before:bg-[center_bottom] before:w-full before:absolute max-sm:before:bottom-[-150px] max-sm:before:h-[150px] before:bottom-[-50px] before:h-[300px] before:bg-no-repeat' style={{ backgroundImage: `url(${AffiliateHeaderImage})` }}>
                    <div className='relative w-1/2 pt-20 px-10 pr-40 max-sm:pr-0 max-sm:w-full max-sm:order-1'> 
                        <div className='flex flex-col'>
                            <h1 className='text-[#FFFFFF] font-bold text-left text-[30px] mb-2'>Get paid by sharing Appastore as an affiliate partner.</h1>
                            <p className='text-[#FFFFFF] text-left text-[13px] mb-5'>Introduce people you know to Appastore and earn recurring commissions</p>
                        </div>   
                        {/*<div className='absolute w-full bottom-[150px]  z-50 max-sm:hidden'>
                          <img 
                            src={AffiliateMiddleImage}
                            alt=""
                            className='w-[90%]'
                          />
                        </div> 
    */}
                    </div>
                    {/*
                    <div className='w-1/2 max-sm:w-full max-sm:order-2 px-10 z-20 mt-[150px] max-sm:mt-[30px]'>
                      <iframe
                        id="JotFormIFrame-231696806971065"
                        title="Affiliate Form"
                        allowTransparency
                        allowFullScreen
                        allow="geolocation; microphone; camera"
                        src="https://form.jotform.com/231696806971065"
                        frameBorder="0"
                        style= {{ minWidth:"100%", maxWidth:"100%", height:"539px", border:"none" }}
                        scrolling="no"
                      >
                      </iframe>
                    </div>
    */}
                </section> 
                <section className='relative min-h-[450px] max-sm:min-h-[650px] bg-[#FFFBF8] pt-40 pb-20 px-20 max-sm:px-10 max-sm:pt-60 after:bg-bottom-curve-light after:bg-[left_bottom] after:w-full after:bg-cover after:absolute max-sm:after:bottom-[-150px] max-sm:after:h-[150px] after:left-0 after:bottom-[-200px] after:h-[200px] after:bg-no-repeat'>
                    <h4 className='text-[35px] font-semibold text-[#000000]'>How to partner with us</h4>
                    <p className='text-[#000000] text-[14px]'>Recommend Products. Earn Commissions with Appastore</p>
                    <div className='w-full py-20 grid grid-cols-3 gap-10'>
                        <div className='flex flex-col items-center max-sm:col-span-3 bg-[#FFFFFF] py-5 h-[200px] px-5 drop-shadow-lg'>
                            <img
                                src={rocketIcon}
                                alt=""
                            />
                            <p className='text-[#2F3934] text-[14px] font-semibold my-3'>Sign up</p>
                            <span className='block text-[#2F3934] text-[13px]'>A simple process of registering for the role, it won’t take up to 15 minutes to start</span>
                        </div>

                        <div className='flex flex-col items-center max-sm:col-span-3 bg-[#FFFFFF] py-5 h-[200px] px-5 drop-shadow-lg'>
                            <img
                                src={usersGroupIcon}
                                alt=""
                            />
                            <p className='text-[#2F3934] text-[14px] font-semibold my-3'>Recommend</p>
                            <span className='block text-[#2F3934] text-[13px]'>Share our app and services to as many as possible</span>
                        </div>

                        <div className='flex flex-col items-center max-sm:col-span-3 bg-[#FFFFFF] py-5 h-[200px] px-5 drop-shadow-lg'>
                            <img
                                src={moneyBagIcon}
                                alt=""
                            />
                            <p className='text-[#2F3934] text-[14px] font-semibold my-3'>Earn</p>
                            <span className='block text-[#2F3934] text-[13px]'>Our competitive conversion rates help maximize earnings.</span>
                        </div>
                    </div>
                    <a href="https://appa-affiliates-one.vercel.app/" className='block mx-auto w-[150px] rounded-md bg-[#EF7822] py-4 px-6 text-[#FFFFFF] text-sm font-semibold'>Get Started</a>
                </section>
                <section className='relative w-full flex max-sm:flex-col min-h-[500px] pt-40 pb-20 px-20 max-sm:pb-10 max-sm:px-10 after:w-full after:bg-[#FFFFFF] after:absolute max-sm:after:bottom-[-150px] max-sm:after:h-[150px] after:left-0 after:bottom-[-150px] after:h-[150px] z-50'>
                    <div className='w-1/2 md:pr-20 max-sm:w-full max-sm:order-1'>
                        <h4 className='text-[35px] font-semibold text-[#000000] md:text-left'>Got any questions? <br />We got you</h4>
                        <p className='text-[16px] text-[#000000] md:text-left mt-5 '>We have a curated list of most popular questions here. If none of your questions are here. Shoot us a quick email, we’ll be happy to help!</p>
                        <a href="mailto: support@appastore.co" target="_blank" className='flex w-[120px] items-center space-x-2 py-1 mt-3 max-sm:mt-5 px-2 text-[#000000] text-sm font-semibold'><span>Send Email </span><ArrowRightIcon className='w-3'/></a>
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

export default Affiliate;