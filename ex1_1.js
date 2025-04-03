const people = [
    {
      firstName: "Jan",
      lastName: "Kowalski",
      profession: "Web Developer",
      address: "Paprotna 23, Boleslawiec",
      email: "jankowalski@gmail.com",
      phone: "234 535 3354",
      imageSrc: "profile.jpg"
    },
    {
      firstName: "John",
      lastName: "Smith",
      profession: "Designer",
      address: "350 5th Ave, New York, NY",
      email: "johnsmith@gmail.com",
      phone: "646 555 0198",
      imageSrc: "image.jpg"
    }
  ];

const cardsContainer = document.createElement("div");
cardsContainer.classList.add("cards-container");
document.body.append(cardsContainer);

function createBusinessCard(person) {
    const card = document.createElement("div");
    card.classList.add("wrapper");

    card.innerHTML = `
        <div class="portrait-column">
            <img src="image.jpg" alt="${person.firstName} ${person.lastName}">
        </div>
        <div class="information-column">
            <div class="name-container">
                <div class="name-container-credentials">
                    <div class="name-container-name">${person.firstName}</div>
                    <div class="name-container-surname">${person.lastName.toUpperCase()}</div>
                </div>
                <div class="name-container-job">${person.profession.toUpperCase()}</div>
            </div>
            <div class="contact-container">
                <ul class="contact-container-unordered-list">
                    <li class="contact-container-list-item">
                        <div class="contact-container-list-item-img">
                            <img src="map-pin.svg" alt="icon" width="26" height="26">
                        </div>
                        <span class="contact-container-text">${person.address}</span>
                    </li>
                    <li class="contact-container-list-item">
                        <div class="contact-container-list-item-img">
                            <img src="mail.svg" alt="icon" width="26" height="26">
                        </div>
                        <span class="contact-container-text">${person.email}</span>
                    </li>
                    <li class="contact-container-list-item">
                        <div class="contact-container-list-item-img">
                            <img src="phone.svg" alt="icon" width="26" height="26">
                        </div>
                        <span class="contact-container-text">${person.phone}</span>
                    </li>
                </ul>
            </div>
        </div>
    `;
    cardsContainer.append(card);
}

people.forEach(createBusinessCard);