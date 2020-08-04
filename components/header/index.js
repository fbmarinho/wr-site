import React, { useState } from "react";

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
          <a className="text-yellow" onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} size="3x" />
          </a>
          <img
            src="/images/wr_logo.svg"
            alt="Company logo"
            width="75px"
            className="ml-5"
          />
          <span className="ml-5 mt-1 text-sm uppercase">
            Engenharia e <br /> consultoria logística
          </span>
        </div>
        <div
          id="menu"
          className={`${
            isOpened ? "show" : "hide"
          } flex flex-col bg-navy p-5 space-y-4 menu`}
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
        <div className="bg-yellow h-5"></div>
        <div></div>
        <div className="bg-navy h-40">
          <div id="logo" className="flex flex-col bg-white">
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
          <div></div>
          <div></div>
        </div>
        <div className="bg-gray h-5"></div>
      </div>
    </header>
  );
};
