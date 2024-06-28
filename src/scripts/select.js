"use strict";
const selectorContainers = document.querySelectorAll(".select");
const popUpsPD = document.querySelectorAll(".popUpPD");
const popUpsD = document.querySelectorAll(".popUpD");
const popUpsCPH = document.querySelectorAll(".popUpCPH");
const popUpsCPM = document.querySelectorAll(".popUpCPM");
const selectors = document.querySelectorAll(".select__select");

function popUpsHandler (popups, innerHTML) {
  popups.forEach((p) =>
    p.addEventListener("click", () => {
      if (!p.innerHTML.includes("div")){
        const arrow = p.querySelector("svg");
        const div = document.createElement("div");
        div.innerHTML = p.innerHTML;
        div.className = p.className;
        div.style.textAlign = "right";
        div.style.position = "absolute";
        div.style.top = "-1px";
        div.style.right = "0";
        div.querySelector("svg").style.transform = "rotate(180deg) translateX(50%)";
        const div2 = document.createElement("div");
        div2.className = "select__dropDown";
        div2.innerHTML = innerHTML;
        div.appendChild(div2);
        p.appendChild(div);
      } else {
        p.querySelector("div").remove();
      }
    })
  );
}

function popUpsCPHandler (popups, innerHTML) {
  popups.forEach((p) =>
    p.addEventListener("click", () => {
      if (!p.innerHTML.includes("div")){
        const arrow = p.querySelector("svg");
        const div = document.createElement("div");
        div.innerHTML = p.innerHTML;
        div.className = p.className;
        div.style.textAlign = "right";
        div.style.position = "absolute";
        div.style.top = "-1px";
        div.style.right = "0";
        div.querySelector("svg").style.transform = "rotate(180deg) translateX(50%)";
        const div2 = document.createElement("div");
        const div3 = document.createElement("div");
        div2.style='border: 1px solid #71788C; border-radius: 5px; padding: 6px 4px; font-size: 10px; line-height: 11.75px; text-align: left; color: #71788C; margin: 4px -8px';
        div2.innerHTML = innerHTML;
        div3.innerHTML = '$';
        div3.style='border: 1px solid #71788C; border-radius: 5px; padding: 6px 4px; font-size: 10px; line-height: 11.75px; text-align: right; color: #71788C; margin: 4px -8px';
        div.appendChild(div2);
        div.appendChild(div3);

        p.appendChild(div);
      } else {
        p.querySelector("div").remove();
      }
    })
  );
}

popUpsHandler(popUpsD, '$');
popUpsHandler(popUpsPD, '%$');
popUpsCPHandler(popUpsCPH, 'UTC');
popUpsCPHandler(popUpsCPM, 'CTR');

selectors.forEach((s, i) =>
  s.addEventListener("mousedown", (e) => {
    e.preventDefault();

    const select = s.children[0];
    const dropDown = document.createElement("ul");
    dropDown.className = "select__options";

    [...s.children].forEach((option) => {
      const dropDownOption = document.createElement("li");
      dropDownOption.textContent = option.textContent;

      if (s.value === option.value) {
        dropDownOption.className = "select__options--active";
      }

      dropDownOption.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        s.value = option.value;
        select.dispatchEvent(new Event("change"));
        s.dispatchEvent(new Event("change"));
        dropDown.remove();
      });

      dropDown.appendChild(dropDownOption);
    });

    selectorContainers[i].appendChild(dropDown);
  })
);
