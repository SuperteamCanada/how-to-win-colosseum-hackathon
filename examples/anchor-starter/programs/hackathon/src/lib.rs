use anchor_lang::prelude::*;

declare_id!("HaCk1111111111111111111111111111111111111111");

/// A minimal Anchor program template for hackathons.
/// Start here, add your instructions, and iterate fast.
///
/// This example implements a simple "project registry" where users
/// can register projects and vote on them - a common hackathon pattern.
#[program]
pub mod hackathon {
    use super::*;

    /// Initialize a new project registry
    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        let registry = &mut ctx.accounts.registry;
        registry.authority = ctx.accounts.authority.key();
        registry.project_count = 0;
        Ok(())
    }

    /// Register a new project
    pub fn register_project(
        ctx: Context<RegisterProject>,
        name: String,
        description: String,
    ) -> Result<()> {
        require!(name.len() <= 32, HackathonError::NameTooLong);
        require!(description.len() <= 256, HackathonError::DescriptionTooLong);

        let project = &mut ctx.accounts.project;
        let registry = &mut ctx.accounts.registry;

        project.creator = ctx.accounts.creator.key();
        project.name = name;
        project.description = description;
        project.votes = 0;
        project.created_at = Clock::get()?.unix_timestamp;

        registry.project_count += 1;

        Ok(())
    }

    /// Vote for a project
    pub fn vote(ctx: Context<Vote>) -> Result<()> {
        let project = &mut ctx.accounts.project;
        let vote_record = &mut ctx.accounts.vote_record;

        vote_record.voter = ctx.accounts.voter.key();
        vote_record.project = project.key();
        project.votes += 1;

        Ok(())
    }
}

// --- Accounts ---

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(
        init,
        payer = authority,
        space = 8 + Registry::INIT_SPACE,
        seeds = [b"registry"],
        bump
    )]
    pub registry: Account<'info, Registry>,
    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction(name: String)]
pub struct RegisterProject<'info> {
    #[account(
        init,
        payer = creator,
        space = 8 + Project::INIT_SPACE,
        seeds = [b"project", name.as_bytes()],
        bump
    )]
    pub project: Account<'info, Project>,
    #[account(mut, seeds = [b"registry"], bump)]
    pub registry: Account<'info, Registry>,
    #[account(mut)]
    pub creator: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Vote<'info> {
    #[account(mut)]
    pub project: Account<'info, Project>,
    #[account(
        init,
        payer = voter,
        space = 8 + VoteRecord::INIT_SPACE,
        seeds = [b"vote", project.key().as_ref(), voter.key().as_ref()],
        bump
    )]
    pub vote_record: Account<'info, VoteRecord>,
    #[account(mut)]
    pub voter: Signer<'info>,
    pub system_program: Program<'info, System>,
}

// --- State ---

#[account]
#[derive(InitSpace)]
pub struct Registry {
    pub authority: Pubkey,
    pub project_count: u64,
}

#[account]
#[derive(InitSpace)]
pub struct Project {
    pub creator: Pubkey,
    #[max_len(32)]
    pub name: String,
    #[max_len(256)]
    pub description: String,
    pub votes: u64,
    pub created_at: i64,
}

#[account]
#[derive(InitSpace)]
pub struct VoteRecord {
    pub voter: Pubkey,
    pub project: Pubkey,
}

// --- Errors ---

#[error_code]
pub enum HackathonError {
    #[msg("Project name must be 32 characters or less")]
    NameTooLong,
    #[msg("Project description must be 256 characters or less")]
    DescriptionTooLong,
}
