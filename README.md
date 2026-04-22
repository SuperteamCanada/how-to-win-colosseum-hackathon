# How to Win a Colosseum Hackathon

A practical, no-BS guide to shipping a winning Solana project at [Colosseum](https://www.colosseum.org/) hackathons. Built by [Superteam Canada](https://x.com/superteamcan).

> **TL;DR**: The teams that win don't write the most code. They ship something real users can touch. This guide gives you the tools and patterns to do exactly that.

> **Current**: [Frontier Hackathon](https://colosseum.com/frontier) (April 6 - May 11, 2026) - $2.5M+ deployed into select winning founders. Grand Champion: $30K USDC. Top 20: $10K each. Winners join Colosseum's accelerator with $250K funding.

---

## Table of Contents

- [What Colosseum Actually Is](#what-colosseum-actually-is)
- [The Winning Formula](#the-winning-formula)
- [Submission Requirements](#submission-requirements)
- [Superteam Canada Resources](#superteam-canada-resources)
- [Tool #1: solana.new (Scaffold in 60 Seconds)](#tool-1-solanannew--scaffold-in-60-seconds)
- [Tool #2: Helius CLI (Your Solana Backend)](#tool-2-helius-cli--your-solana-backend)
- [Tool #3: Solana CLI (Your Swiss Army Knife)](#tool-3-solana-cli--your-swiss-army-knife)
- [Hackathon Timeline Blueprint](#hackathon-timeline-blueprint)
- [Common Mistakes That Lose Hackathons](#common-mistakes-that-lose-hackathons)
- [Winning Project Patterns](#winning-project-patterns)
- [Past Winners & What They Did Right](#past-winners--what-they-did-right)
- [Resources](#resources)

---

## What Colosseum Actually Is

Colosseum isn't a weekend hackathon. It's a **multi-week online competition** that doubles as a startup launchpad. It combines three pillars:

1. **Hackathon** - Build and submit a working Solana project
2. **Accelerator** - Winners get accepted into a structured program
3. **Venture Fund** - Select founders receive $250K+ in funding

Previous hackathons have seen 9,000+ participants and 1,500+ submissions. The scale is massive, but the bar for winning is clear: **ship something real**.

### Prize Structure (Frontier Hackathon)

| Prize | Amount |
|-------|--------|
| Grand Champion | $30,000 USDC |
| Next 20 Best Startups | $10,000 USDC each |
| University Award | $10,000 USDC |
| Public Goods Award | $10,000 USDC |
| Accelerator Entry | $250,000 funding |

---

## The Winning Formula

Every Colosseum winner shares three traits:

1. **Working demo** > perfect architecture
2. **Clear problem statement** > impressive tech
3. **Deployed on devnet/mainnet** > localhost screenshots

Judges want to see:
- A real problem being solved
- A working product (not a pitch deck)
- Smart use of Solana's strengths (speed, low cost, composability)
- A team that can ship
- **Long-term startup thinking**, not a weekend hack

Average winning team: **3+ people** with both technical and non-technical members (design, product, marketing).

---

## Submission Requirements

Every Colosseum submission needs:

1. **GitHub repository** - Code must be created during the hackathon
2. **Pitch video** (max 3 minutes) - Team background, problem, target user
3. **Technical demo video** - Implementation details, Solana integration, architecture
4. **Optional**: Weekly video updates (increases visibility with judges)

> **The pitch video is the first thing judges see.** If they can't understand your project in 60 seconds, you've already lost. Script it, rehearse it, nail it.

---

## Superteam Canada Resources

[Superteam Canada](https://superteamcan.notion.site/) runs dedicated hackathon support for the Frontier Hackathon. Use these **before you write a single line of code**.

### Events & Build Sessions

| Event | Dates | What You Get |
|-------|-------|-------------|
| [Kickoff Week Build Station](https://luma.com/Kickoff-week) | April 13 - 17 | In-person co-working, mentorship, team formation |
| [Remote Build](https://luma.com/Remote-Build) | April 18 - May 6 | Structured remote sessions with check-ins |
| [Final Sprint Build Station](https://luma.com/Final-Sprint) | May 7 - 11 | Final push, demo prep, submission support |

### Office Hours & Workshops

- **Office Hours** with Fibonacci & Supersimon - [Book on Calendly](https://calendly.com/fibonacci-superteam/stca-office-hours)
- **Pitching Masterclass** with DePitch Academy - nail your 3-minute pitch video
- **UX for Devs + Value Prop** workshops - make your demo actually make sense to judges
- [All workshop recordings](https://youtube.com/playlist?list=PLWNfKcElC8kXMpegVS9JgX7VAPOmG6Oj5&si=uTHwjvkaYjfj1I0y) on YouTube

### Cheat Sheets & Templates

- [Hackathon Cheat Sheet](https://superteamcan.notion.site/cheat-sheet) - Step-by-step guide from idea to submission
- [Pitch Video Template](https://www.loom.com/share/85574aed295c47cba29b2fba7b2d76da?sid=693a46b9-83a6-4529-a452-deddd2a3dd79) - Loom template so you don't start from blank
- [Colosseum Tips](https://superteamcan.notion.site/Colosseum-Tips-1ae380b97c4681cabad4e7f85ae0af7b) - Judging criteria + what judges actually look for
- [Past Winner Pitches](https://docs.google.com/spreadsheets/d/19BzDy0DoJP3qNlK66qlmzYc8qh4H-zpf3LGialda-a0/edit?gid=0#gid=0) - Study what worked

### Resource Library

- [All Resources](https://superteamcan.notion.site/allresources) - Getting started, product, positioning, marketing, pitching
- [Developer Tools](https://build.superteam.fun/developer-tools) - Curated Solana dev tools
- [Hackathon Tools](https://hackathon.superteam.fun/) - Everything you need in one place
- [Frontier Sponsored Resources](https://colosseum.com/frontier/resources) - Free credits and tools from sponsors
- [Spark North](https://superteam.ca/spark-north) - Pre-accelerator program (Frontier cohort running now)

### Community

- [Canada Hackathon Telegram](https://t.me/+v8U0ieEc5CI5M2Mx) - Peer support, updates, team matching
- [Colosseum Discord](http://colosseum.com/discord) - Official hackathon comms
- [Events Calendar](https://lu.ma/superteamca) - All upcoming events

> **Pro tip**: The office hours and workshops are the highest-ROI hours of your hackathon. A 30-minute session with a mentor can save you 8 hours of building the wrong thing.

---

## Tool #1: solana.new / Scaffold in 60 Seconds

[`create-solana-dapp`](https://github.com/solana-foundation/create-solana-dapp) is the official scaffolding tool. Visit **solana.new** in your browser or run it from the terminal.

### Quick Start

```bash
npx create-solana-dapp my-hackathon-project
```

You'll be prompted to pick a template. Here's what to choose:

### Available Templates

| Template | Best For | Includes |
|----------|----------|----------|
| `nextjs-anchor` | **Most hackathon projects** | Next.js frontend + Anchor program |
| `react-vite-anchor` | Lighter frontend | React + Vite + Anchor |
| `kit-expo-minimal` | Mobile dApps | Expo + Solana Kit |
| `commerce-kit-store` | Commerce/payments | Full store template |
| `lazorkit-starter-next` | Passkey wallets | Passwordless auth with LazorKit |
| `merkle-airdrop` | Token distribution | Merkle tree airdrop system |
| `solana-blinks-axum` | Actions/Blinks | Solana Actions with Rust backend |
| `zk-compression-airdrop` | ZK compression | Compressed token airdrop |
| `x402-template` | Paid APIs | x402 payment protocol |

> **Hackathon edge**: The community templates like `zk-compression-airdrop`, `solana-blinks-axum`, and `lazorkit-starter-next` use cutting-edge Solana features that impress judges. Don't just build another swap UI.

### Recommended: The Minimal Start

```bash
# Fastest path to a working dApp
npx create-solana-dapp my-project --template nextjs-anchor --bun

cd my-project

# Install deps
bun install

# Start the Anchor program (build + deploy to localnet)
cd anchor
anchor build
anchor deploy

# Start the frontend
cd ../web
bun dev
```

### What You Get

```
my-project/
├── anchor/           # Solana program (Rust + Anchor framework)
│   ├── programs/     # Your on-chain programs
│   ├── tests/        # Integration tests
│   └── Anchor.toml   # Anchor config
├── web/              # Next.js frontend
│   ├── components/   # Wallet connection, program interaction
│   └── app/          # Pages
└── package.json
```

### Pro Tips

- **Use `--bun`** for faster installs at the hackathon
- The template includes wallet adapter setup - don't waste time configuring this manually
- Anchor tests are your friend - write them first, they're faster than clicking through UI
- Check your Anchor/Solana versions match: `npx create-solana-dapp --list-versions`

---

## Tool #2: Helius CLI / Your Solana Backend

[Helius](https://helius.dev) provides enhanced Solana RPC, webhooks, and APIs. The CLI lets you set up an account and get API keys in seconds.

### Install & Setup

```bash
# Install globally
npm install -g helius-cli

# Generate a keypair (needed for account creation)
helius keygen

# Create a free account (no credit card, no web signup)
# Note: wallet needs ~0.001 SOL + 1 USDC to register
helius signup

# List your projects and get API keys
helius projects
helius apikeys <project-id>

# Get your RPC endpoint URLs
helius rpc <project-id>
```

> The Helius CLI has **95+ commands** across 14 categories. Every command supports `--json` for scripting. Run `helius --help` to explore.

### What Helius Gives You (Free Tier)

| Feature | What It Does | Why It Matters |
|---------|-------------|----------------|
| **Enhanced RPC** | Faster, more reliable Solana RPC | Don't get rate-limited during your demo |
| **DAS API** | Digital Asset Standard API | Query NFTs, compressed NFTs, token metadata in one call |
| **Webhooks** | Real-time transaction notifications | React to on-chain events without polling |
| **Transaction Parsing** | Human-readable transaction history | Show users what actually happened |
| **Priority Fee API** | Optimal transaction fees | Transactions that actually land |

### Hackathon Power Moves with Helius

#### 1. Get Enhanced RPC (Replace Default)

```typescript
// In your Anchor.toml or frontend config
// Replace: https://api.devnet.solana.com
// With:    https://devnet.helius-rpc.com/?api-key=YOUR_KEY

import { Connection } from "@solana/web3.js";
const connection = new Connection(
  `https://devnet.helius-rpc.com/?api-key=${process.env.HELIUS_API_KEY}`
);
```

#### 2. Fetch All NFTs/Tokens for a Wallet (One Call)

```typescript
// DAS API - replaces dozens of RPC calls
const response = await fetch(
  `https://devnet.helius-rpc.com/?api-key=${process.env.HELIUS_API_KEY}`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: "hackathon",
      method: "getAssetsByOwner",
      params: {
        ownerAddress: walletAddress,
        page: 1,
        limit: 100,
      },
    }),
  }
);
```

#### 3. Set Up Webhooks (React to On-Chain Events)

```typescript
// Listen for transactions involving your program
const webhook = await fetch("https://api.helius.xyz/v0/webhooks", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.HELIUS_API_KEY}`,
  },
  body: JSON.stringify({
    webhookURL: "https://your-app.vercel.app/api/webhook",
    accountAddresses: ["YourProgramId..."],
    transactionTypes: ["Any"],
    webhookType: "enhanced",
  }),
});
```

#### 4. Parse Transactions (Human-Readable)

```typescript
// Turn raw transaction data into something readable
const parsed = await fetch(
  `https://api.helius.xyz/v0/transactions/?api-key=${process.env.HELIUS_API_KEY}`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ transactions: [txSignature] }),
  }
);
// Returns: type, description, fee, accounts involved, token transfers
```

### Helius SDK (TypeScript)

```bash
npm install helius-sdk
```

```typescript
import { Helius } from "helius-sdk";

const helius = new Helius("your-api-key");

// Get all assets
const assets = await helius.rpc.getAssetsByOwner({
  ownerAddress: "wallet...",
  page: 1,
});

// Parse a transaction
const parsed = await helius.parseTransactions({
  transactions: ["tx-sig..."],
});

// Get priority fee estimate
const fee = await helius.rpc.getPriorityFeeEstimate({
  transaction: serializedTx,
  options: { recommended: true },
});
```

---

## Tool #3: Solana CLI / Your Swiss Army Knife

The Solana CLI (v3.x) is essential for wallet management, airdrops, deploys, and debugging.

### Install

```bash
# Install Solana CLI
sh -c "$(curl -sSfL https://release.anza.xyz/stable/install)"

# Verify
solana --version
```

### Essential Commands Cheatsheet

#### Wallet Management

```bash
# Generate a new keypair
solana-keygen new -o ~/.config/solana/hackathon-wallet.json

# Set it as default
solana config set --keypair ~/.config/solana/hackathon-wallet.json

# Show your address
solana address

# Check balance
solana balance
```

#### Network Configuration

```bash
# Switch to devnet (use this for hackathons!)
solana config set --url devnet

# Or use Helius RPC for better reliability
solana config set --url https://devnet.helius-rpc.com/?api-key=YOUR_KEY

# Check current config
solana config get

# Available networks
# devnet    → https://api.devnet.solana.com (free SOL, resets periodically)
# testnet   → https://api.testnet.solana.com
# mainnet   → https://api.mainnet-beta.solana.com
# localhost  → http://localhost:8899
```

#### Getting SOL (Devnet)

```bash
# Airdrop 2 SOL (max per request on devnet)
solana airdrop 2

# Airdrop to a specific address
solana airdrop 2 <ADDRESS>

# If airdrop is rate-limited, use the faucet:
# https://faucet.solana.com
```

#### Program Deployment

```bash
# Build your Anchor program
anchor build

# Deploy to devnet
anchor deploy --provider.cluster devnet

# Or deploy with solana CLI directly
solana program deploy target/deploy/my_program.so

# Check deployed program
solana program show <PROGRAM_ID>

# Check program authority
solana program show --programs --keypair <KEYPAIR>
```

#### Account Inspection

```bash
# View any account's data
solana account <ADDRESS>

# View account in JSON
solana account <ADDRESS> --output json

# Check transaction details
solana confirm <TX_SIGNATURE> -v

# Stream logs from your program
solana logs <PROGRAM_ID>
```

#### Token Operations (SPL)

```bash
# Install spl-token CLI
cargo install spl-token-cli

# Create a new token
spl-token create-token

# Create a token account
spl-token create-account <TOKEN_MINT>

# Mint tokens
spl-token mint <TOKEN_MINT> 1000

# Transfer tokens
spl-token transfer <TOKEN_MINT> 100 <RECIPIENT>

# Check token balance
spl-token balance <TOKEN_MINT>

# List all token accounts
spl-token accounts
```

#### Debugging

```bash
# Stream all logs for your program (extremely useful)
solana logs <PROGRAM_ID> --url devnet

# Decode a transaction
solana confirm <TX_SIG> -v --url devnet

# Check recent blockhash (useful for debugging failed txs)
solana block-height

# Check cluster status
solana cluster-version

# Get recent priority fees (help transactions land)
solana recent-prioritization-fees
```

---

## Hackathon Timeline Blueprint

### Day 0 (Before the Hackathon)

- [ ] Install tools: Solana CLI, Anchor, Node.js, Rust
- [ ] Set up Helius account: `npm i -g helius-cli && helius signup`
- [ ] Generate devnet wallet: `solana-keygen new`
- [ ] Airdrop SOL: `solana airdrop 2`
- [ ] Practice scaffolding: `npx create-solana-dapp test-app`
- [ ] Read the hackathon tracks/themes
- [ ] Form your team (1 frontend, 1 smart contract, 1 product/design)

### Hours 0-4: Foundation

```bash
# 1. Scaffold the project
npx create-solana-dapp my-project --template nextjs-anchor --bun

# 2. Set up Helius RPC
helius project create hackathon
# Copy API key to .env

# 3. Configure Solana CLI
solana config set --url devnet
solana airdrop 2

# 4. Verify everything works
cd my-project && bun install
cd anchor && anchor build && anchor test
cd ../web && bun dev
```

### Hours 4-20: Build

- Write your Anchor program (keep it simple - 2-3 instructions max)
- Build the frontend (wallet connect, 1-2 key user flows)
- Deploy to devnet every 2 hours (catch issues early)
- Write Anchor tests as you go

### Hours 20-36: Polish

- Deploy final version to devnet
- Build the demo flow (script exactly what you'll show)
- Record a backup video demo
- Write the submission (problem, solution, how it works)
- Add Helius webhooks/parsing for real-time features

### Hours 36-48: Ship

- Final deploy and test
- Submit on Colosseum
- Prepare 3-minute pitch
- Sleep (seriously)

---

## Common Mistakes That Lose Hackathons

### 1. Building Too Much
**Wrong**: "Let's build a full DEX with limit orders, margin trading, and governance"
**Right**: "Let's build one innovative swap mechanism and nail the UX"

### 2. Ignoring the Demo
Your demo IS your submission. Judges spend 3-5 minutes per project. If they can't understand what you built in 60 seconds, you lose.

### 3. Not Deploying to Devnet
Localhost demos fail. Network issues happen. Deploy early, deploy often.

### 4. Reinventing the Wheel
Don't write your own wallet adapter. Don't build your own RPC infrastructure. Use `create-solana-dapp` and Helius. Spend your time on what makes your project unique.

### 5. No Clear Problem Statement
"We're building a decentralized..." is not a problem statement. "Creators lose 30% to middlemen when selling digital art" is.

### 6. Not Using Priority Fees
Your demo transaction hangs during judging = death. Use Helius priority fee estimates.

---

## Winning Project Patterns

### Pattern 1: The "Obviously Useful" App
Build something people would actually use today. Payment splits, subscription management, event ticketing. Simple problem, clean solution.

### Pattern 2: The DeFi Primitive
Build one novel financial mechanism. A new bonding curve, a unique liquidation mechanism, a creative use of compressed NFTs. Judges love innovation at the protocol level.

### Pattern 3: The Infrastructure Play
Build tools that other developers need. A better explorer, a testing framework, a deployment pipeline. Show you understand the ecosystem's pain points.

### Pattern 4: The "Solana-Only" Product
Build something that's only possible on Solana. Sub-second settlement, micro-transactions, compressed state. Show why Solana matters.

---

## Past Winners & What They Did Right

| Project | Prize | What They Built | Why They Won |
|---------|-------|-----------------|--------------|
| **Unruggable** | Grand Champion ($30K) | Hardware wallet + companion app | Solved a real security problem with polished UX |
| **Capitola** | First Prize ($25K) | Prediction markets meta-aggregator | Novel DeFi primitive with clear market need |
| **Pythia** | University Award | Research/data tool | Strong technical execution from student team |
| **Samui Wallet** | Public Good Award | Wallet infrastructure | Built something the whole ecosystem benefits from |

**Common threads**: Clear problem statement, working demo, professional pitch video, genuine Solana integration (not just "on Solana" for the sake of it).

Browse all past projects: [arena.colosseum.org/projects/explore](https://arena.colosseum.org/projects/explore)
Hall of fame: [arena.colosseum.org/hackathon/hall-of-fame](https://arena.colosseum.org/hackathon/hall-of-fame)

---

## Resources

### Official Docs
- [Solana Developer Docs](https://solana.com/docs)
- [Anchor Framework](https://www.anchor-lang.com/)
- [Helius Docs](https://docs.helius.dev/)
- [Colosseum](https://www.colosseum.org/)

### Key Libraries
- [`@solana/web3.js`](https://github.com/solana-labs/solana-web3.js) - Core Solana JS SDK
- [`@solana/wallet-adapter`](https://github.com/solana-labs/wallet-adapter) - Wallet connection
- [`helius-sdk`](https://www.npmjs.com/package/helius-sdk) - Helius TypeScript SDK
- [`create-solana-dapp`](https://github.com/solana-foundation/create-solana-dapp) - Project scaffolding

### Colosseum Resources
- [How to Win a Colosseum Hackathon](https://blog.colosseum.com/how-to-win-a-colosseum-hackathon/) - Official guide from Colosseum
- [Perfecting Your Hackathon Submission](https://blog.colosseum.com/perfecting-your-hackathon-submission/) - Submission tips
- [Colosseum Copilot](https://colosseum.com/copilot) - AI assistant for hackathon questions
- [Past Projects](https://arena.colosseum.org/projects/explore) - Browse what's been built before

### Superteam Canada
- Follow [@superteamcan](https://x.com/superteamcan) for hackathon announcements
- Join our community for team matching and mentorship

---

## Quick Reference Card

```
SCAFFOLD    npx create-solana-dapp my-app --template nextjs-anchor --bun
HELIUS      npm i -g helius-cli && helius signup && helius project create hack
WALLET      solana-keygen new && solana config set --url devnet && solana airdrop 2
BUILD       cd anchor && anchor build && anchor test
DEPLOY      anchor deploy --provider.cluster devnet
FRONTEND    cd web && bun dev
LOGS        solana logs <PROGRAM_ID> --url devnet
PRIORITY    helius-sdk getPriorityFeeEstimate()
```

---

*Built with urgency by [Superteam Canada](https://x.com/superteamcan). Go win something.*
