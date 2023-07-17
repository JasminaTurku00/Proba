let userInput: unknown;
let userName: string;

userInput=5;
userInput= 'Max';
if(typeof userInput === 'string'){
    userName= userInput;
}

function generateError(message: string, code: number): never{ //ona nikad ne vraca return, ona vraca samo ovaj throw
    throw{ message:message, errorCode: code}
}

const result = generateError('An error occurred', 500);
console.log(result)