// @ts-check
import { defineConfig } from 'astro/config';

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? 'github-user';

export default defineConfig({
  site: isGitHubActions ? `https://${owner}.github.io` : 'https://example.org',
  base: isGitHubActions && repo ? `/${repo}` : '/',
  trailingSlash: 'always',
});
