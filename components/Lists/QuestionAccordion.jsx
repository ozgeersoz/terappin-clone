import React from "react";

const QuestionAccordion = (props) => {
  // props'lar arasında title ve description olacak

  const handleSelectedQuestion = (event) => {
    var targetItem = event.target;
    console.log(targetItem)
    var description = targetItem.nextElementSibling;

    if (targetItem.classList.contains("accordion-header")) {
      var icon = targetItem.childNodes[1].childNodes[0];
      console.log(description);
      targetItem.classList.toggle("active");
      description.classList.toggle("h-max");
      // description.classList.toggle("overflow-visible");

      if (targetItem.classList.contains("active")) {
        console.log(icon);
        targetItem.style.borderBottom = "none";
        description.style.marginTop = "1em";
        description.style.paddingBottom = "1em";
        description.style.borderBottom = "1px solid #e5e5e5";
        description.style.maxHeight = description.scrollHeight + "px";
        description.style.height = description.scrollHeight + "px";
        icon.style.transform = "rotate(360deg)";// başlangıç konumuna geri dönsün
        icon.style.transition = "transform 0.3s ease-in-out";// animasyonlu bir biçimde 0.3 saniye içinde transform özelligi oluşsun
      } else {
        targetItem.style.borderBottom = "1px solid #e5e5e5";
        description.style.borderBottom = "none";
        description.style.marginTop = 0;
        description.style.paddingBottom = 0;
        description.style.maxHeight = 0;
        description.style.height = description.scrollHeight + "px";
        icon.style.transform = "rotate(180deg)";
      }
    }
  };

  return (
    <>
      {props.datas.map((data) => (
        <>
          <div
            className="flex accordion-header pt-3 pb-3"
            onClick={(event) => handleSelectedQuestion(event)}
            style={{ borderBottom: "1px solid #e5e5e5", cursor: "pointer"}}
          >
            <div className="mt-4 inline">{data.title}</div>
            <div className="ml-auto accordion-icon-background mt-4">
              <div className="accordion-icon"></div>
            </div>
          </div>
          <div className="accordion-body max-h-0 h-0 overflow-hidden"
               style={{color:"#63666A"}}>
            {data.description}
          </div>
        </>
      ))}
    </>
  );
};

export default QuestionAccordion;
