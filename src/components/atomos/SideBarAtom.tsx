import React, { Dispatch, SetStateAction } from "react";

import { IconAtom } from "./IconAtom";

import logo from '../../assets/logo.png';

import {FaBloggerB} from 'react-icons/fa'
import {IoIosAirplane, IoIosCalculator} from 'react-icons/io'
import {MdPeople, MdOutlinePhoneCallback} from 'react-icons/md'
import { CloseButtonMolecule } from "../moleculas/CloseButtonMolecule";
import { Button } from "@material-tailwind/react";

import { navLinks, socialMedia } from "../../constants";
import { IconButtonMolecule } from "../moleculas/IconButtonMolecule";

type Props = {
    className: string,
    setShowMenu: Dispatch<SetStateAction<boolean>>
    showMenu: boolean;
}

export default function Sidebar({ className, setShowMenu, showMenu }: Props) {
    return (
        <div className={`${className}`}>
            <div className="flex flex-col h-screen p-3 bg-white shadow w-full bg-[#F20F0F]">
                <div className="space-y-3 flex flex-col">
                    <div className="flex items-center justify-between px-4">
                        <img
                            className="w-36"
                            src={logo}
                            alt="logo"
                        />
                        <CloseButtonMolecule
                            color="white"
                            onClick={() => {setShowMenu(!showMenu)}}
                            children
                        />
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center text-white p-2 space-x-3 rounded-md"
                                >
                                    <IconAtom
                                        icon={MdPeople}
                                        color='white'
                                        className=''
                                        size={32}
                                    />
                                    <span className="text-lg font-bold">Sobre Nós</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center text-white p-2 space-x-3 rounded-md"
                                >
                                    <IconAtom
                                        icon={IoIosAirplane}
                                        color='white'
                                        className=''
                                        size={32}
                                    />
                                    <span className="text-lg font-bold">Planos</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center text-white p-2 space-x-3 rounded-md"
                                >
                                    <IconAtom
                                        icon={IoIosCalculator}
                                        color='white'
                                        className=''
                                        size={32}
                                    />
                                    <span className="text-lg font-bold">Simule sua viagem</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center text-white p-2 space-x-3 rounded-md"
                                >
                                    <IconAtom
                                        icon={FaBloggerB}
                                        color='white'
                                        className=''
                                        size={32}
                                    />
                                    <span className="text-lg font-bold">Blog</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center text-white p-2 space-x-3 rounded-md"
                                >
                                    <IconAtom
                                        icon={MdOutlinePhoneCallback}
                                        color='white'
                                        className=''
                                        size={32}
                                    />
                                    <span className="text-lg font-bold">Fale Conosco</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <Button
                        className="shadow-none bg-[#F20F0F] border-2 border-white text-xl"
                    >Baixe o App</Button>
                    <div className="flex">
                        {
                            socialMedia.map((element, index) => (
                                <IconButtonMolecule
                                    key={index}
                                    href="www.tiktok.com"
                                    target="_blank"
                                    classNameIcon="m-2 sm:block"
                                    color="white"
                                    size={32}
                                    icon={element.icon}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}