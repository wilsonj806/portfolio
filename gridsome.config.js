// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Wilson Jiang',
  plugins: [
    // NOTE Remark/ Gridsome doesn't like it if you don't consistently have the nested "layout" object in head(i.e have only one of: layout: { component: '', props })
    {
      // again similar to Webpack loader configs
      use: '@gridsome/vue-remark',
      options: {
        // GraphQL type name
        typeName: 'Blog',
        // where to find your MD files
        baseDir: './blog',

        // URL to navigate to
        pathPrefix: '/blog',

        // Vue template location
        // template: './src/templates/Blog.vue'
      }
    },
    {
      // again similar to Webpack loader configs
      use: '@gridsome/vue-remark',
      options: {
        // GraphQL type name
        typeName: 'Project',
        // where to find your MD files
        baseDir: './project',

        // URL to navigate to
        pathPrefix: '/project',

        // Vue template location
        // template: './src/templates/Project.vue'
      }
    },
  ]
}