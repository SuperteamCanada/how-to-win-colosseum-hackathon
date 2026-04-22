/**
 * Helius Quick Setup for Hackathons
 *
 * This file shows how to set up Helius SDK and use the most
 * valuable features during a hackathon.
 *
 * Install: npm install helius-sdk @solana/web3.js
 */

import { Helius } from "helius-sdk";
import { Connection, PublicKey } from "@solana/web3.js";

// --- 1. Initialize Helius ---
const HELIUS_API_KEY = process.env.HELIUS_API_KEY!;
const helius = new Helius(HELIUS_API_KEY, "devnet");

// Use Helius RPC instead of default (way more reliable for demos)
const connection = new Connection(
  `https://devnet.helius-rpc.com/?api-key=${HELIUS_API_KEY}`
);

// --- 2. Get All Assets for a Wallet (NFTs, Tokens, cNFTs) ---
async function getWalletAssets(walletAddress: string) {
  const assets = await helius.rpc.getAssetsByOwner({
    ownerAddress: walletAddress,
    page: 1,
    limit: 100,
  });

  console.log(`Found ${assets.total} assets:`);
  for (const asset of assets.items) {
    console.log(`  - ${asset.content?.metadata?.name} (${asset.interface})`);
  }

  return assets;
}

// --- 3. Parse Transactions (Human-Readable) ---
async function parseTransaction(signature: string) {
  const [parsed] = await helius.parseTransactions({
    transactions: [signature],
  });

  console.log(`Transaction Type: ${parsed.type}`);
  console.log(`Description: ${parsed.description}`);
  console.log(`Fee: ${parsed.fee} lamports`);
  console.log(`Token Transfers:`, parsed.tokenTransfers);

  return parsed;
}

// --- 4. Get Priority Fee Estimate (Make Txs Land) ---
async function getPriorityFee(serializedTransaction: string) {
  const feeEstimate = await helius.rpc.getPriorityFeeEstimate({
    transaction: serializedTransaction,
    options: {
      recommended: true,
    },
  });

  console.log(
    `Recommended priority fee: ${feeEstimate.priorityFeeEstimate} microlamports`
  );
  return feeEstimate;
}

// --- 5. Search Assets (Find NFTs by Collection, Creator, etc.) ---
async function searchAssets(collectionAddress: string) {
  const assets = await helius.rpc.searchAssets({
    grouping: ["collection", collectionAddress],
    page: 1,
    limit: 50,
  });

  console.log(`Found ${assets.total} assets in collection`);
  return assets;
}

// --- 6. Get Asset Proof (For Compressed NFTs) ---
async function getCompressedNFTProof(assetId: string) {
  const proof = await helius.rpc.getAssetProof({ id: assetId });
  console.log(`Merkle tree: ${proof.tree_id}`);
  console.log(`Proof length: ${proof.proof.length}`);
  return proof;
}

// --- Run Examples ---
async function main() {
  const exampleWallet = "YOUR_WALLET_ADDRESS";

  console.log("=== Helius Hackathon Toolkit ===\n");

  // Uncomment the examples you want to try:
  // await getWalletAssets(exampleWallet);
  // await parseTransaction("YOUR_TX_SIGNATURE");
  // await searchAssets("YOUR_COLLECTION_ADDRESS");

  console.log("\nDone! You're ready to hack.");
}

main().catch(console.error);
