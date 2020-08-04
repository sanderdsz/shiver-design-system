import theme from './docs/dracula'

export default {
    typescript: true,
    filterComponents: (files) => files.filter(filepath => /[w-]*.(js|jsx|ts|tsx)$/.test(filepath)),
    themeConfig: {
        colors: {
          background: "#eceff4",
          border: '#3b4252',
          header: {
            bg: '#88c0d0',
          },
          sidebar: {
            bg: '#eceff4',
          },
          props: {
            bg: '#e5e9f0',
            descriptionBg: '#e5e9f0',
          },
          playground: {
            bg: '#e5e9f0',
            border: '#3b4252',
          }
        },
        prismTheme: theme,
    },
    ignore: ['**/docs/**', '/docs/**', 'index.stories.mdx', 'README.md', 'Button.stories.tsx'],
}