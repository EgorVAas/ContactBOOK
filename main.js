let contactForm = document.querySelector('#contactForm');
let nameInput = document.querySelector('#name');
let imageUrlInput = document.querySelector('#imageUrl');
let phoneInput = document.querySelector('#phone');
let contactsList = document.querySelector('.contacts-list');

function displayContacts() {
  contactsList.innerHTML = '';

  let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

  contacts.forEach(function(contact) {
    let contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    let contactImg = document.createElement('img');
    contactImg.src = contact.imageUrl;

    let contactName = document.createElement('p');
    contactName.textContent = contact.name;

    let contactPhone = document.createElement('p');
    contactPhone.textContent = contact.phone;

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Удалить';
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', function() {
      let index = contacts.indexOf(contact);
      contacts.splice(index, 1);
      localStorage.setItem('contacts', JSON.stringify(contacts));
      displayContacts();
    });
    contactDiv.appendChild(contactImg);
    contactDiv.appendChild(contactName);
    contactDiv.appendChild(contactPhone);
    contactDiv.appendChild(deleteBtn);
    contactsList.appendChild(contactDiv);
  });
}
contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

  let newContact = {
    name: nameInput.value,
    imageUrl: imageUrlInput.value,
    phone: phoneInput.value,
  };
  contacts.push(newContact);

  localStorage.setItem('contacts', JSON.stringify(contacts));

  contactForm.reset();
  displayContacts();
});

