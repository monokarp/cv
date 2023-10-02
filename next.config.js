/** @type {import('next').NextConfig} */

const repoName = process.env.REPO_NAME;

if (!repoName) { throw new Error('Failed to inject env variable') }

const nextConfig = {
    output: 'export',
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
}

module.exports = nextConfig
