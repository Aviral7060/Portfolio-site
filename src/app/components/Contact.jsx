"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="my-12 py-24 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10 relative">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities. Feel free to connect with me on LinkedIn or check out my projects on GitHub!
        </p>
        <div className="socials flex flex-row gap-4">
          <Link href="https://github.com/Aviral7060/" className="transform transition-transform hover:scale-110">
            <Image src={GithubIcon} alt="Github Icon" width={40} height={40} />
          </Link>
          <Link href="https://www.linkedin.com/in/1404-aviral-jain/" className="transform transition-transform hover:scale-110">
            <Image src={LinkedinIcon} alt="Linkedin Icon" width={40} height={40} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

