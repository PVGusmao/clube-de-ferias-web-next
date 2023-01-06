import React, { Dispatch, SetStateAction } from "react";

import { IconAtom } from "./IconAtom";

import { MenuHamburguerMolecule } from "../moleculas/MenuHamburguerMolecule";

import {FaBloggerB} from 'react-icons/fa'
import {IoIosAirplane, IoIosCalculator} from 'react-icons/io'
import {MdPeople, MdOutlinePhoneCallback, MdFileDownload} from 'react-icons/md'

type Props = {
    className: string,
    setShowMenu: Dispatch<SetStateAction<boolean>>
    showMenu: boolean;
}

export default function Sidebar({ className, setShowMenu, showMenu }: Props) {
    return (
        <div className={`${className}`}>
            <div className="flex flex-col h-screen p-3 bg-white shadow w-full">
                <div className="space-y-3">
                    <div className="flex items-center justify-between px-10">
                        <h2 className="text-xl font-bold">Menu</h2>
                        <MenuHamburguerMolecule
                            onClick={() => {setShowMenu(!showMenu)}}
                            children
                        />
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <IconAtom
                                        icon={MdPeople}
                                        className=''
                                        size={24}
                                    />
                                    <span>Sobre Nós</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <IconAtom
                                        icon={IoIosAirplane}
                                        className=''
                                        size={24}
                                    />
                                    <span>Planos</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <IconAtom
                                        icon={IoIosCalculator}
                                        className=''
                                        size={24}
                                    />
                                    <span>Simule sua viagem</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <IconAtom
                                        icon={FaBloggerB}
                                        className=''
                                        size={24}
                                    />
                                    <span>Blog</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <IconAtom
                                        icon={MdOutlinePhoneCallback}
                                        className=''
                                        size={24}
                                    />
                                    <span>Fale Conosco</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <IconAtom
                                        icon={MdFileDownload}
                                        className=''
                                        size={24}
                                    />
                                    <span>Baixe o App</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}