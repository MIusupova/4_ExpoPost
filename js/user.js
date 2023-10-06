const userId = window.location.search.substring(4);

fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
  .then((res) => res.json())
  .then((data) => renderUsers(data));

fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  .then((res) => res.json())
  .then((data) => renderPost(data));

const renderUsers = (data) => {
    data.forEach((item) => {
        const card_users = document.querySelector('.card-users')
        card_users.append(createUsers(item))
    });
    
};
const createUsers = (item) => {
    const card = document.createElement('div')
    card.classList.add('card');
    card.dataset.id = item.id;

    const card_body = document.createElement('div')
    card_body.classList.add('card-body');
    card.append(card_body);

    const card_name = document.createElement('h5')
    card_name.classList.add('card-name')
    card_body.append(card_name)
    card_name.innerText = item.name;

    const cardUsername = document.createElement('p')
    cardUsername.classList.add('card-username')
    card_body.append(cardUsername)
    cardUsername.innerText = item.username

    const cardEmail = document.createElement('p')
    cardEmail.classList.add('card-email')
    card_body.append(cardEmail)
    cardEmail.innerText = item.email

    const cardPhone = document.createElement('p')
    cardPhone.classList.add('card-phone')
    card_body.append(cardPhone)
    cardPhone.innerText = item.phone

    const cardWebsite = document.createElement('p')
    cardWebsite.classList.add('card-website')
    card_body.append(cardWebsite)

    cardWebsite.innerText = item.website
    
    return card;
};

const renderPost = (data) => {
    const row = document.querySelector('.row');
    const posts = document.querySelector('.posts')
    posts.innerText = `(${data.lenght})`;
    data.forEach((item) => {
      row.append(createPost(item))
    })
  };
  
  const createPost = (item) => {
    const col = document.createElement('div');
    col.classList.add('col');
    col.dataset.id = item.id;
    col.dataset.user_id = item.userId;
    
    const card = document.createElement('div');
    card.classList.add('card');
    col.append(card)
  
    const card_body = document.createElement('div');
    card_body.classList.add('card-body');
    card.append(card_body);
  
    const card_title = document.createElement('h5');
    card_title.classList.add('card-title');
    card_title.innerText = 
    item.title.lenght > 25 ? item.title.substring(0, 30) + "..." : item.title;
    card_body.append(card_title);
  
  
    const card_text = document.createElement('p');
    card_text.classList.add('card-text');
    card_text.innerText = 
    item.body.lenght > 100 ? item.body.substring(0, 100) + "..." : item.body; 
  
    card_body.append(card_text);
    card_body.innerHTML += `<a href="post.html?postId=${item.id}" class="btn btn-dark">Открыть пост</a>`;
    
    return col;
  };
  
