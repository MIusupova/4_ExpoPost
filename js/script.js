const row = document.querySelector('.row');
const loader = document.querySelector('.loader')
row.style.display = 'none'
const answer = fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res) => res.json())
  .then((data) => renderPosts(data.splice(0, 20)));

const renderPosts = (data) => {
  loader.style.display = 'none'
  row.style.display = 'flex'
  data.forEach((item) => {
    row.append(createPost(item));
  });
};

const createPost = (item) => {
  const col = document.createElement('div');
  col.classList.add('col');
  col.dataset.id = item.id;
  col.dataset.user_id = item.userId;
  const card = document.createElement('div');
  card.classList.add('card');

  col.append(card);

  const card_body = document.createElement('div');
  card_body.classList.add('card-body');

  card.append(card_body);

  const card_title = document.createElement('h5');
  card_title.classList.add('card-title');
  card_title.innerText = item.title.length > 25 ? item.title.substring(0, 25) + '...' : item.title;

  card_body.append(card_title);

  const card_text = document.createElement('p');
  card_text.classList.add('card-text');
  card_text.innerText = item.body.length > 115 ? item.body.substring(0, 115) + '...' : item.body;

  card_body.append(card_text);

  card_body.innerHTML += `<a href="post.html?postId=${item.id}" class="btn btn-dark">Открыть пост</a>`;

  return col;
};


//Реализуем логику кнопки поиск
 const searchBtn = document.querySelector('#search')
 searchBtn.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(window.location);
  window.location.href = window.location.origin + '/search.html?name=hghhb';    //href проверить в консоль лог
 })