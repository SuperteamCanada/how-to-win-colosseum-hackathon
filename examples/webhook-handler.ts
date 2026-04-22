/**
 * Helius Webhook Handler (Next.js API Route)
 *
 * Drop this in: app/api/webhook/route.ts
 *
 * This receives real-time notifications from Helius when
 * transactions hit your program. Perfect for:
 * - Updating a leaderboard
 * - Sending notifications
 * - Triggering downstream actions
 */

import { NextRequest, NextResponse } from "next/server";

// Types for Helius enhanced webhook payload
interface HeliusWebhookPayload {
  accountData: Array<{
    account: string;
    nativeBalanceChange: number;
    tokenBalanceChanges: Array<{
      mint: string;
      rawTokenAmount: { decimals: number; tokenAmount: string };
      tokenAccount: string;
      userAccount: string;
    }>;
  }>;
  description: string;
  events: Record<string, unknown>;
  fee: number;
  feePayer: string;
  nativeTransfers: Array<{
    amount: number;
    fromUserAccount: string;
    toUserAccount: string;
  }>;
  signature: string;
  slot: number;
  source: string;
  timestamp: number;
  tokenTransfers: Array<{
    fromTokenAccount: string;
    fromUserAccount: string;
    mint: string;
    toTokenAccount: string;
    toUserAccount: string;
    tokenAmount: number;
    tokenStandard: string;
  }>;
  type: string;
}

export async function POST(request: NextRequest) {
  try {
    const payload: HeliusWebhookPayload[] = await request.json();

    for (const tx of payload) {
      console.log(`[Webhook] ${tx.type}: ${tx.description}`);
      console.log(`  Signature: ${tx.signature}`);
      console.log(`  Fee payer: ${tx.feePayer}`);
      console.log(`  Fee: ${tx.fee} lamports`);

      // Handle different transaction types
      switch (tx.type) {
        case "TRANSFER":
          handleTransfer(tx);
          break;
        case "SWAP":
          handleSwap(tx);
          break;
        case "NFT_MINT":
          handleNFTMint(tx);
          break;
        default:
          // Your custom program transactions show up here
          handleCustomTransaction(tx);
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("[Webhook] Error:", error);
    return NextResponse.json(
      { error: "Failed to process webhook" },
      { status: 500 }
    );
  }
}

function handleTransfer(tx: HeliusWebhookPayload) {
  for (const transfer of tx.nativeTransfers) {
    console.log(
      `  SOL Transfer: ${transfer.amount / 1e9} SOL from ${transfer.fromUserAccount} to ${transfer.toUserAccount}`
    );
  }
  for (const transfer of tx.tokenTransfers) {
    console.log(
      `  Token Transfer: ${transfer.tokenAmount} ${transfer.mint} to ${transfer.toUserAccount}`
    );
  }
}

function handleSwap(tx: HeliusWebhookPayload) {
  console.log(`  Swap detected on ${tx.source}`);
  // Track swaps, update price feeds, etc.
}

function handleNFTMint(tx: HeliusWebhookPayload) {
  console.log(`  NFT minted!`);
  // Update gallery, send notification, etc.
}

function handleCustomTransaction(tx: HeliusWebhookPayload) {
  console.log(`  Custom transaction: ${tx.type}`);
  // This is where your program's transactions show up
  // Parse accountData to find your program's state changes
}
