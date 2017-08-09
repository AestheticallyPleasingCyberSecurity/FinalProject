var wordsList = [];

function init() {
  // Load the words from the dictionary text file to wordsList
  var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";
  $.get(wordsFile, function(data) {
    document.getElementById("btnSubmit").disabled = true;
    wordsList = data.split('\n');
    document.getElementById("btnSubmit").disabled = false;
  });
}

window.onload = init;


function changepw(pw){ //returns a string
  pw = pw.replace(/4/g,'a');
  pw = pw.replace(/3/g,'e');
  pw = pw.replace(/@/g,'a');
  pw = pw.replace(/0/g,'o');
  pw = pw.replace(/1/g,'l');
  pw = pw.replace(/$/g,'s');
  return pw;
}

/* ADD YOUR CODE BELOW */

function checkPassword() {
//get what the user input as their password
//in. html, the input box has id=pw
var input = document.getElementById("pw").value; //h4lo

var pwArray = Array.from(input);
console.log(pwArray);

  //making it check that it checks the letter before so its not the same
  for(var index = 0; index < pwArray.length - 1; index++){
    if(pwArray[index]==pwArray[index+1])
      alert('This password is weak, try again.');
  }



for (var index = 0; index < pwArray.length; index++) {
  if(isNaN(pwArray[index]) == false){
    pwArray[index] = Number(pwArray[index]);
  }
}

// ["a", "p", "p", "l", "e", "1", "2", "3"]
// ["a", "p", "p", "l", "e", 1, 2, 3]

// check for consecutive numbers
for (var index = 0; index < pwArray.length - 1; index++) {
  if(isNaN(pwArray[index]) == false && isNaN(pwArray[index+1]) == false)
  {
    //consecutive testing mreh
    var num1 = pwArray[index];
    var num2 = pwArray[index+1];

      //case 1: num1 < num2 in order for them to be consecutive, num1+1 = num2
    // this is testing if 12345 is happening
    if(num1 < num2)
    {
      if(num1 + 1 == num2)
      {
        alert("This password is weak, try again.");
        return;
      }
    }

    //case 2: num1 > num2, in order for them to be consecutive, num1-1 = num2
    //testing if 54321
    if(num1 > num2)
    {
      if(num1-1 == num2)
      {
        alert("This password is weak, try again.");
        return;
      }
    }
  }
}

for (var index = 0; index < input.length; index++) {
//making the human code into computer code
   var first = input.charCodeAt(index);
   //checking if it's a capital letter
   if (first > 64 && first < 91)
   {
     //making the computer code into human code
     var two = String.fromCharCode(first);
     //making computer code capital to lower case
     var three = String.fromCharCode(first + 32);
     //replacing capital to lower case letter
     input = input.replace(two, three)
   }
}

input= changepw(input); //halo


//loop through all of the words in the word list
//earlier, wordlist
for (var index = 0; index < wordsList.length; index++) {
//warm if their password matches a word from the list
if(wordsList[index] == input) {
alert("That is a weak passowrd! it's an English word");
return;//stop this function as soon as i find this match
}
}

//after th for loop finishes if it wasnt an english word tell them their password is safe
if(wordsList[index]);
alert("Your password is great!");
}
