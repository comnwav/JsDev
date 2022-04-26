// dom/practice4.js

document.addEventListener(`DOMContentLoaded`, function() {

    let showDiv = document.querySelector(`#show`);
    showDiv.style.width = `300px`;
    showDiv.style.height = `300px`;
    showDiv.style.background = `blue`;

    let inputTag = document.getElementById(`userName`);
    inputTag.addEventListener(`change`, function () {
        let span = document.createElement(`span`);
         span.style.background = `green`;
         span.style.color = `white`;
         span.style.display = `inline-block`;
         span.style.margin = `2px`;

         span.innerHTML = document.querySelector(`#userName`).value;
         showDiv.appendChild(span);

         // vlaue => clear
         document.querySelector(`#userName`).value = '';
    });

    // button 이벤트
    let add = document.querySelector(`#button`);
    add.addEventListener('click', function () {
         let span = document.createElement(`span`);
         span.style.background = `green`;
         span.style.color = `white`;
         span.style.display = `inline-block`;
         span.style.margin = `2px`;

         span.innerHTML = document.querySelector(`#userName`).value;
         showDiv.appendChild(span);

         document.querySelector(`#userName`).value = '';
    });


});