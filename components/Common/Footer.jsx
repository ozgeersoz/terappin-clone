import React from "react";
import TerappinLogo from "./TerappinLogo";

const Footer = () => {
  return (
    <>
      <footer id="main-footer">
        <div className="container mx-auto grid grid-rows-2" style={{height:"35rem"}}>
          <div className="flex space-x-20">
            <div className="flex space-x-20" style={{ paddingTop: "3em" }}>
              <ul>
                <li className="font-semibold text-black mb-5 text-white text-xl">
                  <a href="#">Terappin</a>
                </li>
                <li className="text-white text-base mb-2">
                  <a href="#">Nasıl Çalışır?</a>
                </li>
                <li className="text-white text-base mb-2">
                  <a href="#">Hakkımızda</a>
                </li>
                <li className="text-white text-base mb-2">
                  <a href="#">Psikologlarımız</a>
                </li>
                <li className="text-white text-base mb-2">
                  <a href="#">Kurumsal</a>
                </li>
                <li className="text-white text-base mb-2">
                  <a href="#">S.S.S.</a>
                </li>
                <li className="text-white text-base mb-2">
                  <a href="#">Testler</a>
                </li>
                <li className="text-white text-base mb-2">
                  <a href="#">Blog</a>
                </li>
                <li className="text-white text-base mb-2">
                  <a href="#">Terapist Başvurusu</a>
                </li>
              </ul>
              <ul>
                <li className="font-semibold text-black mb-5 text-white text-xl">
                  <a href="#">Testler</a>
                </li>
                <li className="text-white text-base mb-2">
                  <a href="#">Schutte Duygusal Zeka Ölçceği</a>
                </li>
                <li className="text-white text-base mb-2">
                  <a href="#">Beck Depresyon Testi</a>
                </li>
                <li className="text-white text-base mb-2">
                  <a href="#">Empati Ölçeği</a>
                </li>
                <li className="text-white text-base mb-2">
                  <a href="#">Beyaz Ayı Supresyon Envanteri</a>
                </li>
                <li className="text-white text-base mb-2">
                  <a href="#">Warwick - Edinburgh Mental İyi Oluş Ölçeği</a>
                </li>
                <li className="text-white text-base mb-2">
                  <a href="#">Yeme Tutumu Testi</a>
                </li>
                <li className="text-white text-base mb-2">
                  <a href="#">Liebowitz Sosyal Fobi Belirtileri Ölçeği</a>
                </li>
                <li className="text-white text-base mb-2">
                  <a href="#">Beck Anksiyete Ölçeği</a>
                </li>
              </ul>
              <ul>
                <li className="font-semibold text-black mb-5 text-white text-xl">
                  <a href="#">Yasal</a>
                </li>
                <li className="text-white text-base mb-2">
                  <a href="#">Kullanıcı Sözleşmesi</a>
                </li>
                <li className="text-white text-base mb-2">
                  <a href="#">Çerez ve Gizlilik Politikaları</a>
                </li>
                <li className="text-white text-base mb-2">
                  <a href="#">KVKK Aydınlatma Metni</a>
                </li>
              </ul>
              <ul>
                <li className="font-semibold text-black mb-5 text-white text-xl">
                  <a href="#">Uygulamayı İndir</a>
                </li>
                <li className="text-white text-base mb-2">
                  <a href="#">
                    <img src="https://terappin.com/images/market-icons/app_store_download.webp"></img>
                  </a>
                </li>
                <li className="text-white text-base mb-2">
                  <a href="#">
                    <img src="https://terappin.com/images/market-icons/google_play_download.webp"></img>
                  </a>
                </li>
                <li className="text-white text-base mb-2">
                  <a href="#">
                    <img src="https://terappin.com/images/market-icons/huawei_app_gallery_download.webp"></img>
                  </a>
                </li>
              </ul>
            </div>
            <ul style={{ paddingTop: "4em" }}>
              <li className="mb-6">
                <TerappinLogo fillColor="#FFFFFF" width="162" height="47" />
              </li>
              <li className="mb-6">
                <ul className="flex space-x-2">
                  <li>
                    <a href="#">
                      <img src="https://terappin.com/new-site/images/icons/social/instagram.svg"></img>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="https://terappin.com/new-site/images/icons/social/twitter.svg"></img>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="https://terappin.com/new-site/images/icons/social/facebook.svg"></img>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="https://terappin.com/new-site/images/icons/social/linkedin.svg"></img>
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://terappin.com/new-site/images/icons/social/youtube.svg"></img>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="mb-2">
                <img src="https://terappin.com/new-site/images/etbis.webp"></img>
              </li>
              <li className="mb-5 text-white text-xs">
                Copyright © 2023
                <br /><br />
                Terappin Teknoloji A.Ş. Tüm hakları saklıdır.
              </li>
            </ul>
          </div>
          <div className="flex items-center" style={{height:"12rem", marginTop:"5rem"}}>
            <img src="https://terappin.com/new-site/images/ssl.png"
              style={{width:"10rem", height:"3rem"}}></img>
            <img src="https://terappin.com/new-site/images/bitmap.png" className="ml-auto"></img>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
