import React from 'react';
import { appaLogoLight } from "../../lib/images";
import { appStoreLogo } from "../../lib/images";
import { playStoreLogo } from "../../lib/images";
import { LocationIcon } from "../../assets/icons/location";
import { EmailIcon } from "../../assets/icons/email";
import { PhoneIcon } from "../../assets/icons/phone";
import { TwitterIcon } from "../../assets/icons/twitter";
import { FacebookIcon } from "../../assets/icons/facebook";
import { InstagramIcon } from "../../assets/icons/instagram";
import cn from 'classnames';
import { ROUTES } from '../../lib/route-links';

type FooterProps = {
    type?: number,
};

const Footer: React.FC<FooterProps> = ({
    type
}) => {

    console.log(type);

    return (
        <div className="w-full bg-[#EF7822] relative">
            {/*<div className="w-[75%] h-full absolute bg-gradient-to-r from-[#44FF9A33] from-20% via-[#44B0FF33] via-20% via-[#8B44FF33] via-20% via-[#FF664433] via-20% to-[#EBFF7033] to-20% opacity-30 z-10"></div>*/}
            <div className={cn( 'w-full relative px-10 pb-5 bg-[#000000] bg-opacity-40', type === 1  ? 'pt-20' : 'pt-60 max-sm:pt-40')}>
                <div className="flex max-sm:flex-col w-full">
                    <div className="mb-0 max-sm:mb-20 w-1/6 max-sm:w-full">
                            <img
                                src={appaLogoLight}
                                alt=""
                                title="Appa Icon image"
                                className="mb-4 h-10"
                            />
                            <p className="text-[#ffffff] text-[13px] text-left">Logistics you can trust</p>
                    </div>
                    <div className="w-5/6 max-sm:w-full grid grid-cols-4 max-sm:grid-cols-2 gap-2 max-sm:gap-4">
                        <div>
                            <h6 className="text-[#ffffff] text-[16px] text-left max-sm:text-center mb-6 font-semibold">Company</h6>
                            <ul>
                                <li className="mb-4"><a href={ROUTES.ABOUT} className="text-[#ffffff] text-[14px] font-normal w-full text-left block max-sm:text-center">About Us</a></li>
                                <li className="mb-4"><a href={ROUTES.SERVICES} className="text-[#ffffff] text-[14px] font-normal w-full text-left block max-sm:text-center">Services</a></li>
                                <li className="mb-4"><a href={ROUTES.CONTACTUS} className="text-[#ffffff] text-[14px] font-normal w-full text-left block max-sm:text-center">Contact Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="text-[#ffffff] text-[16px] text-left max-sm:text-center mb-6 font-semibold">Legal</h6>
                            <ul>
                                <li className="mb-4"><a href={ROUTES.TERMS_CONDITIONS} className="text-[#ffffff] text-[14px] font-normal w-full text-left block max-sm:text-center">Terms of Use</a></li>
                                <li className="mb-4"><a href={ROUTES.PRIVACY_POLICY} className="text-[#ffffff] text-[14px] font-normal w-full text-left block max-sm:text-center">Privacy Policy</a></li>
                                <li className="mb-4"><a href={ROUTES.REFUND_POLICY} className="text-[#ffffff] text-[14px] font-normal w-full text-left block max-sm:text-center">Refund Policy</a></li>
                                <li className="mb-4"><a href={ROUTES.CANCELLATION_POLICY} className="text-[#ffffff] text-[14px] font-normal w-full text-left block max-sm:text-center">Cancellation Policy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="text-[#ffffff] text-[16px] text-left max-sm:text-center mb-6 font-semibold">Address/Location</h6>
                            <ul>
                                <li className="flex items-center mb-2">
                                    <LocationIcon className="w-5 mr-2"/>
                                    <span className="text-[#FFFFFF] text-[13px] text-left">8, Fadeyi Street, Off Awolowo Road, Ikeja, Lagos.</span>    
                                </li>
                                <li className="flex items-center mb-2">
                                    <EmailIcon className="w-4 mr-2"/>
                                    <span className="text-[#FFFFFF] text-[13px]">support@appastore.co</span>    
                                </li>
                                <li className="flex items-center mb-2">
                                    <PhoneIcon className="w-4 mr-2"/>
                                    <span className="text-[#FFFFFF] text-[13px]">+234 912 454 7698</span>    
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="text-[#ffffff] text-[16px] text-center font-semibold mb-6">Install App</h6>
                            <a href="#" className="mb-2 flex justify-center">
                                <img
                                    src={appStoreLogo}
                                    alt=""
                                    className="h-8"
                                />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.appastore.app" className="flex justify-center" target="_blank">
                                <img
                                    src={playStoreLogo}
                                    alt=""
                                    className="h-8"
                                />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="lg:w-5/6 xs:w-full py-6">
                    <hr className="w-full border-[#1E293B]" />
                    <div className="w-full flex items-center pt-6 pb-2">
                        <div className="w-1/2 flex justify-start">
                            <span className="text-[#A1A1AA] text-[12px]">© Copyright 2023, All Rights Reserved by AppaStore</span>
                        </div>
                        <div className="w-1/2 flex justify-end">
                            <a href="https://twitter.com/MyappaNg?t=Mhz-iMfoqOhXlIwf0FMEXw&s=09" target="_blank" className="flex justify-end mr-2">
                                <TwitterIcon className="w-8"/>
                            </a>
                            <a href="https://www.facebook.com/settings?tab=profile&section=username" target="_blank" className="flex justify-end mr-2">
                                <FacebookIcon className="w-8"/>
                            </a>
                            <a href="https://instagram.com/appastoreng?igshid=MzNlNGNkZWQ4Mg==" target="_blank" className="flex justify-end">
                                <InstagramIcon className="w-8"/>
                            </a>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );


};

export default Footer;