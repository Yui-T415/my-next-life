const youImages = [
  "images/person/01.png",
  "images/person/02.png",
  "images/person/03.png",
  "images/person/04.png",
  "images/person/05.png",
  "images/person/06.png",
  "images/person/07.png",
  "images/person/08.png",
  "images/person/09.png",
  "images/person/10.png",
  "images/person/11.png",
  "images/person/12.png",
];

const partnerImages = [
  "images/person/01.png",
  "images/person/02.png",
  "images/person/03.png",
  "images/person/04.png",
  "images/person/05.png",
  "images/person/06.png",
  "images/person/07.png",
  "images/person/08.png",
  "images/person/09.png",
  "images/person/10.png",
  "images/person/11.png",
  "images/person/12.png",
];

const petImages = [
  "images/pet/13.png",
  "images/pet/14.png",
  "images/pet/15.png",
  "images/pet/16.png",
  "images/pet/17.png",
];

const houseImages = [
  "images/house/18.png",
  "images/house/19.png",
  "images/house/20.png",
  "images/house/21.png",
  "images/house/22.png",
];

const diagnoseButton = document.getElementById("diagnoseButton");
const youImage = document.getElementById("youImage");
const partnerImage = document.getElementById("partnerImage");
const petImage = document.getElementById("petImage");
const houseImage = document.getElementById("houseImage");

diagnoseButton.addEventListener("click", () => {
  let randomYouIndex = Math.floor(Math.random() * youImages.length);
  let randomPartnerIndex;

  do {
    randomPartnerIndex = Math.floor(Math.random() * partnerImages.length);
  } while (randomYouIndex === randomPartnerIndex);

  const randomYou = youImages[randomYouIndex];
  const randomPartner = partnerImages[randomPartnerIndex];
  const randomPet = petImages[Math.floor(Math.random() * petImages.length)];
  const randomHouse =
    houseImages[Math.floor(Math.random() * houseImages.length)];

  youImage.src = randomYou;
  partnerImage.src = randomPartner;
  petImage.src = randomPet;
  houseImage.src = randomHouse;
});
