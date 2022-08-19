const nameFormatter = (name) => {
	if (name.length > 2) {
		name = name.split(" ");
		for (let i = 0; i < name.length; i++) {
			name[i] = capitalizeWord(name[i]);
		}
		name = name.join(" ");
	}
	return name;
};

const capitalizeWord = (word) => {
	word = word.split("");
	word[0] = word[0].toUpperCase();
	for (let i = 1; i < word.length; i++) {
		word[i] = word[i].toLowerCase();
	}
	word = word.join("");
	return word;
};

module.exports = nameFormatter;
