// Урок 2 DOM: Выбор элементов -------------------------------------------------------------------------------------------------------------------------------------------
let container = document.querySelector(".container");
console.log(container);

/*Из общего контейнера нам нужен тот, в который мы будем добавлять песни. 
Выберите элемент с классом songs-container и сохраните его в переменной songsContainer. 
Внимание: контейнер стоит выбирать не из всего документа, а из переменной container.*/
let songsContainer = container.querySelector('.songs-container');
/*Каждая песня в плейлисте — элемент с классом song. Вызовом метода querySelectorAll выберите все треки и запишите их в переменную songs.
 Сейчас в неё будет записан пустой массив: ведь в плейлисте пока нет ни одной песни.*/
 let songs = songsContainer.querySelectorAll('.song');

 /*Неотъемлемые элементы интерактивности — кнопки. Выберем их, чтобы позже «повесить» события: то есть назначить, что будет происходить при нажатии на каждую кнопку.
Методом querySelector выберите в переменной container элемент с классом form__submit-btn_action_add и сохраните его в переменной addButton. 
Этим же методом выберите элемент с классом form__submit-btn_action_reset и сохраните в переменной resetButton.*/
let addButton = container.querySelector('.form__submit-btn_action_add');
let resetButton = container.querySelector('.form__submit-btn_action_reset');

/*Когда в плейлисте нет песен, кнопка «Очистить плейлист» должна быть неактивна. 
Методом setAttribute добавьте атрибут disabled кнопке resetButton, если количество песен равно 0.*/
if (songs.length === 0) {
    resetButton.setAttribute('disabled',true);
 }

 //-----------------------------------------------------------------------------------------------------------------------------------------------
 /*Свойства и атрибуты — не одно и то же. Если задать тегу атрибут, которого согласно спецификации W3C у этого тега быть не должно,
  то и соответствующее свойство у объекта не появится. Но мы всё равно можем получить значение этого атрибута через getAttribute:
  
  Значения атрибутов проходят предварительную обработку браузером, прежде чем превратиться в свойства объектов. 
То есть, значение свойства объекта может отличаться от значения атрибута тега, поэтому мы рекомендуем всегда работать со свойствами объектов.
  */

//  <!-- index.html -->
<div id="cat" secondName="Матроскин">Кот</div>
/* script.js */
let cat = document.querySelector('#cat');
console.log(cat.secondName); // undefined
console.log(cat.getAttribute('secondName')); // Матроскин

// Урок 5 Манипуляция с классами CSS -------------------------------------------------------------------------------------------------------------------------------------------
/*Неудобно стилизовать элементы, задавая атрибут style: лучше обращаться к свойствам classList или className.
 Удалите последний вызов метода setAttribute и вместо него напишите код, добавляющий кнопке класс form__submit-btn_disabled.*/
 let container = document.querySelector('.container');
 let songsContainer = container.querySelector('.songs-container');
 let songs = songsContainer.querySelectorAll('.song');
 
 let addButton = container.querySelector('.form__submit-btn_action_add');
 let resetButton = container.querySelector('.form__submit-btn_action_reset');
 
 if (songs.length === 0) {
    resetButton.setAttribute('disabled',true);
     resetButton.classList.add('form__submit-btn_disabled');
 }
/*Если в плейлисте появятся песни, кнопка «Очистить плейлист» должна стать активной. Для этого добавим условной конструкции блок else. 
Если количество песен не нулевое, кнопка должна лишаться атрибута disabled и класса form__submit-btn_disabled.*/
} else {
    resetButton.removeAttribute('disabled',true);
    resetButton.classList.remove('form__submit-btn_disabled');
  }

// Урок 6 Управление содержимым: свойства .innerHTML и .textContent-----------------------------------------------------------------------------------------------------------------------------

/*Добавьте этот блок кода внутрь контейнера songs-container. Контейнер содержится в переменной songsContainer. 
Между тегами <h4></h4> и <p></p> можете указать названия любого другого исполнителя и песни — пока это неважно. Кнопку «Добавить» вы тоже заставите работать позже.
Напишите функцию addSong. Она должна добавлять разметку песни в контейнер songs-container.
Не забудьте, что функцию нужно не только описать, но и вызвать: только так песня будет добавлена.*/
function addSong() {
    let divElement = document.querySelector('div');
      
    
        songsContainer.innerHTML = `
            <div class="song">
              <h4 class="song__artist">Кино</h4>
              <p class="song__title">Дерево</p>
              <button class="song__like"></button>
            </div>
      `;
    }
    
    // не забудьте вызвать функцию
    addSong();

/*Сейчас функция addSong перезаписывает содержимое контейнера songs-container
Нам же нужно, чтобы каждая новая песня вставала в конец списка, и не трогала другие треки. 
Для этого достаточно добавить один символ в код функции. Ваша задача — сделать это. (Это +=) */

function addSong() {
    let divElement = document.querySelector('div');
      
    
        songsContainer.innerHTML += `
            <div class="song">
              <h4 class="song__artist">Кино</h4>
              <p class="song__title">Дерево</p>
              <button class="song__like"></button>
            </div>
      `;
    }

// Урок 7 Реакция на действия пользователя. События--------------------------------------------------------------------------------------------------------------------
/*Пришло время добавить интерактивность!
Свяжем функцию addSong с кнопкой «Добавить». Для этого добавьте обработчик события методом addEventListener. Передайте ему 2 аргумента: тип события click и функцию-обработчик addSong*/
addButton.addEventListener('click', addSong);

/*Если код должен отрабатывать в разных местах, его следует вынести в функцию. Сделаем это. 
Перед объявлением функции addSong объявите функцию renderAdded. Поместите в неё нашу условную конструкцию:*/
let container = document.querySelector('.container');
let songsContainer = container.querySelector('.songs-container');

let addButton = container.querySelector('.form__submit-btn_action_add');
let resetButton = container.querySelector('.form__submit-btn_action_reset');

function renderAdded() {
    let songs = songsContainer.querySelectorAll('.song');

    if (songs.length === 0) {
        resetButton.setAttribute('disabled', true);
        resetButton.classList.add('form__submit-btn_disabled');
    } else {
        resetButton.removeAttribute('disabled');
        resetButton.classList.remove('form__submit-btn_disabled');
    }
}

function addSong() {
let divElement = document.querySelector('div');
  

    songsContainer.innerHTML += `
        <div class="song">
          <h4 class="song__artist">Кино</h4>
          <p class="song__title">Дерево</p>
          <button class="song__like"></button>
        </div>
  `;
}

addButton.addEventListener('click', addSong);
