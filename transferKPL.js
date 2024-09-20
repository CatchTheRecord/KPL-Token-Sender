const { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey } = require('@solana/web3.js');
const { getOrCreateAssociatedTokenAccount, transfer } = require('@solana/spl-token');
require('dotenv').config();

async function transferKPL(mintToken, targetWallet, amount) {
    const SECRET_KEY = JSON.parse(process.env.SECRET_KEY);
    const connection = new Connection('https://testnet.koii.network', 'confirmed');
    
    const fromWallet = Keypair.fromSecretKey(new Uint8Array(SECRET_KEY));
    const mint = new PublicKey(mintToken);
    const toWallet = new PublicKey(targetWallet);
    
    let attempt = 0;
    const maxRetries = 3;

    while (attempt < maxRetries) {
        try {
            const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
                connection, fromWallet, mint, fromWallet.publicKey
            );

            const toTokenAccount = await getOrCreateAssociatedTokenAccount(
                connection, fromWallet, mint, toWallet
            );

            const transferAmount = amount;
            const signature = await transfer(
                connection, fromWallet, fromTokenAccount.address, toTokenAccount.address,
                fromWallet.publicKey, transferAmount * LAMPORTS_PER_SOL
            );

            console.log('Transfer successful:', signature);
            return signature;
        } catch (error) {
            attempt++;
            console.error(`Transfer attempt ${attempt} failed. Error:`, error);

            if (attempt >= maxRetries) {
                console.error('All transfer attempts failed.');
                return null;
            } else {
                console.log(`Retrying... (${attempt}/${maxRetries})`);
            }
        }
    }
}

module.exports = transferKPL;
