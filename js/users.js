const users = fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => res.json())
.then((data) => renderUsers(data.splice(0, 20)))

const renderUsers = (data) => {
    const cards = document.querySelector('.cards');
    data.forEach((item) => {
      cards.append(createUsers(item));
    });
  };
const createUsers = (item) => {
    const card = document.createElement('div')
    card.classList.add('card w-75');
    card.dataset.id = item.id;

    const body = document.createElement('div')
    body.classList.add('card-body');
    card.append(body);

    const cardName = document.createElement('h5')
    cardName.classList.add('card-name')
    body.append(cardName)
    cardName.innerText = item.name

    const cardUsername = document.createElement('p')
    cardUsername.classList.add('card-username')
    body.append(cardUsername)
    cardUsername.innerText = item.username

    const cardEmail = document.createElement('p')
    cardEmail.classList.add('card-email')
    body.append(cardEmail)
    cardEmail.innerText = item.email

    const cardPhone = document.createElement('p')
    cardPhone.classList.add('card-phone')
    body.append(cardPhone)
    cardPhone.innerText = item.phone

    const cardWebsite = document.createElement('p')
    cardWebsite.classList.add('card-website')
    body.append(cardWebsite)
    cardWebsite.innerText = item.website

    body.innerHTML += 
    `<a href="#" class="btn btn-dark">Перейти на страницу!</a>`
    
    return card

 
}

//<div class="card w-75">
//  <div class="card-body">
//    <h5 class="card-title">Card title</h5>
//    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
//    <a href="#" class="btn btn-primary">Button</a>
//  </div>
//</div>