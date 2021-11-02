const { fireship } = require('./fireship');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const promptMessage = `
0 - exit program
1 - fireship

Enter number: `;

const defaultMessage = `
Not a valid input.
`;

rl.question(promptMessage, (input) => {
    switch (input) {
        case '0':
            break;
        case '1':
            fireship();
            break;
        default:
            console.log(defaultMessage);
    }

    rl.close();
});

