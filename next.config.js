/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repoName = process.env.REPO_NAME;
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
}

if (isGithubActions && isProd) {
    Object.assign(nextConfig, {
        basePath: `/${repoName}`,
    })
}

module.exports = nextConfig
