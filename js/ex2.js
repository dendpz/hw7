// Character list. Each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};

// Set up my option tag
const optionElement = (text, value) => {
  const element = document.createElement("option");
  element.textContent = text;
  element.value = value;
  return element;
};

// Set up my list tag
const listElement = text => {
  const element = document.createElement("li");
  element.textContent = text;
  return element;
};

// Set up dropdown via Select tag
const houseElement = document.querySelector("select");


// For each x in the house list, add the house: Name, Code ex. Stark, ST. Adds to dropdown
houses.forEach(house => {
  houseElement.appendChild(optionElement(house.name, house.code));
});

// When the house title is selected, it will show their characters
houseElement.addEventListener("change", e => {
  const characters = getCharacters(e.target.value);
  const characterElement = document.getElementById("characters");
  characterElement.innerHTML = "";
  characters.forEach(character => {
    characterElement.appendChild(listElement(character));
  });
});