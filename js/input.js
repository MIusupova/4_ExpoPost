//Реализуем логику кнопки поиск
const searchBtn = document.querySelector('#search')
const input = document.querySelector('.form-control')
searchBtn.addEventListener('click', (event) => {
 event.preventDefault();
 window.location.href = window.location.origin + `/4_ExpoPost/pages/poisk.html?name=${input.value}`;    //href проверить в консоль лог
})
