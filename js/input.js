//Реализуем логику кнопки поиск
const searchBtn = document.querySelector('#search')
const input = document.querySelector('.form-control')
searchBtn.addEventListener('click', (event) => {
 event.preventDefault();
 console.log(window.location);
 window.location.href = window.location.origin + `/search.html?name=${input.value}`;    //href проверить в консоль лог
})