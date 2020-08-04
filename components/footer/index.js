import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhoneAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

export default () => (
  <footer className="flex flex-wrap bg-yellow p-10">
    <div className="w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 flex flex-col">
      <div className="flex mb-5 justify-center">
        <img
          src="/images/wr_logo_brown.svg"
          alt="Company logo"
          width="92px"
          className="mr-5"
        />
        <span className="text-sm md:text-lg uppercase text-brown">
          Engenharia e <br />
          consultoria Logística
        </span>
      </div>
      <span className="text-lg text-navy text-center">
        Soluções inteligentes para seu empreendimento.
      </span>
    </div>
    <div className="w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 flex flex-wrap p-5">
      <div className="w-full md:w-1/2 flex justify-center">Consultoria</div>
      <div className="w-full md:w-1/2 flex justify-center">Treinamento</div>
      <div className="w-full md:w-1/2 flex justify-center">Sistemas</div>
      <div className="w-full md:w-1/2 flex justify-center">Auditoria</div>
      <div className="w-full md:w-1/2 flex justify-center">Regulamentação</div>
      <div className="w-full md:w-1/2 flex justify-center">LOCS</div>
    </div>
    <div className="w-full sm:w-full  md:w-full lg:w-1/3 xl:w-1/3">
      <div className="flex justify-between w-1/2 mx-auto mb-5 text-brown">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </div>
      <div className="mx-auto ml-0 md:ml-5">
        <div className="w-full">
          <FontAwesomeIcon icon={faEnvelope} color="white" />
          <span className="ml-4 text-sm">contato@wrconsultoria.com.br</span>
        </div>

        <div className="w-full">
          <FontAwesomeIcon icon={faPhoneAlt} color="white" />
          <span className="ml-4 text-sm">(32) 3061-1891 | (32) 98835-4878</span>
        </div>

        <div className="w-full">
          <FontAwesomeIcon icon={faMapMarkerAlt} color="white" />
          <span className="ml-4 text-sm">
            Rua Paulo Garcia, 396 - Benfica Juiz de fora - 36090-340
          </span>
        </div>
      </div>
    </div>
  </footer>
);
