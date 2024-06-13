import Image from "next/image";
import Link from "next/link";
import { Discord, Linked, Telegram } from "./common/Icons";
import { FooterLinks } from "./common/Helper";
import { useState } from "react";
import Swal from "sweetalert2";
const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
      setTimeout(() => {
        
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Form submitted successfully!",
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }, 1000);
  };
  return (
    <footer className="bg-white pt-12 sm:pt-16 md:pt-20">
      <div className="max-w-[1164px] px-3 mx-auto">
        <div className="flex flex-wrap lg:gap-0 gap-10 lg:justify-between">
          <div className="flex flex-col">
            <Link href="/Home">
              <Image className="sm:max-w-[220px] max-w-[180px]"
                height={20.72}
                width={220.2}
                src="/assets/images/png/footer/logo.png"
                alt="logo"
              />
            </Link>
            <p className="pt-4 font-Poppins font-normal text-sm sm:text-base text-grey lg:max-w-[448px]">
              Galileo Sky, founded by industry experts, is redefining the gaming
              landscape. With a blend of groundbreaking technology and immersive
              entertainment, we create world-class gaming experiences and
              thriving digital economies that captivate and inspire
            </p>
            <div className="flex items-center pt-6 gap-4">
              <Link
                className="hover:scale-125 duration-300"
                href="https://www.linkedin.com/"
              >
                <Linked />
              </Link>
              <Link
                className="hover:scale-125 duration-300"
                href="https://www.discord.com/"
              >
                <Discord />
              </Link>
              <Link
                className="hover:scale-125 duration-300"
                href="https://www.telegram.com/"
              >
                <Telegram />
              </Link>
              <Link
                className="hover:scale-125 duration-300"
                href="https://www.twitter.com/"
              >
                <Image
                  width={36}
                  height={36}
                  alt="twitter"
                  src="/assets/images/png/footer/twitter.png"
                />
              </Link>
            </div>
          </div>
          <div className="flex justify-between sm:flex-row flex-col lg:justify-start gap-6 lg:gap-[76px] w-full lg:w-auto">
            <div className="flex flex-col">
              <h6 className="text-black font-Poppins pb-4 font-normal">
                Quick Links
              </h6>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      className="font-Poppins relative before:absolute before:bg-red before:h-[1.5px] before:duration-300 before:bottom-[-2px] hover:before:w-full before:w-0  font-normal text-sm sm:text-base text-grey"
                      href={link.href}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col">
              <p className="text-black font-Poppins font-normal text-sm sm:text-base">
                Get Connected
              </p>
              <form onSubmit={handleSubmit}>
                <div className="flex bg-offGrey justify-between max-w-[400px] p-[7px] mt-4 border border-offGrey rounded-lg">
                  <input
                    className="text-black me-2 outline-0 ps-5 bg-offGrey"
                    type="email"
                    required
                    placeholder="Email Here"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    className="text-white py-[14px] w-[121px] h-[46px] sm:h-[52px] flex items-center hover:bg-black duration-300 justify-center px-8 font-Poppins text-sm sm:text-base rounded-lg font-normal bg-red"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
              <p className="font-Poppins text-sm sm:text-base font-normal max-w-[338px] mt-4 text-grey">
                Your email address is very safe with Galileo Sky. You will only
                receive our gaming updates
              </p>
            </div>
          </div>
        </div>
      </div>
      <span className="flex h-[1px] bg-lightGrey w-full mt-11"></span>
      <p className="py-6 font-Poppins text-grey font-normal text-center">
        2024 Copyrights Galileo Sky, All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
