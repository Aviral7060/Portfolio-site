"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const codingProfiles = [
  {
    name: "LeetCode",
    logo: "/leet.png",
    url: "https://leetcode.com/u/Aviral70/",
  },
  {
    name: "GeeksforGeeks",
    logo: "/gfg.png",
    url: "https://www.geeksforgeeks.org/user/21ucss59u/",
  },
 
];

const CodingProfilesSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <h2 className="text-center text-4xl font-bold text-white mb-8">Coding Profiles</h2>
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {codingProfiles.map((profile, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <Link href={profile.url} target="_blank" rel="noopener noreferrer" className="group">
                <Image
                  src={profile.logo}
                  alt={`${profile.name} logo`}
                  width={64}
                  height={64}
                  className="mb-2 transition-transform group-hover:scale-110"
                />
                <p className="text-white text-lg font-semibold text-center group-hover:text-primary-500 transition-colors">
                  {profile.name}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CodingProfilesSection;
