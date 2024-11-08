"use strict";
const countWordOccurrences = (sentences, word) => {
    const tolowerSentence = sentences.toLowerCase();
    const tolowerWord = word.toLowerCase();
    let count = 0;
    const words = tolowerSentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i] === tolowerWord) {
            count++;
        }
    }
    return count;
};
const sentence = "I love typescript typescript typescript";
const words = 'typescript';
console.log(countWordOccurrences(sentence, words));
