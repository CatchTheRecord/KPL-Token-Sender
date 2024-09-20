const transferKPL = require('./transferKPL');

// Функция для массовой рассылки
async function massTransfer(mintToken, walletsAndAmounts) {
    for (const { wallet, amount } of walletsAndAmounts) {
        console.log(`Starting transfer to ${wallet} for amount: ${amount}`);
        await transferKPL(mintToken, wallet, amount);
    }
}

// Пример вызова massTransfer с массивом адресов кошельков и сумм
const walletsAndAmounts = [
    { wallet: 'CEb8NE6YZdUZPW22gGRJjHupYoQg3P7aAByr6HEebKNg', amount: 1 },
    { wallet: '5LHzPrir7gkv69TwjkRb7EirFySAx9yUxcV6atbWu2xd', amount: 2 },
    { wallet: 'FFvoL7yC2fcqd1YtYT5Ng2mkWvbbJgGBnCoBqnkcayzD', amount: 0.5 },
    // Добавьте столько кошельков, сколько вам нужно
];

const mintToken = 'n3Rep7GRh3jgkGXaULNu8WzfuwCC9Rcrv82mxzJMnnH'; // Замените на ваш адрес токена

// Запускаем массовую рассылку
massTransfer(mintToken, walletsAndAmounts);
