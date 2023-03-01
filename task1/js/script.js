function convertCaseAsInSentence(str) {//1.1 добавить проверку что это строка
	return str.at(0).toUpperCase() + str.toLowerCase().substring(1,);
}
function correctSpaces(str) {//1.2
	let spaceAfterPun = /([,.;:?!])[^ ]/g;
	let regexp = / ([,.;:?!])/g;
	let result = str.replace(regexp, '$1 ').trim();
	result = str.replace(regexp1, '$1').trim();
	result = str.replace(/ +/g, ' ').trim();
	return result;
}
function countNumberOfWorlds(str) {//1.3
	let arrayOfWords = str.split(' ');
	return arr.length;
}
function countUniqueWords(str) {//1.4
	let wordsMap = new Map();
	let arrayOfWords = str.split(' ');
	for (word in arrayOfWords) {
		if (!(wordsMap.has(word))) {
			wordsMap.set(word, 0)
		} else {
			wordsMap.set(word, ++map.get(word))
		}
	}
}