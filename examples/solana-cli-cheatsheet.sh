#!/bin/bash
# ===========================================
# Solana CLI Cheatsheet for Hackathons
# ===========================================
# Run these commands to set up your dev environment
# and get hacking on Solana FAST.

set -e

echo "🔧 Solana CLI Hackathon Setup"
echo "=============================="

# --- STEP 1: Configure for Devnet ---
echo ""
echo "→ Setting up devnet..."
solana config set --url devnet
solana config get

# --- STEP 2: Create or Use a Wallet ---
echo ""
echo "→ Wallet setup..."

WALLET_PATH="$HOME/.config/solana/hackathon-wallet.json"

if [ ! -f "$WALLET_PATH" ]; then
    echo "  Creating new hackathon wallet..."
    solana-keygen new -o "$WALLET_PATH" --no-bip39-passphrase --force
else
    echo "  Using existing hackathon wallet."
fi

solana config set --keypair "$WALLET_PATH"
echo "  Address: $(solana address)"
echo "  Balance: $(solana balance)"

# --- STEP 3: Airdrop SOL ---
echo ""
echo "→ Requesting airdrop..."
solana airdrop 2 || echo "  Airdrop failed (rate limited). Use https://faucet.solana.com"
echo "  Balance: $(solana balance)"

# --- STEP 4: Verify Setup ---
echo ""
echo "→ Environment check:"
echo "  Solana CLI: $(solana --version)"
echo "  Network:    $(solana config get | grep 'RPC URL' | awk '{print $3}')"
echo "  Wallet:     $(solana address)"
echo "  Balance:    $(solana balance)"

echo ""
echo "=============================="
echo "You're ready to hack! Key commands:"
echo ""
echo "  solana balance                    # Check SOL balance"
echo "  solana airdrop 2                  # Get more devnet SOL"
echo "  solana logs <PROGRAM_ID>          # Stream program logs"
echo "  solana program deploy <FILE>.so   # Deploy a program"
echo "  solana account <ADDRESS>          # Inspect any account"
echo "  solana confirm <TX_SIG> -v        # Debug a transaction"
echo "  solana transfer <ADDR> <AMOUNT>   # Send SOL"
echo ""
echo "  spl-token create-token            # Create SPL token"
echo "  spl-token mint <MINT> <AMOUNT>    # Mint tokens"
echo "  spl-token transfer <MINT> <AMT> <TO>  # Send tokens"
echo ""
echo "=============================="
