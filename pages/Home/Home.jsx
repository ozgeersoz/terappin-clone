import React, { useEffect, useState } from "react";
import AbilityCard from "../../components/Cards/AbilityCard";
import BenefitCard from "../../components/Cards/BenefitCard";
import QuestionAccordion from "../../components/Lists/QuestionAccordion";
import fakeQuestions from "../../dummy-data/questions";
import ExpertsCarousel from "../../components/Carousels/ExpertsCarousel";

const Home = () => {
  const terapizoneLogos = "/terapizone-logos";
  const terapizoneImages = "/terapizone-images";
  var previousClickedBtn = null;

  const selectUsageBtn = (targetClass, targetId, iconBackgroundId) => {
    if ( targetClass === "usage-btn" &&
      (targetId === "match" || targetId === "calendar" || targetId === "video")
    ) {
      var iconBackground = document.getElementById(iconBackgroundId);
      console.log("Id" + iconBackgroundId);
      var icon = iconBackground.childNodes[0];
      console.log("Icon background:" + iconBackground);
      console.log(icon);

      var selectedUsageBtn = document.getElementById(targetId);

      // tıklanma durumunu active sınıfı kontrol eder
      selectedUsageBtn.classList.toggle("active"); // toggle ile active sınıfı eklenip çıkarılır, 1 kere tıklanırsa eklenir, 2. kere tıklanırsa çıkarılır
      if (selectedUsageBtn.classList.contains("active")) {
        selectedUsageBtn.style.backgroundColor = "#6D42EF14";
        iconBackground.style.background =
          "radial-gradient(72.07% 79.21% at 75.23% 94.06%,#bf68ff .01%,rgba(191,104,255,0) 100%),linear-gradient(180.63deg,#6d42ef -2.93%,#0096f8 94.52%)";
        icon.src = getSelectedIcon(targetId);
        console.log(icon.src);

        var image = document.getElementById("guide-theraphy-image");
        image.src = getSelectedImage(targetId);
      }
      if (previousClickedBtn != null) {
        previousClickedBtn.classList.remove("active");
        previousClickedBtn.style.backgroundColor = "transparent";

        var previousIconBackground = previousClickedBtn.childNodes[0];
        var previousIcon = previousIconBackground?.childNodes[0];

        previousIconBackground.style.background = "";
        previousIcon.src = getCurrentIcon(previousClickedBtn.id);
      }
      console.log(selectedUsageBtn);
      previousClickedBtn = selectedUsageBtn;
    }
  };

  const getSelectedIcon = (id) => {
    switch (id) {
      case "match":
        return `${terapizoneLogos}/terapizoneWhite.svg`;
      case "calendar":
        return `${terapizoneLogos}/calendarWhite.svg`;
      case "video":
        return `${terapizoneLogos}/videoWhite.svg`;
      default:
        return "";
    }
  };

  const getCurrentIcon = (id) => {
    switch (id) {
      case "match":
        return `${terapizoneLogos}/terapizone.svg`;
      case "calendar":
        return `${terapizoneLogos}/calendar.svg`;
      case "video":
        return `${terapizoneLogos}/video.svg`;
      default:
        return "";
    }
  };

  const getSelectedImage = (id) => {
    switch (id) {
      case "match":
        return `${terapizoneImages}/matches-img.png`;
      case "calendar":
        return `${terapizoneImages}/sessions-img.png`;
      case "video":
        return `${terapizoneImages}/contacts-img.png`;
      default:
        return "";
    }
  };

  useEffect(() => {
    selectUsageBtn("usage-btn", "calendar", "calendar-background");
  }, []);

  return (
    <>
      <section id="online-therapy">
        <div className="grid grid-cols-2">
          <div id="start-therapy-container" className="text-center p-5">
            <p id="therapy-text">
              Online terapi ile <br /> değişimi başlat!
            </p>
            <p id="advice-text" className="mt-4">
              Hemen sana en uygun online psikolog ile <br /> eşleş ve değişime
              başla
            </p>
            <button id="start-btn" className="items-center mt-3">
              Hemen Başla
            </button>
          </div>
          <div>
            <img
              src="https://psikologofisi.com/assets/img/slider.webp"
              className="w-100 img-fluid"
              width="650"
              height="700"
              alt=""
              style={{ marginTop: "-6rem" }}
            />
          </div>
        </div>
      </section>
      <section id="guide-therapy">
        <div className="grid grid-cols-2">
          <div id="howToContainer" className="text-center">
            <p
              style={{
                marginTop: "3em",
                marginLeft: "3em",
                marginBottom: "1.5em",
                color: "#6D42EF",
                fontSize: "2em",
                textAlign: "left",
              }}
            >
              Nasıl Kullanırım?
            </p>
            <div
              id="match"
              className="usage-btn"
              onClick={(event) =>
                selectUsageBtn(
                  event.target.className,
                  event.target.id,
                  event.target.childNodes[0]?.id
                )
              }
            >
              <div id="match-background" className="match-container">
                <img src={`${terapizoneLogos}/terapizone.svg`} alt="" />
              </div>
              <div className="match-container-info">
                <p
                  style={{
                    textAlign: "left",
                    marginLeft: "0.5em",
                    color: "#6D42EF",
                    fontSize: "1.6em",
                  }}
                >
                  Terapistinizle Eşleşin
                </p>
                <p
                  style={{
                    textAlign: "left",
                    marginLeft: "1em",
                    fontSize: "1em",
                    marginTop: "1.3em",
                    color: "#25165E",
                  }}
                >
                  Hangi konuda terapi almak istediğinizi belirleyin. Başvuru
                  <br /> nedeninize özel olarak yardım edebilecek
                  terapistlerimizin
                  <br /> içinden, kendiniz için en uygun olanını ile eşleşin.
                </p>
              </div>
            </div>
            <div
              id="calendar"
              className="usage-btn"
              onClick={(event) =>
                selectUsageBtn(
                  event.target.className,
                  event.target.id,
                  event.target.childNodes[0]?.id
                )
              }
            >
              <div id="calendar-background" className="match-container">
                <img src={`${terapizoneLogos}/calendar.svg`} alt="" />
              </div>
              <div className="match-container-info">
                <p
                  style={{
                    textAlign: "left",
                    color: "#6D42EF",
                    fontSize: "1.6em",
                  }}
                >
                  Seans Oluşturun
                </p>
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "1em",
                    marginTop: "1.3em",
                    color: "#25165E",
                    marginRight: "2em",
                  }}
                >
                  Terapi seansın için en uygun tarih ve saati, seanslar <br />
                  sekmesinden kolayca seçerek oluşturun. Seansınıza 24 <br />
                  saat kalana kadar iptal edebilirsiniz.
                </p>
              </div>
            </div>
            <div
              id="video"
              className="usage-btn"
              onClick={(event) =>
                selectUsageBtn(
                  event.target.className,
                  event.target.id,
                  event.target.childNodes[0]?.id
                )
              }
            >
              <div id="video-background" className="match-container">
                <img src={`${terapizoneLogos}/video.svg`} alt="" />
              </div>
              <div className="match-container-info">
                <p
                  style={{
                    textAlign: "left",
                    color: "#6D42EF",
                    fontSize: "1.6em",
                  }}
                >
                  Görüşmeye Başlayın
                </p>
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "1em",
                    marginTop: "1.3em",
                    color: "#25165E",
                    marginRight: "5em",
                  }}
                >
                  İstediğiniz yerden hemen terapistiniz ile sınırsız <br />
                  mesajlamaya ve online terapi başlayın.
                </p>
              </div>
            </div>
          </div>
          <div className="guide-therapy-image-container">
            <img
              id="guide-theraphy-image"
              src={`${terapizoneImages}/sessions-img.png`}
              alt=""
            />
          </div>
        </div>
      </section>
      <section id="abilities">
        <div className="text-xl text-center pt-5 font-bold text-white">
          BIZIM HAKKIMIZDA BIRAZ
        </div>
        <div
          className="text-8xl text-center pt-1 font-semibold text-white"
          style={{ fontSize: "3.5em" }}
        >
          yapmayı seviyoruz
        </div>
        <div className="text-base text-center text-white pt-3">
          Tarafından resimler{" "}
          <span style={{ borderBottom: "1px solid white" }}>Freepik</span>
        </div>
        <div className="grid grid-rows-2 mt-6 justify-center">
          <div className="grid grid-cols-4" style={{ width: "70rem" }}>
            <AbilityCard
              image="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/1a5ab7d4a85a55df9eaccc2b/111.jpg"
              title="ANALITIK"
            />
            <AbilityCard
              image="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/fb158ab0203d5b3badbd9378/252d200a-8959-423d-fbab-f15b7ec48c91.jpg"
              title="WEB TASARIM"
            />
            <AbilityCard
              image="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/f6c3cd4b4a395002a41c9c2e/1aa76ce4-c80e-79cc-6e66-90ad0b90f8b8.jpg"
              title="ANALITIK"
            />
            <AbilityCard
              image="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/71913628290d5ef18f66b750/eaefb184-118f-ca57-fc59-035cb2c2fd10.jpg"
              title="BAŞVURU"
            />
          </div>
          <div
            className="grid grid-cols-4"
            style={{ width: "70rem", marginTop: "1rem" }}
          >
            <AbilityCard
              image="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/74f83172c22f57878677993f/gf.jpg"
              title="ILETIŞIM"
            />
            <AbilityCard
              image="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/219731a142f05f4699714244/b9f0b03c-6ff9-c5c4-bf4d-ca9b38786de3.jpg"
              title="PAZARLAMA"
            />
            <AbilityCard
              image="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/eac68617485053ceb7714ff9/gfgf.png"
              title="STRATEJI"
            />
            <AbilityCard
              image="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/2f77ced364e5570f80ea37af/2ca4591d-bc67-1991-4bf0-5e124c3c6169.jpg"
              title="DESTEK"
            />
          </div>
        </div>
      </section>
      <section id="benefits">
        <div className="flex justify-center space-x-4">
          <BenefitCard
            image="data:image/png;base64,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"
            title="15 Gün İçinde İade İmkanı"
            description="15 Gün İçinde İade İmkanı"
          />
          <BenefitCard
            image="data:image/png;base64,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"
            title="Güvendesiniz, Endişelenmeyin"
            description="Terapizone kişisel bilgilerinizi ve video görüşmelerinizi kayıt altına almaz."
          />
          <BenefitCard
            image="data:image/png;base64,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"
            title="24 Saate Kadar Seans İptali"
            description="Planlarda değişiklik olduğunda, seansınıza 24 saat kalana kadar iptal edebilirsiniz."
          />
          <BenefitCard
            image="data:image/png;base64,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"
            title="7/24 Canlı Destek"
            description="Terapizone, ihtiyacınız olduğu her an size destek olmak için yanınızda!"
          />
        </div>
      </section>
      <section id="experts" style={{ paddingTop: "3em" }}>
        <p className="font-bold text-center mb-3 text-3xl">
          İhtiyacına En Uygun Uzmanı Seç
        </p>
        <ExpertsCarousel />
      </section>
      <section id="frequently-asked-questions">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 p-8">
            <div className="pt-5">
              <div
                className="text-2xl font-semibold"
                style={{ color: "#040345" }}
              >
                Sıkça sorulan <br /> sorular
              </div>
              <div className="mt-5" style={{ color: "#808080" }}>
                BulutKlinik Hakkında sık sorulan
                <br /> sorular
              </div>
              <button
                style={{
                  backgroundColor: "#1A9D99",
                  padding: "1.2em",
                  width: "8rem",
                }}
                className="mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl text-sm"
              >
                Tümünü Gör
              </button>
            </div>
            <div className="p-5">
              <QuestionAccordion datas={fakeQuestions} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
