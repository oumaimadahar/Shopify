import React from 'react'
import { BsFacebook, BsInstagram, BsLink, BsLinkedin, BsTwitter } from "react-icons/bs";
const HeaderTop = () => {
    return (
        <div className="border-b border-gray-200 hidden sm:block">
            <div className="container py-4">
                <div className="flex justify-between items-center">
                    <div className='hidden lg:flex gap-1'>
                        <div className="header_top_icon_wrapper">
                            <BsFacebook />
                        </div>
                        <div className="header_top_icon_wrapper">
                            <BsTwitter />
                        </div>
                        <div className="header_top_icon_wrapper">
                            <BsInstagram />
                        </div>
                        <div className="header_top_icon_wrapper">
                            <BsLinkedin />
                        </div>
                        
                    </div>

                    <div className="text-black text-[12px]">
                        <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $55
                    </div>

                    <div className="flex gap-4">
                        <select className="text-black text-[12px] w-[70px] hover:text-[#e3ac28]" name="currency">
                            <option value="USD">$ USD</option>
                            <option value="EUR">€ EUR</option>
                            <option value="MAD"> د.م. MAD</option>
                        </select>

                        <select className="text-black text-[12px] w-[80px] hover:text-[#e3ac28]" id="language">
                            <option value="English">English</option>
                            <option value="French">French</option>
                            <option value="Arabe">Arabe</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop
