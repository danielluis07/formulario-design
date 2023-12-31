"use client";

import { useState } from "react";

import Image from "next/image";
import mainmobile from "../public/images/illustration-sign-up-mobile.svg";
import maindesktop from "../public/images/illustration-sign-up-desktop.svg";
import check from "../public/images/icon-success.svg";

export default function Home() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClicked = () => {
    console.log(email);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setError(!emailRegex.test(email));
    setButtonClicked(true);
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="bg-mainwhite max-w-[1440px] p-10 desktop:rounded-3xl">
        <div
          className={`${
            buttonClicked && !error
              ? "hidden"
              : "flex flex-col desktop:flex-row desktop:items-center"
          }`}>
          <div className="w-full desktop:order-2">
            <Image
              className="w-full desktop:hidden"
              src={mainmobile}
              alt="image"
              priority
            />
            <Image
              className="w-full hidden desktop:flex"
              src={maindesktop}
              alt="image"
              priority
            />
          </div>
          <div className="w-full px-6 mt-10 desktop:order-1">
            <div>
              <h1 className="text-charcoalgrey text-4xl desktop:text-5xl">
                Stay Updated!
              </h1>
              <p className="text-charcoalgrey mt-6">
                Join 60,000+ product managers receiving monthly updates on:
              </p>
            </div>
            {/* icons */}
            <div className="flex flex-col gap-y-4 mt-10">
              <div className="flex flex-row items-center gap-x-4">
                <Image className="w-5 h-5" src={check} alt="image" priority />
                <p className="text-charcoalgrey">
                  Product discovery and building what matters
                </p>
              </div>
              <div className="flex flex-row items-center gap-x-4">
                <Image className="w-5 h-5" src={check} alt="image" priority />
                <p className="text-charcoalgrey">
                  Measuring to ensure updates are a success
                </p>
              </div>
              <div className="flex flex-row items-center gap-x-4">
                <Image className="w-5 h-5" src={check} alt="image" priority />
                <p className="text-charcoalgrey">And much more!</p>
              </div>
            </div>
            <div className="mt-12">
              <div className="flex flex-row justify-between">
                <h1 className="text-charcoalgrey">Email address</h1>
                {buttonClicked && error && (
                  <p className="text-red-500">Valid email required</p>
                )}
              </div>
              <input
                className={`text-maingrey w-full p-5 border border-r-maingrey rounded-lg outline-charcoalgrey mt-4 ${
                  buttonClicked && error && "border-red-500 bg-red-100"
                }`}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@company.com"
              />
              <button
                className="text-mainwhite py-5 w-full bg-charcoalgrey rounded-lg mt-8 hover:bg-gradient-to-r from-pink-500 via-tomato to-lightorange hover:shadow-xl hover:shadow-pink-200"
                onClick={handleButtonClicked}>
                Subscribe to monthly newsletter
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${
            buttonClicked && !error
              ? "flex flex-col w-full desktop:w-[380px]"
              : "hidden"
          }`}>
          <Image src={check} alt="image" priority />
          <h1 className="text-charcoalgrey text-5xl mt-8">
            Thanks for subscribing!
          </h1>
          <p className="text-charcoalgrey mt-6">
            A confirmation email has been sent to{" "}
            <span className="text-charcoalgrey font-bold">{email}</span>. Please
            open it and click the button inside to confirm your subscription.
          </p>
          <button
            onClick={handleReload}
            className="text-mainwhite py-4 w-full bg-charcoalgrey rounded-lg mt-8 hover:bg-gradient-to-r from-pink-500 via-tomato to-lightorange hover:shadow-xl hover:shadow-pink-200">
            Dismiss message
          </button>
        </div>
      </div>
    </div>
  );
}
