
# KPL Token Sender

This project is a Node.js script that allows you to send KPL tokens to multiple Koii wallets in one go. It automates the process of transferring tokens, making it easy to distribute KPL tokens to a list of wallet addresses.

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
