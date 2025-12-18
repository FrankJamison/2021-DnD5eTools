function setMaxLevel(characterClass) {
  var classMaxLevel;
  var maxLevel = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  var characterClasses = document.getElementById("class").textContent;

  switch (characterClass) {
    case "Artificer":
      classMaxLevel = 20;
      break;
    case "Barbarian":
      classMaxLevel = 20;
      break;
    case "Bard":
      classMaxLevel = 20;
      break;
    case "Blood Hunter":
      classMaxLevel = 20;
      break;
    case "Cleric":
      classMaxLevel = 20;
      break;
    case "Druid":
      classMaxLevel = 20;
      break;
    case "Fighter":
      classMaxLevel = 20;
      break;
    case "Monk":
      classMaxLevel = 20;
      break;
    case "Paladin":
      classMaxLevel = 20;
      break;
    case "Ranger":
      classMaxLevel = 20;
      break;
    case "Rogue":
      classMaxLevel = 20;
      break;
    case "Sorcerer":
      classMaxLevel = 20;
      break;
    case "Warlock":
      classMaxLevel = 20;
      break;
    case "Wizard":
      classMaxLevel = 20;
      break;
    default:
      classMaxLevel = 0;
  }

  if (characterClass.length == 0)
    document.getElementById("level").innerHTML = "<option></option>";
  else {
    var catOptions = "";
    for (var i = 1; i <= classMaxLevel; i++) {
      catOptions +=
        "<option value=" + i + "> Level " + maxLevel[i - 1] + "</option>";
    }
    document.getElementById("level").innerHTML = catOptions;
  }
}
