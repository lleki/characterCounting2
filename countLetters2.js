function countLetters(word){
  var count = {};
   //go through string to find all unique chars
  for( var x = 0; x < word.length ; x++){
     var letter = word[x];
    if(letter !== " "){
      if(count[letter] == undefined){
        count[letter] = [x];
      }else{
        count[letter].push(x);
      }
    }
  }
   return count;
}
 console.log(countLetters("hello there"));