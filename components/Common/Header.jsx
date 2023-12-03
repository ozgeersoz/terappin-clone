import React from "react";
import TerappinLogo from "./TerappinLogo";
import "../../icons/world-icon.png";
import LanguageDropdown from "../Dropdowns/LanguageDropdown";

const Header = () => {
  return (
    <>
      <header className="header-main">
        <nav
          className="p-8 flex items-center"
          style={{ backgroundColor: "#ABAAF3" }}
        >
            <TerappinLogo fillColor="#322460" width="110" height="47"/>
            <ul id="info-container" className="flex items-center mt-4">
              <a href="#" className="mx-2 info-text">NASIL ÇALIŞIR</a>
              <a href="#" className="mx-2 info-text">HAKKIMIZDA</a>
              <a href="#" className="mx-2 info-text">PSİKOLOGLARIMIZ</a>
              <a href="#" className="mx-2 info-text">S.S.S</a>
              <a href="#" className="mx-2 info-text">TESTLER</a>
            </ul>

            <ul id="meta-container" className="flex items-center mt-4 ml-auto">
              <li className="mx-5">
                {/* <button id="language-btn">TR</button> */}
                <LanguageDropdown />
              </li>
              <li className="mx-5">
                <a id="login-link">Giriş Yap</a>
              </li>
              <li className="mx-5">
                <button id="register-btn">HEMEN KAYDOL</button>
              </li>
            </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
