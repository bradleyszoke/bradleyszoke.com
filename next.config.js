// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

var remarkFrontmatter = require('remark-frontmatter');

// module.exports = nextConfig

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter, require('remark-prism')],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
  },
});

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
});
