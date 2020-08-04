import React, { useState } from "react";
import Link from "next/link";
import NavButton from "../nav/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default () => {
  const [isOpened, setOpened] = useState(false);
  const handleClick = () => {
    setOpened(!isOpened);
  };

  return (
    <header>
      <div className="md:hidden">
        <div className="flex w-full p-5 bg-white ">
          <a className="text-yellow mt-1" onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </a>
          <img
            src="/images/wr_logo.svg"
            alt="Company logo"
            width="70px"
            className="ml-4"
          />
          <span className="ml-4 mt-1 text-sm uppercase">
            Engenharia e <br /> consultoria logística
          </span>
        </div>
        <div
          id="menu-sm"
          className={`${
            isOpened ? "show" : "hide"
          } flex flex-col bg-navy p-5 space-y-4 menu-sm`}
        >
          <NavButton to="/" onClick={() => setOpened(false)}>
            Home
          </NavButton>
          <NavButton to="/sobre" onClick={() => setOpened(false)}>
            Sobre
          </NavButton>
          <NavButton to="/solucoes" onClick={() => setOpened(false)}>
            Soluções
          </NavButton>
          <NavButton to="/contato" onClick={() => setOpened(false)}>
            Contato
          </NavButton>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="bg-yellow h-3"></div>
        <div className="flex flex-col hero-image items-center">
          <div id="logo">
            <Link href="/">
              <div className="flex flex-col">
                <img
                  src="/images/wr_logo.svg"
                  alt="Company logo"
                  width="160px"
                  className="mx-auto mt-10"
                />
                <span className="mx-auto mt-5 mb-5 uppercase text-gray text-center">
                  Engenharia e <br /> consultoria logistica
                </span>
              </div>
            </Link>
          </div>
          <div className="flex w-3/4 mx-auto justify-end mt-10 mb-20 space-x-8">
            <NavButton to="/sobre" onClick={() => setOpened(false)}>
              Sobre
            </NavButton>
            <NavButton to="/solucoes" onClick={() => setOpened(false)}>
              Soluções
            </NavButton>
            <NavButton to="/contato" onClick={() => setOpened(false)}>
              Contato
            </NavButton>
          </div>
          <div className="flex flex-col mx-auto w-3/4 mt-10 items-end">
            <span className="text-5xl text-right text-white">
              Soluções inteligentes <br />
              para sua empresa.
            </span>
            <span className="bg-yellow text-center text-navy text-3xl p-3 pl-6 pr-6 mt-5 rounded-md">
              Saiba mais
            </span>
          </div>
        </div>
        <div className="bg-gray h-3"></div>
      </div>
    </header>
  );
};
