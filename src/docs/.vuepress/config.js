module.exports = {
  host: 'localhost',
  base: '/',
  port: 8666,
  title: '十分钟学会Rollup.js',
  description: '使用Rollup.js构建公共库',
  themeConfig: {
    editLinks: false,
    docsDir: 'docs',
    nav: [],
    sidebar: [
      {
        collapsable: false,
        children: [
          'chapter1/',
          'chapter1/prd',
          'chapter1/rollup',
        ],
      },
    ],
  },
};
