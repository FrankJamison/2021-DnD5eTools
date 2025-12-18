$(document).ready(function () {
    $('#calc-stats').click(function () {
        var race = $("#race option:selected").text();
        // Populate Character
        prepCharacter(race);
        getCharacteristicRanges();

        // Physical Characteristics
        character.age = getRandomAge();
        character.height = getRandomHeight();
        character.weight = getRandomWeight();

        // Display Results
        displayCharacteristics();
        displayCharacteristicRanges();
    });
});

/* Imports character data from the races.js file based on character race. */
function prepCharacter(race) {
    if (race === "Aarakocra") {
        character.Race = aaracokra.Race;
        character.AdultAge = aaracokra.AdultAge;
        character.MaxAge = aaracokra.MaxAge;
        character.BaseHeight = aaracokra.BaseHeight;
        character.HeightModifier = aaracokra.HeightModifier;
        character.BaseWeight = aaracokra.BaseWeight;
        character.WeightModifier = aaracokra.WeightModifier;
    } else if (
        race === "Aasimar, Fallen" ||
        race === "Aasimar, Protector" ||
        race === "Aasimar, Scourge" ||
        race === "Aasimar, Variant"
    ) {
        character.Race = aasimar.Race;
        character.AdultAge = aasimar.AdultAge;
        character.MaxAge = aasimar.MaxAge;
        character.BaseHeight = aasimar.BaseHeight;
        character.HeightModifier = aasimar.HeightModifier;
        character.BaseWeight = aasimar.BaseWeight;
        character.WeightModifier = aasimar.WeightModifier;
    } else if (race === "Bugbear") {
        character.Race = bugbear.Race;
        character.AdultAge = bugbear.AdultAge;
        character.MaxAge = bugbear.MaxAge;
        character.BaseHeight = bugbear.BaseHeight;
        character.HeightModifier = bugbear.HeightModifier;
        character.BaseWeight = bugbear.BaseWeight;
        character.WeightModifier = bugbear.WeightModifier;
    } else if (race === "Centaur") {
        character.Race = centaur.Race;
        character.AdultAge = centaur.AdultAge;
        character.MaxAge = centaur.MaxAge;
        character.BaseHeight = centaur.BaseHeight;
        character.HeightModifier = centaur.HeightModifier;
        character.BaseWeight = centaur.BaseWeight;
        character.WeightModifier = centaur.WeightModifier;
    } else if (race === "Changeling") {
        character.Race = changeling.Race;
        character.AdultAge = changeling.AdultAge;
        character.MaxAge = changeling.MaxAge;
        character.BaseHeight = changeling.BaseHeight;
        character.HeightModifier = changeling.HeightModifier;
        character.BaseWeight = changeling.BaseWeight;
        character.WeightModifier = changeling.WeightModifier;
    } else if (
        race === "Dragonborn" ||
        race === "Dragonborn, Draconblood" ||
        race === "Dragonborn, Ravenite"
    ) {
        character.Race = dragonborn.Race;
        character.AdultAge = dragonborn.AdultAge;
        character.MaxAge = dragonborn.MaxAge;
        character.BaseHeight = dragonborn.BaseHeight;
        character.HeightModifier = dragonborn.HeightModifier;
        character.BaseWeight = dragonborn.BaseWeight;
        character.WeightModifier = dragonborn.WeightModifier;
    } else if (
        race === "Dwarf, Gray (Duergar)" ||
        race === "Dwarf, Hill" ||
        race === "Dwarf, Mark of Warding"
    ) {
        character.Race = dwarf.Race;
        character.AdultAge = dwarf.AdultAge;
        character.MaxAge = dwarf.MaxAge;
        character.BaseHeight = dwarf.BaseHeight;
        character.HeightModifier = dwarf.HeightModifier;
        character.BaseWeight = dwarf.BaseWeight;
        character.WeightModifier = dwarf.WeightModifier;
    } else if (race === "Dwarf, Mountain") {
        character.Race = dwarf_mountain.Race;
        character.AdultAge = dwarf_mountain.AdultAge;
        character.MaxAge = dwarf_mountain.MaxAge;
        character.BaseHeight = dwarf_mountain.BaseHeight;
        character.HeightModifier = dwarf_mountain.HeightModifier;
        character.BaseWeight = dwarf_mountain.BaseWeight;
        character.WeightModifier = dwarf_mountain.WeightModifier;
    } else if (race === "Elf, Dark (Drow)") {
        character.Race = elf_dark.Race;
        character.AdultAge = elf_dark.AdultAge;
        character.MaxAge = elf_dark.MaxAge;
        character.BaseHeight = elf_dark.BaseHeight;
        character.HeightModifier = elf_dark.HeightModifier;
        character.BaseWeight = elf_dark.BaseWeight;
        character.WeightModifier = elf_dark.WeightModifier;
    } else if (
        race === "Elf, Eladrin" ||
        race === "Elf, Eladrin Variant"
    ) {
        character.Race = elf_eladrin.Race;
        character.AdultAge = elf_eladrin.AdultAge;
        character.MaxAge = elf_eladrin.MaxAge;
        character.BaseHeight = elf_eladrin.BaseHeight;
        character.HeightModifier = elf_eladrin.HeightModifier;
        character.BaseWeight = elf_eladrin.BaseWeight;
        character.WeightModifier = elf_eladrin.WeightModifier;
    } else if (
        race === "Elf, High" ||
        race === "Elf, Aereni High" ||
        race === "Elf, Valenar High" ||
        race === "Elf, Pallid" ||
        race === "Elf, Sea"
    ) {
        character.Race = elf_high.Race;
        character.AdultAge = elf_high.AdultAge;
        character.MaxAge = elf_high.MaxAge;
        character.BaseHeight = elf_high.BaseHeight;
        character.HeightModifier = elf_high.HeightModifier;
        character.BaseWeight = elf_high.BaseWeight;
        character.WeightModifier = elf_high.WeightModifier;
    } else if (
        race === "Elf, Shadar-kai" ||
        race === "Elf, Mark of Shadow"
    ) {
        character.Race = elf_shadar_kai.Race;
        character.AdultAge = elf_shadar_kai.AdultAge;
        character.MaxAge = elf_shadar_kai.MaxAge;
        character.BaseHeight = elf_shadar_kai.BaseHeight;
        character.HeightModifier = elf_shadar_kai.HeightModifier;
        character.BaseWeight = elf_shadar_kai.BaseWeight;
        character.WeightModifier = elf_shadar_kai.WeightModifier;
    } else if (
        race === "Elf, Wood" ||
        race === "Elf, Aereni Wood" ||
        race === "Elf, Valenar Wood"
    ) {
        character.Race = elf_wood.Race;
        character.AdultAge = elf_wood.AdultAge;
        character.MaxAge = elf_wood.MaxAge;
        character.BaseHeight = elf_wood.BaseHeight;
        character.HeightModifier = elf_wood.HeightModifier;
        character.BaseWeight = elf_wood.BaseWeight;
        character.WeightModifier = elf_wood.WeightModifier;
    } else if (race === "Firbolg") {
        character.Race = firbolg.Race;
        character.AdultAge = firbolg.AdultAge;
        character.MaxAge = firbolg.MaxAge;
        character.BaseHeight = firbolg.BaseHeight;
        character.HeightModifier = firbolg.HeightModifier;
        character.BaseWeight = firbolg.BaseWeight;
        character.WeightModifier = firbolg.WeightModifier;
    } else if (
        race === "Genasi, Air" ||
        race === "Genasi, Earth" ||
        race === "Genasi, Fire" ||
        race === "Genasi, Water"
    ) {
        character.Race = genasi.Race;
        character.AdultAge = genasi.AdultAge;
        character.MaxAge = genasi.MaxAge;
        character.BaseHeight = genasi.BaseHeight;
        character.HeightModifier = genasi.HeightModifier;
        character.BaseWeight = genasi.BaseWeight;
        character.WeightModifier = genasi.WeightModifier;
    } else if (race === "Gith, Githyanki") {
        character.Race = gith_githyanki.Race;
        character.AdultAge = gith_githyanki.AdultAge;
        character.MaxAge = gith_githyanki.MaxAge;
        character.BaseHeight = gith_githyanki.BaseHeight;
        character.HeightModifier = gith_githyanki.HeightModifier;
        character.BaseWeight = gith_githyanki.BaseWeight;
        character.WeightModifier = gith_githyanki.WeightModifier;
    } else if (race === "Gith, Githzerai") {
        character.Race = gith_githzerai.Race;
        character.AdultAge = gith_githzerai.AdultAge;
        character.MaxAge = gith_githzerai.MaxAge;
        character.BaseHeight = gith_githzerai.BaseHeight;
        character.HeightModifier = gith_githzerai.HeightModifier;
        character.BaseWeight = gith_githzerai.BaseWeight;
        character.WeightModifier = gith_githzerai.WeightModifier;
    } else if (race === "Gnome, Deep (Svirfneblin)") {
        character.Race = gnome_deep.Race;
        character.AdultAge = gnome_deep.AdultAge;
        character.MaxAge = gnome_deep.MaxAge;
        character.BaseHeight = gnome_deep.BaseHeight;
        character.HeightModifier = gnome_deep.HeightModifier;
        character.BaseWeight = gnome_deep.BaseWeight;
        character.WeightModifier = gnome_deep.WeightModifier;
    } else if (
        race === "Gnome, Forest" ||
        race === "Gnome, Mark of Scribing" ||
        race === "Gnome, Rock"
    ) {
        character.Race = gnome.Race;
        character.AdultAge = gnome.AdultAge;
        character.MaxAge = gnome.MaxAge;
        character.BaseHeight = gnome.BaseHeight;
        character.HeightModifier = gnome.HeightModifier;
        character.BaseWeight = gnome.BaseWeight;
        character.WeightModifier = gnome.WeightModifier;
    } else if (race === "Goblin") {
        character.Race = goblin.Race;
        character.AdultAge = goblin.AdultAge;
        character.MaxAge = goblin.MaxAge;
        character.BaseHeight = goblin.BaseHeight;
        character.HeightModifier = goblin.HeightModifier;
        character.BaseWeight = goblin.BaseWeight;
        character.WeightModifier = goblin.WeightModifier;
    } else if (race === "Goliath") {
        character.Race = goliath.Race;
        character.AdultAge = goliath.AdultAge;
        character.MaxAge = goliath.MaxAge;
        character.BaseHeight = goliath.BaseHeight;
        character.HeightModifier = goliath.HeightModifier;
        character.BaseWeight = goliath.BaseWeight;
        character.WeightModifier = goliath.WeightModifier;
    } else if (race === "Grung") {
        character.Race = grung.Race;
        character.AdultAge = grung.AdultAge;
        character.MaxAge = grung.MaxAge;
        character.BaseHeight = grung.BaseHeight;
        character.HeightModifier = grung.HeightModifier;
        character.BaseWeight = grung.BaseWeight;
        character.WeightModifier = grung.WeightModifier;
    } else if (
        race === "Half-Elf" ||
        race === "Half-Elf, Aquatic" ||
        race === "Half-Elf, Drow" ||
        race === "Half-Elf, High" ||
        race === "Half-Elf, Mark of Detection" ||
        race === "Half-Elf, Mark of Storm" ||
        race === "Half-Elf, Wood"
    ) {
        character.Race = half_elf.Race;
        character.AdultAge = half_elf.AdultAge;
        character.MaxAge = half_elf.MaxAge;
        character.BaseHeight = half_elf.BaseHeight;
        character.HeightModifier = half_elf.HeightModifier;
        character.BaseWeight = half_elf.BaseWeight;
        character.WeightModifier = half_elf.WeightModifier;
    } else if (
        race === "Halfling, Ghostwise" ||
        race === "Halfling, Lightfoot" ||
        race === "Halfling, Lotusden" ||
        race === "Halfling, Mark of Healing" ||
        race === "Halfling, Mark of Hospitality" ||
        race === "Halfling, Stout"
    ) {
        character.Race = halfling.Race;
        character.AdultAge = halfling.AdultAge;
        character.MaxAge = halfling.MaxAge;
        character.BaseHeight = halfling.BaseHeight;
        character.HeightModifier = halfling.HeightModifier;
        character.BaseWeight = halfling.BaseWeight;
        character.WeightModifier = halfling.WeightModifier;
    } else if (
        race === "Half-Orc" ||
        race === "Half-Orc, Mark of Finding"
    ) {
        character.Race = half_orc.Race;
        character.AdultAge = half_orc.AdultAge;
        character.MaxAge = half_orc.MaxAge;
        character.BaseHeight = half_orc.BaseHeight;
        character.HeightModifier = half_orc.HeightModifier;
        character.BaseWeight = half_orc.BaseWeight;
        character.WeightModifier = half_orc.WeightModifier;
    } else if (race === "Hobgoblin") {
        character.Race = hobgoblin.Race;
        character.AdultAge = hobgoblin.AdultAge;
        character.MaxAge = hobgoblin.MaxAge;
        character.BaseHeight = hobgoblin.BaseHeight;
        character.HeightModifier = hobgoblin.HeightModifier;
        character.BaseWeight = hobgoblin.BaseWeight;
        character.WeightModifier = hobgoblin.WeightModifier;
    } else if (
        race === "Human" ||
        race === "Human, Mark of Finding" ||
        race === "Human, Mark of Handling" ||
        race === "Human, Mark of Making" ||
        race === "Human, Mark of Passage" ||
        race === "Human, Mark of Sentinel" ||
        race === "Human, Variant"
    ) {
        character.Race = human.Race;
        character.AdultAge = human.AdultAge;
        character.MaxAge = human.MaxAge;
        character.BaseHeight = human.BaseHeight;
        character.HeightModifier = human.HeightModifier;
        character.BaseWeight = human.BaseWeight;
        character.WeightModifier = human.WeightModifier;
    } else if (race === "Kalashtar") {
        character.Race = kalashtar.Race;
        character.AdultAge = kalashtar.AdultAge;
        character.MaxAge = kalashtar.MaxAge;
        character.BaseHeight = kalashtar.BaseHeight;
        character.HeightModifier = kalashtar.HeightModifier;
        character.BaseWeight = kalashtar.BaseWeight;
        character.WeightModifier = kalashtar.WeightModifier;
    } else if (race === "Kenku") {
        character.Race = kenku.Race;
        character.AdultAge = kenku.AdultAge;
        character.MaxAge = kenku.MaxAge;
        character.BaseHeight = kenku.BaseHeight;
        character.HeightModifier = kenku.HeightModifier;
        character.BaseWeight = kenku.BaseWeight;
        character.WeightModifier = kenku.WeightModifier;
    } else if (race === "Kobold") {
        character.Race = kobold.Race;
        character.AdultAge = kobold.AdultAge;
        character.MaxAge = kobold.MaxAge;
        character.BaseHeight = kobold.BaseHeight;
        character.HeightModifier = kobold.HeightModifier;
        character.BaseWeight = kobold.BaseWeight;
        character.WeightModifier = kobold.WeightModifier;
    } else if (race === "Leonin") {
        character.Race = leonin.Race;
        character.AdultAge = leonin.AdultAge;
        character.MaxAge = leonin.MaxAge;
        character.BaseHeight = leonin.BaseHeight;
        character.HeightModifier = leonin.HeightModifier;
        character.BaseWeight = leonin.BaseWeight;
        character.WeightModifier = leonin.WeightModifier;
    } else if (race === "Lizardfolk") {
        character.Race = lizardfolk.Race;
        character.AdultAge = lizardfolk.AdultAge;
        character.MaxAge = lizardfolk.MaxAge;
        character.BaseHeight = lizardfolk.BaseHeight;
        character.HeightModifier = lizardfolk.HeightModifier;
        character.BaseWeight = lizardfolk.BaseWeight;
        character.WeightModifier = lizardfolk.WeightModifier;
    } else if (race === "Locathah") {
        character.Race = locathah.Race;
        character.AdultAge = locathah.AdultAge;
        character.MaxAge = locathah.MaxAge;
        character.BaseHeight = locathah.BaseHeight;
        character.HeightModifier = locathah.HeightModifier;
        character.BaseWeight = locathah.BaseWeight;
        character.WeightModifier = locathah.WeightModifier;
    } else if (race === "Loxodon") {
        character.Race = loxodon.Race;
        character.AdultAge = loxodon.AdultAge;
        character.MaxAge = loxodon.MaxAge;
        character.BaseHeight = loxodon.BaseHeight;
        character.HeightModifier = loxodon.HeightModifier;
        character.BaseWeight = loxodon.BaseWeight;
        character.WeightModifier = loxodon.WeightModifier;
    } else if (race === "Minotaur") {
        character.Race = minotaur.Race;
        character.AdultAge = minotaur.AdultAge;
        character.MaxAge = minotaur.MaxAge;
        character.BaseHeight = minotaur.BaseHeight;
        character.HeightModifier = minotaur.HeightModifier;
        character.BaseWeight = minotaur.BaseWeight;
        character.WeightModifier = minotaur.WeightModifier;
    } else if (
        race === "Orc" ||
        race === "Orc of Eberron" ||
        race === "Orc of Exandria"
    ) {
        character.Race = orc.Race;
        character.AdultAge = orc.AdultAge;
        character.MaxAge = orc.MaxAge;
        character.BaseHeight = orc.BaseHeight;
        character.HeightModifier = orc.HeightModifier;
        character.BaseWeight = orc.BaseWeight;
        character.WeightModifier = orc.WeightModifier;
    } else if (race === "Satyr") {
        character.Race = satyr.Race;
        character.AdultAge = satyr.AdultAge;
        character.MaxAge = satyr.MaxAge;
        character.BaseHeight = satyr.BaseHeight;
        character.HeightModifier = satyr.HeightModifier;
        character.BaseWeight = satyr.BaseWeight;
        character.WeightModifier = satyr.WeightModifier;
    } else if (
        race === "Shifter, Beasthide" ||
        race === "Shifter, Longtooth" ||
        race === "Shifter, Swiftstride" ||
        race === "Shifter, Wildhunt"
    ) {
        character.Race = shifter.Race;
        character.AdultAge = shifter.AdultAge;
        character.MaxAge = shifter.MaxAge;
        character.BaseHeight = shifter.BaseHeight;
        character.HeightModifier = shifter.HeightModifier;
        character.BaseWeight = shifter.BaseWeight;
        character.WeightModifier = shifter.WeightModifier;
    } else if (race === "Simic Hybrid Elf") {
        character.Race = simic_hybrid_elf.Race;
        character.AdultAge = simic_hybrid_elf.AdultAge;
        character.MaxAge = simic_hybrid_elf.MaxAge;
        character.BaseHeight = simic_hybrid_elf.BaseHeight;
        character.HeightModifier = simic_hybrid_elf.HeightModifier;
        character.BaseWeight = simic_hybrid_elf.BaseWeight;
        character.WeightModifier = simic_hybrid_elf.WeightModifier;
    } else if (race === "Simic Hybrid Human") {
        character.Race = simic_hybrid_human.Race;
        character.AdultAge = simic_hybrid_human.AdultAge;
        character.MaxAge = simic_hybrid_human.MaxAge;
        character.BaseHeight = simic_hybrid_human.BaseHeight;
        character.HeightModifier = simic_hybrid_human.HeightModifier;
        character.BaseWeight = simic_hybrid_human.BaseWeight;
        character.WeightModifier = simic_hybrid_human.WeightModifier;
    } else if (race === "Simic Hybrid Vedalken") {
        character.Race = simic_hybrid_vedalken.Race;
        character.AdultAge = simic_hybrid_vedalken.AdultAge;
        character.MaxAge = simic_hybrid_vedalken.MaxAge;
        character.BaseHeight = simic_hybrid_vedalken.BaseHeight;
        character.HeightModifier = simic_hybrid_vedalken.HeightModifier;
        character.BaseWeight = simic_hybrid_vedalken.BaseWeight;
        character.WeightModifier = simic_hybrid_vedalken.WeightModifier;
    } else if (race === "Tabaxi") {
        character.Race = tabaxi.Race;
        character.AdultAge = tabaxi.AdultAge;
        character.MaxAge = tabaxi.MaxAge;
        character.BaseHeight = tabaxi.BaseHeight;
        character.HeightModifier = tabaxi.HeightModifier;
        character.BaseWeight = tabaxi.BaseWeight;
        character.WeightModifier = tabaxi.WeightModifier;
    } else if (
        race === "Tiefling" ||
        race === "Tiefling, Baalzebul" ||
        race === "Tiefling, Dispater" ||
        race === "Tiefling, Feral" ||
        race === "Tiefling, Feral Variant" ||
        race === "Tiefling, Fierna" ||
        race === "Tiefling, Glasya" ||
        race === "Tiefling, Levistus" ||
        race === "Tiefling, Mammon" ||
        race === "Tiefling, Mephistopheles" ||
        race === "Tiefling, Variant" ||
        race === "Tiefling, Zariel"
    ) {
        character.Race = tiefling.Race;
        character.AdultAge = tiefling.AdultAge;
        character.MaxAge = tiefling.MaxAge;
        character.BaseHeight = tiefling.BaseHeight;
        character.HeightModifier = tiefling.HeightModifier;
        character.BaseWeight = tiefling.BaseWeight;
        character.WeightModifier = tiefling.WeightModifier;
    } else if (race === "Tortle") {
        character.Race = tortle.Race;
        character.AdultAge = tortle.AdultAge;
        character.MaxAge = tortle.MaxAge;
        character.BaseHeight = tortle.BaseHeight;
        character.HeightModifier = tortle.HeightModifier;
        character.BaseWeight = tortle.BaseWeight;
        character.WeightModifier = tortle.WeightModifier;
    } else if (race === "Triton") {
        character.Race = triton.Race;
        character.AdultAge = triton.AdultAge;
        character.MaxAge = triton.MaxAge;
        character.BaseHeight = triton.BaseHeight;
        character.HeightModifier = triton.HeightModifier;
        character.BaseWeight = triton.BaseWeight;
        character.WeightModifier = triton.WeightModifier;
    } else if (race === "Vedalken") {
        character.Race = vedalken.Race;
        character.AdultAge = vedalken.AdultAge;
        character.MaxAge = vedalken.MaxAge;
        character.BaseHeight = vedalken.BaseHeight;
        character.HeightModifier = vedalken.HeightModifier;
        character.BaseWeight = vedalken.BaseWeight;
        character.WeightModifier = vedalken.WeightModifier;
    } else if (race === "Verdan (small)") {
        character.Race = verdan_small.Race;
        character.AdultAge = verdan_small.AdultAge;
        character.MaxAge = verdan_small.MaxAge;
        character.BaseHeight = verdan_small.BaseHeight;
        character.HeightModifier = verdan_small.HeightModifier;
        character.BaseWeight = verdan_small.BaseWeight;
        character.WeightModifier = verdan_small.WeightModifier;
    } else if (race === "Verdan (medium)") {
        character.Race = verdan_medium.Race;
        character.AdultAge = verdan_medium.AdultAge;
        character.MaxAge = verdan_medium.MaxAge;
        character.BaseHeight = verdan_medium.BaseHeight;
        character.HeightModifier = verdan_medium.HeightModifier;
        character.BaseWeight = verdan_medium.BaseWeight;
        character.WeightModifier = verdan_medium.WeightModifier;
    } else if (
        race === "Warforged"
    ) {
        character.Race = warforged.Race;
        character.AdultAge = warforged.AdultAge;
        character.MaxAge = warforged.MaxAge;
        character.BaseHeight = warforged.BaseHeight;
        character.HeightModifier = warforged.HeightModifier;
        character.BaseWeight = warforged.BaseWeight;
        character.WeightModifier = warforged.WeightModifier;
    } else if (race === "Warforged, Juggernaut") {
        character.Race = warforged_juggernaut.Race;
        character.AdultAge = warforged_juggernaut.AdultAge;
        character.MaxAge = warforged_juggernaut.MaxAge;
        character.BaseHeight = warforged_juggernaut.BaseHeight;
        character.HeightModifier = warforged_juggernaut.HeightModifier;
        character.BaseWeight = warforged_juggernaut.BaseWeight;
        character.WeightModifier = warforged_juggernaut.WeightModifier;
    } else if (race === "Yuan-ti Pureblood") {
        character.Race = yuan_ti_pureblood.Race;
        character.AdultAge = yuan_ti_pureblood.AdultAge;
        character.MaxAge = yuan_ti_pureblood.MaxAge;
        character.BaseHeight = yuan_ti_pureblood.BaseHeight;
        character.HeightModifier = yuan_ti_pureblood.HeightModifier;
        character.BaseWeight = yuan_ti_pureblood.BaseWeight;
        character.WeightModifier = yuan_ti_pureblood.WeightModifier;
    }
}
/* Calculates the range of possibility for each character based on character race */
function getCharacteristicRanges() {
    character.MiddleAge = Math.round((character.MaxAge - character.AdultAge) / 4) + character.AdultAge;
    character.OldAge = Math.round((character.MaxAge - character.AdultAge) / 2) + character.AdultAge;
    character.VenerableAge = Math.round((character.MaxAge - character.AdultAge) / (4 / 3)) + character.AdultAge;
    character.MinHeight = character.BaseHeight + getMinRoll(character.HeightModifier);
    character.MaxHeight = character.BaseHeight + getMaxRoll(character.HeightModifier);
    character.MinWeight = character.BaseWeight + (getMinRoll(character.HeightModifier) * getMinRoll(character.WeightModifier));
    character.MaxWeight = character.BaseWeight + (getMaxRoll(character.HeightModifier) * getMaxRoll(character.WeightModifier));
}

/* Returns the minimum roll based on the number of dice rolled */
function getMinRoll(modifier) {
    var result = 0;
    var roll = modifier.split("d");
    var dieCount = parseInt(roll[0]);
    var numSides = parseInt(roll[1]);

    return dieCount * 1;
}

/* returns the maximum value based on the number of dice rolled and the number of sides on the dice rolled. */
function getMaxRoll(modifier) {
    var result = 0;
    var roll = modifier.split("d");
    var dieCount = parseInt(roll[0]);
    var numSides = parseInt(roll[1]);

    return dieCount * numSides;
}

/*Returns the value of a random dice roll */
function rollDice(modifier) {

    var result = 0;
    var roll = modifier.split("d");
    var dieCount = parseInt(roll[0]);
    var numSides = parseInt(roll[1]);

    for (var ii = 0; ii < dieCount; ii++) {
        result += Math.floor(Math.random() * numSides) + 1
    }

    return result;
}

/* Converts height from inches to feet */
function convertInchesToFeet(heightInInches) {
    var feet = Math.floor(heightInInches / 12);
    var inches = heightInInches % 12;

    var height = feet + "\' " + inches + "\"";

    return height;
}

function getRandomAge() {
    return Math.floor(Math.random() * (character.MiddleAge - character.AdultAge)) + character.AdultAge;
}

function getRandomHeight() {
    character.HeightModRoll = rollDice(character.HeightModifier);
    return character.BaseHeight + character.HeightModRoll;
}

function getRandomWeight() {
    return character.BaseWeight + (character.HeightModRoll * rollDice(character.WeightModifier));
}

/* Builds a paragraph listing the randomly generated statistics */
function displayCharacteristics() {
    $("#characteristics").html(
        "<p>Age: " + character.age + " years</p>" +
        "<p>Height: " + convertInchesToFeet(character.height) + "</p>" +
        "<p>Weight: " + character.weight + " lbs.</p>"
    )
}

/* Builds a paragraph listing the range of possibilities for each stat. */
function displayCharacteristicRanges() {
    html = "";

    if (character.Race === "Warforged" || character.Race === "Warforged, Juggernaut") {
        html += "<p>Age Range: 2 - 30 years<br>";
    } else {
        html += "<p>Adult Age: " + character.AdultAge + "<br>";
        html += "Middle Age: " + character.MiddleAge + "<br>";
        html += "Old Age: " + character.OldAge + "<br>";
        html += "Venerable Age: " + character.VenerableAge + "</p><p>";
    }

    html += "Height Range: " + convertInchesToFeet(character.MinHeight) + " - " + convertInchesToFeet(character.MaxHeight) + "<br>";
    html += "Weight Range: " + character.MinWeight + " - " + character.MaxWeight + " lbs.</p>";

    $("#characteristicsRanges").html(html);
    window.location.href = "#calculated-stats";

}