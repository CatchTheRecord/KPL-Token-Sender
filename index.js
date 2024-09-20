const transferKPL = require('./transferKPL');

// mass send function
async function massTransfer(mintToken, walletsAndAmounts) {
    for (const { wallet, amount } of walletsAndAmounts) {
        console.log(`Starting transfer to ${wallet} for amount: ${amount}`);
        await transferKPL(mintToken, wallet, amount);
    }
}

// massTransfer. Write your address massive
const walletsAndAmounts = [
    { wallet: '', amount: 1 },
    { wallet: '', amount: 2 },
    { wallet: '', amount: 0.5 },
    // type any amount of wallets
];

const mintToken = ''; // your mint KPL address

// start mass send
massTransfer(mintToken, walletsAndAmounts);
