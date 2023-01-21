import React from "react";
import { RiMailSendFill } from "react-icons/ri";
import { SiFreelancer, SiWhatsapp } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { GrLinkedin, GrMail } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import "../assets/css/footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="bg-[#222222]">
      <div className="mainfooter">
        <div className="card">
          <div className="font-bold text-[30px] m-4 text-white">Harshaweb</div>
          <div className="text-[#9FA4AB] text-[14px] m-4 text-justify">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  className="gmap_iframe"
                  frameBorder={0}
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://maps.google.com/maps?width=230&height=230&hl=en&q=pearl best height 1 &t=&z=14&ie=UTF8&iwloc=B&output=embed"
                />
                <a href="https://pdflist.com/" alt="pdflist.com">
                  Pdflist.com
                </a>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    ".mapouter{position:relative;text-align:right;width:250px;height:250px;}.gmap_canvas {overflow:hidden;background:none!important;width:250px;height:250px;}.gmap_iframe {width:250px!important;height:250px!important;}",
                }}
              />
            </div>
          </div>
        </div>
        <div className="card ">
          <div className="font-semibold text-[23px] m-4 text-white">
            Important Links
          </div>
          <Link to="/app_dev_cal">
            <div className="text-[#9FA4AB] text-[15px]  m-4 text-justify border-b-2 border-[#4C4C4C] hover:border-[#F9BF3A] hover:text-white pb-2 cursor-pointer">
              Calculate App Price
            </div>
          </Link>
          <Link to="/website_price_cal">
            <div className="text-[#9FA4AB] text-[15px]  m-4 text-justify border-b-2 border-[#4C4C4C] hover:border-[#F9BF3A] hover:text-white  pb-2 cursor-pointer">
              Calculate Website Price
            </div>{" "}
          </Link>
          <Link to="/signup">
            <div className="text-[#9FA4AB] text-[15px]  m-4 text-justify border-b-2  border-[#4C4C4C]  hover:border-[#F9BF3A] hover:text-white  pb-2 cursor-pointer">
              Register youself
            </div>{" "}
          </Link>
        </div>
        <div className="card ">
          <div className="font-semibold text-[23px] m-4 text-white">
            Contact Us
          </div>
          <div className="m-4">
            <div className="text-[#9FA4AB] text-[16px]   text-justify">
              We are here to help you. Please contact us if you have any
              questions.
            </div>
            <div className="flex items-center">
              <div className="m-[2px]">
                <GrMail color="#F28422" size={15} />
              </div>
              <div className="m-[2px] ">info@harshaweb.com</div>
            </div>
            <div className="flex items-center">
              <div className="m-[2px]">
                <SiWhatsapp color="#54E676" size={15} />
              </div>
              <a href="https://api.whatsapp.com/send/?phone=9369390970&text&type=phone_number&app_absent=0">
                <div className="m-[2px]">+91 9369390970</div>
              </a>
            </div>
            <a href="https://api.whatsapp.com/send/?phone=9369390970&text&type=phone_number&app_absent=0">
              <button className="btn btn-sm rounded-none  hover:bg-[#F9BF3A] font-bold text-[12px] mt-4   text-[#222222] p-2 bg-[#F9BF3A]">
                CONTACT US
              </button>
            </a>
          </div>
        </div>
        <div className="card ">
          <div className="font-semibold text-[23px] m-4 text-white">
            Newsletter
          </div>
          <div className="m-4">
            <div>
              <div className="text-[#9FA4AB] text-[14px]  mt-4 mb-4 flex items-center justify-evenly   border border-white  text-justify">
                <input
                  type="text"
                  name=""
                  id=""
                  className="bg-[#222222] p-4 w-auto  text-[15px] outline-none"
                  placeholder="Enter Email here"
                />
                <div>
                  <RiMailSendFill size={25} />
                </div>
              </div>
              <div>
                Drop your email to get the latest news and updates from us.
              </div>
            </div>

            <button className="btn btn-sm rounded-none  hover:bg-[#F9BF3A] font-bold text-[12px] mt-8   text-[#222222] p-2 bg-[#F9BF3A]">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
      <div className="copyrightdiv ">
        <div className="copyrighttext text-[#848484]  ">
          2021 &copy; Copyright, Harshaweb. All rights reserved.
        </div>
        <div className="socialdiv  ">
          <a href="https://www.instagram.com/harshaweb8576/">
            <div className="px-2 cursor-pointer text-[#848484] text-center justify-center text-[13px] hover:text-[#EC1636]">
              <BsInstagram size={20} />
            </div>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100089705917825">
            <div className="px-2 cursor-pointer  text-[#848484] text-center justify-center text-[13px] hover:text-[#3C5A9A]">
              <FaFacebookSquare size={22} />
            </div>{" "}
          </a>
          <a href="https://www.linkedin.com/in/harsh-singh-7a89791a9/">
            <div className="px-2 cursor-pointer text-[#848484] text-center justify-center text-[13px] hover:text-[#1A6599]">
              <GrLinkedin size={20} />
            </div>
          </a>

          <a href="https://twitter.com/HarshWeb_">
            <div className="px-2 cursor-pointer text-[#848484] text-center justify-center text-[13px] hover:text-[#2EA1F2]">
              <FaTwitterSquare size={22} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
