'use strict';
const selectorContainers = document.querySelectorAll('.select');
const selectors = document.querySelectorAll('.select__select');

selectors.forEach((s, i) => s.addEventListener('mousedown', e => {
  e.preventDefault();

  const select = s.children[0];
  const dropDown = document.createElement('ul');
  dropDown.className = "select__options";

  [...s.children].forEach(option => {
    const dropDownOption = document.createElement('li');
    dropDownOption.textContent = option.textContent;

    if (s.value === option.value) {
      dropDownOption.className = 'select__options--active'
    }

    dropDownOption.addEventListener('mousedown', e =>{
      e.stopPropagation();
      s.value = option.value;
      select.dispatchEvent(new Event('change'));
      s.dispatchEvent(new Event('change'));
      dropDown.remove();
    })

    dropDown.appendChild(dropDownOption);
  });

  selectorContainers[i].appendChild(dropDown);

}));


