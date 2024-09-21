# KPL Token Sender

This project is a Node.js script that allows you to send KPL tokens to multiple Koii network wallets in one go. It automates the process of transferring tokens, making it easy to distribute KPL tokens to a list of wallet addresses.

## Features

- Transfer KPL tokens to multiple wallets in a single run.
- Customizable wallet addresses and token amounts.
- Retries failed transfers up to 3 times for robustness.

## Requirements

Before you begin, ensure you have the following:

1. **Node.js** and **npm** installed on your machine.
2. **Koii Wallet** secret key (stored as an environment variable).
3. **KPL Token Mint Address**.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/CatchTheRecord/KPL-Token-Sender.git
    cd KPL-Token-Sender
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Edit your `.env` file in the root directory to store your secret key:

    ```bash
    touch .env
    ```

    Inside the `.env` file, add your Koii wallet's secret key like this:

    ```
    SECRET_KEY=[your Koii wallet secret key in JSON format]
    ```

## Usage

1. Open the `index.js` file and edit the following:
    - Add your **mint KPL token address** to the `mintToken` variable.
    - Update the `walletsAndAmounts` array with the wallet addresses and the amounts of KPL tokens you want to send.

    Example:

    ```javascript
    const walletsAndAmounts = [
        { wallet: 'ExampleWalletAddress1', amount: 1 },
        { wallet: 'ExampleWalletAddress2', amount: 2 },
        { wallet: 'ExampleWalletAddress3', amount: 0.5 },
    ];
    const mintToken = 'YourKPLMintTokenAddressHere';
    ```

2. Run the script:

    ```bash
    node index.js
    ```

3. The script will start transferring tokens to the listed wallets. It will retry up to 3 times if any transfer fails.

## Notes

- Ensure your wallet has enough KPL and Koii tokens to cover all transfers and fees.

## Example .env File

Your `.env` file should contain you Koii System Key 
