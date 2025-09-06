"use client";

import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const Share = ({ slug, isDesktop }: { slug: string; isDesktop: boolean }) => {
  const baseUrl =
    process.env.NEXT_PUBLIC_URL || "http://atph-test.netlify.app/";
  const fullUrl = `${baseUrl}blog/${slug}`;

  return (
    <div className={`${isDesktop ? "hidden lg:block" : "block lg:hidden"} `}>
      <div className="flex gap-4 items-center justify-center mb-6">
        <span className="text-work text-sm text-[#757575]">Comparte en:</span>
        <FacebookShareButton url={fullUrl}>
          <div className=" rounded-sm">
            <svg
              width={25}
              height={25}
              viewBox="0 0 256 256"
              fill="#757575"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M236 128a108 108 0 1 0-108.026 108H128l.026-.001A108.12 108.12 0 0 0 236 128m-96 83.129V156h20a12 12 0 0 0 0-24h-20v-20a12.014 12.014 0 0 1 12-12h16a12 12 0 0 0 0-24h-16a36.04 36.04 0 0 0-36 36v20H96a12 12 0 0 0 0 24h20v55.128a84 84 0 1 1 24 0" />
            </svg>
          </div>
        </FacebookShareButton>
        <TwitterShareButton url={fullUrl}>
          <div className=" rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width={25}
              height={25}
              fill="#757575"
            >
              <path d="M11 4c-3.854 0-7 3.146-7 7v28c0 3.854 3.146 7 7 7h28c3.854 0 7-3.146 7-7V11c0-3.854-3.146-7-7-7zm0 2h28c2.774 0 5 2.226 5 5v28c0 2.774-2.226 5-5 5H11c-2.774 0-5-2.226-5-5V11c0-2.774 2.226-5 5-5m2.086 7 9.223 13.104L13 37h2.5l7.938-9.293L29.977 37h7.937L27.79 22.613 36 13h-2.5l-6.84 8.01L21.023 13zm3.828 2h3.065l14.107 20H31.02z" />
            </svg>
          </div>
        </TwitterShareButton>
        <WhatsappShareButton url={fullUrl}>
          <div className=" rounded-sm">
            <svg
              width={25}
              height={25}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              fill="#757575"
            >
              <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1c-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5s.2-.3.4-.4c.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4S9.7 8.5 9.5 8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3Q7 8.5 7 9.7c.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2zm2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4" />
            </svg>
          </div>
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default Share;
