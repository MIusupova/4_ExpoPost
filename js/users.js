const card_hol = document.querySelector('.card-hol');
const loader = document.querySelector('.loader')
card_hol.style.display = 'none'
fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => res.json())
.then((data) => renderUsers(data))

const renderUsers = (data) => {
  loader.style.display = 'none'
  card_hol.style.display = 'block'
    data.forEach((item) => {
      card_hol.append(createUsers(item));
    });
  };
const createUsers = (item) => {
    const card = document.createElement('div')
    card.classList.add('card', 'w-75');
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
    card_body.innerHTML += 
    `<a href="user.html" class="btn btn-dark">Перейти на страницу!</a>`
    return card;

}

//<div class="card w-75">
//  <div class="card-body">
//    <h5 class="card-title">Card title</h5>
//    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
//    <a href="#" class="btn btn-primary">Button</a>
//  </div>
//</div>