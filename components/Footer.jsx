import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Discord, Linked, Telegram, Twitter } from "./common/Icons";
import { FooterLinks } from "./common/Helper";

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-11">
      <div className="max-w-[1164px] px-3 mx-auto">
        <div className="flex flex-wrap">
          <div className="flex flex-col">
            <Link href="/Home">
              <Image
                height={20.72}
                width={220.2}
                src="/assets/images/png/footer/logo.png"
                alt="logo"
              />
            </Link>
            <p className="pt-4 font-Poppins font-normal text-base text-grey max-w-[448px]">
              Galileo Sky, founded by industry experts, is redefining the gaming
              landscape. With a blend of groundbreaking technology and immersive
              entertainment, we create world-class gaming experiences and
              thriving digital economies that captivate and inspire
            </p>
            <div className="flex items-center pt-6 gap-4">
              <a href="https://www.linkedin.com" className="hover:scale-125">
                <Linked />
              </a>
              <a href="https://www.discord.com" className="hover:scale-125">
                <Discord />
              </a>
              <a href="https://www.telegram.com" className="hover:scale-125">
                <Telegram />
              </a>
              <a href="https://www.twitter.com" className="hover:scale-125">
                <Twitter />
              </a>
            </div>
          </div>
          <div className="flex">
            <div className="flex-col">
              <h6 className="text-black font-poppins pb-4 font-normal">
                Quick Links
              </h6>
              <ul className="gap-3">
                {FooterLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="font-poppins font-normal text-base text-grey"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
