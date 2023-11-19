//Реализуем логику кнопки поиск
const searchBtn = document.querySelector('#search')
const input = document.querySelector('.form-control')
searchBtn.addEventListener('click', (event) => {
 event.preventDefault();
 window.location.href = window.location.origin + ` https://miusupova.github.io/4_ExpoPost/Users/arsenarsanakaev/Desktop/my-project/4_ExpoPost/poisk.html?name=${input.value}`;    //href проверить в консоль лог
})
