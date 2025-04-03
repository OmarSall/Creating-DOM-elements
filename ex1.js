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
  
let currentIndex = 0;

function updateBusinessCard(person) {
    document.querySelector(".portrait-column img").src = person.imageSrc;
    document.querySelector(".portrait-column img").alt = `${person.firstName} ${person.lastName}`;
    
    document.querySelector(".name-container-name").textContent = person.firstName;
    document.querySelector(".name-container-surname").textContent = person.lastName.toUpperCase();
    document.querySelector(".name-container-job").textContent = person.profession.toUpperCase();
    
    const contactItems = document.querySelectorAll(".contact-container-text");
    contactItems[0].textContent = person.address;
    contactItems[1].textContent = person.email;
    contactItems[2].textContent = person.phone;
    
}

function switchPerson() {
    currentIndex = (currentIndex + 1) % people.length;
    updateBusinessCard(people[currentIndex]);
}

updateBusinessCard(people[currentIndex]);

const switchButton = document.createElement("button");
switchButton.textContent = "Switch Profile";
switchButton.classList.add("switch-button");
switchButton.addEventListener("click", switchPerson);

document.body.appendChild(switchButton);