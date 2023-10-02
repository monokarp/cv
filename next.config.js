/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repoName = process.env.REPO_NAME;

const nextConfig = {
    output: 'export',
}

if (isGithubActions) {
    Object.assign(nextConfig, {
        basePath: `/${repoName}`,
    })
}

module.exports = nextConfig
