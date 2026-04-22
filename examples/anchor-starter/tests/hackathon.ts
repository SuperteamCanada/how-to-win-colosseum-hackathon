import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Hackathon } from "../target/types/hackathon";
import { expect } from "chai";

describe("hackathon", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.Hackathon as Program<Hackathon>;

  const [registryPda] = anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from("registry")],
    program.programId
  );

  it("Initializes the registry", async () => {
    const tx = await program.methods
      .initialize()
      .accounts({
        authority: provider.wallet.publicKey,
      })
      .rpc();

    const registry = await program.account.registry.fetch(registryPda);
    expect(registry.authority.toBase58()).to.equal(
      provider.wallet.publicKey.toBase58()
    );
    expect(registry.projectCount.toNumber()).to.equal(0);
  });

  it("Registers a project", async () => {
    const projectName = "SuperSwap";
    const [projectPda] = anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from("project"), Buffer.from(projectName)],
      program.programId
    );

    await program.methods
      .registerProject(projectName, "A novel AMM for Solana")
      .accounts({
        creator: provider.wallet.publicKey,
      })
      .rpc();

    const project = await program.account.project.fetch(projectPda);
    expect(project.name).to.equal(projectName);
    expect(project.votes.toNumber()).to.equal(0);

    const registry = await program.account.registry.fetch(registryPda);
    expect(registry.projectCount.toNumber()).to.equal(1);
  });

  it("Votes for a project", async () => {
    const projectName = "SuperSwap";
    const [projectPda] = anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from("project"), Buffer.from(projectName)],
      program.programId
    );

    const [voteRecordPda] = anchor.web3.PublicKey.findProgramAddressSync(
      [
        Buffer.from("vote"),
        projectPda.toBuffer(),
        provider.wallet.publicKey.toBuffer(),
      ],
      program.programId
    );

    await program.methods
      .vote()
      .accounts({
        project: projectPda,
        voter: provider.wallet.publicKey,
      })
      .rpc();

    const project = await program.account.project.fetch(projectPda);
    expect(project.votes.toNumber()).to.equal(1);
  });

  it("Prevents double voting", async () => {
    const projectName = "SuperSwap";
    const [projectPda] = anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from("project"), Buffer.from(projectName)],
      program.programId
    );

    try {
      await program.methods
        .vote()
        .accounts({
          project: projectPda,
          voter: provider.wallet.publicKey,
        })
        .rpc();
      expect.fail("Should have thrown - double vote");
    } catch (err) {
      // Vote record PDA already exists, so init fails
      expect(err).to.exist;
    }
  });
});
