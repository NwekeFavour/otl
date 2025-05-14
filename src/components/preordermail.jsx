import React from 'react';
import { z } from 'zod';
import { Button } from "@/components/ui/button"

function PreOrderMail(props) {
    return (
        <div className='bg-[#F48F23] lg:px-0 md:px-3 px-4 flex items-center justify-center w-[100%] xl:h-[364x] md:h-[320px] h-[280px]'>
            <div className="sm:flex items-center gap-5 justify-around">
                <div>
                    <p className="m-0 xl:text-[35px] lg:text-[30px] md:text-[26px] sm:text-[22px] text-[20px] text-white font-bold">Subcribe to our Newsletter</p>
                    <p className="m-0 text-white ">Subscribe to our newsletter for news, early access and exclusive offers. Get 15% off your first order.</p>

                </div>
                <div className='flex md:mt-0 sm:mt-3 mt-3 gap-3 items-center'>
                    <div>
                        <input className='outline-none border-none placeholder:font-bold placeholder:text-blue-950 py-4 px-2 rounded-s-2xl bg-amber-100 opacity-25' type="email" placeholder='Enter Your Email' />
                    </div>
                    <div>
                        <Button className="bg-[#fff] font-bold py-7 px-2 rounded-e-2xl text-[#221910]">Subscribe</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PreOrderMail;