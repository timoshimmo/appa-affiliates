import { Fragment } from 'react';
import { appaLogo } from "../../lib/images";
import { productsFood } from "../../lib/images";
import { productsStore } from "../../lib/images";
import { productsParcel } from "../../lib/images";
import { Menu, Transition } from '@headlessui/react';
import { ArrowDownIcon } from '../../assets/icons/arrow-down';
import cn from 'classnames';

interface headerProps {
    link: string;
    buttonText: string;
}

const Header = ({link, buttonText}: headerProps) => {

    return (
        <div className='w-full'>
            <div className="max-sm:hidden w-full flex px-8 py-5 justify-between items-center">
                <a href="/">
                    <img
                        src={appaLogo}
                        alt=""
                        title=""
                    />
                </a>
                <div className='space-x-4'>
                    <Menu
                        as="div"
                        className="relative inline-block ltr:text-left rtl:text-right"
                    >
                        <Menu.Button className="flex items-center focus:outline-none">
                        {({ open }) => (
                            <>
                                <span className="mr-2 text-sm text-[#6E6E6E] font-semibold">Our Products</span>
                                <ArrowDownIcon
                                className={cn('h-2 w-2', {
                                    'transform rotate-180': open,
                                })}
                                />
                            </>
                            )}
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >

                            <Menu.Items
                            as="div"
                            className={cn(
                                'absolute mt-1 w-[900px] rounded bg-white pt-10 px-5 shadow focus:outline-none right-0 origin-top-right z-50'
                            )}
                            >
                                <Menu.Item>

                                    {({ active }) => (
                                        <div className='flex'>
                                            <div className='w-full grid md:grid-cols-4 sm:grid-cols-1 xs:grid-cols-1 gap-2'>
                                                <div className='overflow-y-hidden'>
                                                    <h6 className='text-[17px] font-bold text-[#000000] mb-7'>Products</h6>
                                                    <div className='flex h-full border-r border-[#000000] pr-2 '>
                                                        <p className='text-[#2F3934] text-[14px] text-left'>
                                                            Appastore provides reliable delivery services for all kinds of goods
                                                        </p>
                                                    </div>
                                                    
                                                </div>
                                                <div className='px-4 pb-20'>
                                                    <div className='w-full flex justify-center'>
                                                        <img
                                                            src={productsFood}
                                                            alt=""
                                                            className=''
                                                        />
                                                    </div>
                                                    <span className='text-[#EF7822] text-[11px] font-semibold'>Appa Food</span>
                                                    <p className='text-[#000000] text-sm font-bold mt-2'>Appa Food Delivery</p>
                                                    <p className='text-[#2F3934] text-xs mt-4 text-left leading-5'>With our easy-to-use app or website, you can order your favorite dishes from your favorite restaurants and have them delivered straight to your doorstep.</p>
                                                </div>
                                                <div className='px-4 pb-20'>
                                                    <div className='w-full flex justify-center'>
                                                        <img
                                                            src={productsStore}
                                                            alt=""
                                                            className=''
                                                        />
                                                    </div>
                                                    <span className='text-[#EF7822] text-[11px] font-semibold'>Appa Store</span>
                                                    <p className='text-[#000000] text-sm font-bold mt-2'>Appa Store/Grocery Delivery</p>
                                                    <p className='text-[#2F3934] text-xs mt-4 text-left leading-5'>With just a phone call or online order, you can have all of your favorite items from the store delivered straight to your doorstep.</p>
                                                </div>
                                                <div className='px-4 pb-20'>
                                                    <div className='w-full flex justify-center'>
                                                        <img
                                                            src={productsParcel}
                                                            alt=""
                                                            className=''
                                                        />
                                                    </div>
                                                    <span className='text-[#EF7822] text-[11px] font-semibold'>Appa Parcel</span>
                                                    <p className='text-[#000000] text-sm font-bold mt-2'>Appa Parcel Delivery</p>
                                                    <p className='text-[#2F3934] text-xs mt-4 text-left leading-5'>Do you need to send a parcel but don't have the time or means to do it yourself? Our parcel delivery business has got you covered! With our fast and affordable service, you can send and receive parcels from anywhere.</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Menu.Item>

                            </Menu.Items>
                        </Transition>

                    </Menu>
                    <a href={link} className='rounded-md bg-[#EF7822] py-2 px-6 text-[#FFFFFF] text-sm font-semibold'>{buttonText}</a>
                </div>
            </div>
            <div className="md:hidden w-full flex px-4 py-5 justify-between items-center">
                <Menu
                    as="div"
                    className="relative inline-block ltr:text-left rtl:text-right"
                >
                    <Menu.Button className="flex items-center focus:outline-none">
                    {({ open }) => (
                        <>
                            <span className="text-xs text-[#6E6E6E] font-semibold mr-1">Our Products</span>
                            <ArrowDownIcon
                            className={cn('h-1 w-1', {
                                'transform rotate-180': open,
                            })}
                            />
                        </>
                        )}
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >

                        <Menu.Items
                        as="div"
                        className={cn(
                            'absolute mt-1 w-[200px] h-[250px] overflow-y-scroll rounded bg-white pt-5 px-5 shadow focus:outline-none left-0 origin-top-left z-10'
                        )}
                        >
                            <Menu.Item>

                                {({ active }) => (
                                    <div className='flex'>
                                        <div className='w-full grid grid-cols-1 gap-2'>
                                            <div className='pb-10'>
                                                <h6 className='text-[17px] font-bold text-[#000000] mb-7'>Products</h6>
                                                <div className='flex justify-center'>
                                                    <p className='text-[#2F3934] text-[14px]'>
                                                        Appastore provides reliable delivery services for all kinds of goods
                                                    </p>
                                                </div>
                                                
                                            </div>
                                            <div className='px-4 pb-10'>
                                                <div className='w-full flex justify-center'>
                                                    <img
                                                        src={productsFood}
                                                        alt=""
                                                        className=''
                                                    />
                                                </div>
                                                <span className='text-[#EF7822] text-[11px] font-semibold'>Appa Food</span>
                                                <p className='text-[#000000] text-sm font-bold mt-2'>Appa Food Delivery</p>
                                                <p className='text-[#2F3934] text-xs mt-4 text-left leading-5'>With our easy-to-use app or website, you can order your favorite dishes from your favorite restaurants and have them delivered straight to your doorstep.</p>
                                            </div>
                                            <div className='px-4 pb-10'>
                                                <div className='w-full flex justify-center'>
                                                    <img
                                                        src={productsStore}
                                                        alt=""
                                                        className=''
                                                    />
                                                </div>
                                                <span className='text-[#EF7822] text-[11px] font-semibold'>Appa Store</span>
                                                <p className='text-[#000000] text-sm font-bold mt-2'>Appa Store/Grocery Delivery</p>
                                                <p className='text-[#2F3934] text-xs mt-4 text-left leading-5'>With just a phone call or online order, you can have all of your favorite items from the store delivered straight to your doorstep.</p>
                                            </div>
                                            <div className='px-4 pb-10'>
                                                <div className='w-full flex justify-center'>
                                                    <img
                                                        src={productsParcel}
                                                        alt=""
                                                        className=''
                                                    />
                                                </div>
                                                <span className='text-[#EF7822] text-[11px] font-semibold'>Appa Parcel</span>
                                                <p className='text-[#000000] text-sm font-bold mt-2'>Appa Parcel Delivery</p>
                                                <p className='text-[#2F3934] text-xs mt-4 text-left leading-5'>Do you need to send a parcel but don't have the time or means to do it yourself? Our parcel delivery business has got you covered! With our fast and affordable service, you can send and receive parcels from anywhere.</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Menu.Item>

                        </Menu.Items>
                    </Transition>

                </Menu>
                <a href="/">
                    <img
                        src={appaLogo}
                        alt=""
                        title=""
                        className='w-25'
                    />
                </a>
                <a href={link} className='rounded-md bg-[#EF7822] py-2 px-4 text-[#FFFFFF] text-xs font-semibold'>{buttonText}</a>
            </div>
        </div>

    );
};

export default Header;