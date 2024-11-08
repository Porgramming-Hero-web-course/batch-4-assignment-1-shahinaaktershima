const countWordOccurrences=(sentences:string,word:string):number=>{
    const tolowerSentence=sentences.toLowerCase();
    const tolowerWord=word.toLowerCase();
    let count:number=0;
    const words = tolowerSentence.split(" ");
    for(let i=0;i<words.length;i++){
        if(words[i]===tolowerWord){
             count++;
        }
    }
    return count
}

const sentence:string="I love typescript typescript typescript";
const words:string='typescript'
console.log(countWordOccurrences(sentence,words))