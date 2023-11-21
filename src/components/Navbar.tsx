'use client'

import { navLinks } from "@/constants";
import Link from 'next/link';
import React, { useState } from "react";
import { Button } from "./Button";
import Sidebar from "./Sidebar";

export default function Navbar() {

  return (
    <>
        <nav className="w-full flex flex-1 py-4 justify-evenly items-center">
            <div className="mr-16 ">
                <h1 className={`font-roboto font-bold xs:text-[50px] text-[36px] text-primary leading-[56.4px] xs:leading-[44px] w-full  flex justify-start`}>
                    Prime <span className="text-red-500">Max</span>
                </h1>
            </div>
            
            {/* full view */}

            <div className="sm:flex hidden justify-between items-center w-full">
                <ul className=" list-none sm:flex hidden justify-center items-center flex-1 mr-5">
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-roboto font-normal text-primary hover:text-dimAsh cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mr-26' : 'mr-10'
                            } md:mr-24`}
                        >
                            <a href={`#${nav.id}`}> {nav.title} </a>

                        </li>
                    ))}
                </ul>

                <Link href="#order"> 
                    <Button>Order now</Button>
                </Link>
            </div>
            {/* mobile first design */}

            <Sidebar />
        </nav>
    </>
  )
}
