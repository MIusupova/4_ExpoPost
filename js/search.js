const search = window.location.search.substring(6).split('%20').join(' ')
fetch(`https://jsonplaceholder.typicode.com/users?name=${search}`)
  .then((res) => res.json())
  .then((data) => {
    const card_users = document.querySelector('.card-users')
    card_users.append(createUsers(data[0]))});

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

