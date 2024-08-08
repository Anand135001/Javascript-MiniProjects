const questions = [
    {
        'QUE': 'Which of the following is a markup language ?',
         'a' : 'HTML',
         'b' : 'Rust',
         'c' : 'Golang',
         'd' : 'SQL',
     'Correct' : 'a'
     },
     
     {
       'QUE': 'What is the purpose of the bind() method in JavaScript?',
         'a': 'To create a new function with a different context',
         'b': 'To create a new function with the same context',
         'c': 'To change the context of an existing function',
         'd': 'To delete a function',
         'Correct':'a'
     },

     {
       'QUE': 'What is the purpose of the includes() method in JavaScript?',
        'a': 'To check if a value is present in an array',
        'b': 'To check if a key is present in an object',
        'c': 'To check if a substring is present in a string',
        'd': 'To check if a value is present in a set',
        'Correct': 'a'
     }

]

let index = 0;
const QuesBox = document.getElementById ('QuesBox');
const  OptionInputs = document.querySelectorAll('.Options');
let total = questions.length;
let right  = 0;
let wrong  = 0;

const loadfunction = () => {
     if(index === total){
      return endQuiz();
     }
     reset();
    const data = questions[index];
    console.log(data);
     QuesBox.innerText = `${index+1}: ${data.QUE}`;
     OptionInputs[0].nextElementSibling.innerText = `A: ${data.a}`;
     OptionInputs[1].nextElementSibling.innerText = `B: ${data.b}`;
     OptionInputs[2].nextElementSibling.innerText = `C: ${data.c}`;
     OptionInputs[3].nextElementSibling.innerText = `D: ${data.d}`;
}

const submitAns = () => {
    const data = questions[index];
    const ans = getans();
    if( ans === data.Correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadfunction();
}

const getans = () =>{
    let answer;
    OptionInputs.forEach( (input) => {
           if(input.checked){
             answer = input.value;
           }
        }
    )
    return answer;
}

const reset = () => {
    OptionInputs.forEach(
        (input) =>{
            input.checked = false;
        }
    )
}
const endQuiz = () =>{
    document.getElementById('box').innerHTML = `<h2> Quiz end </h2>
    <h2> ${right} / ${total} </h2>`;
}

loadfunction(); 