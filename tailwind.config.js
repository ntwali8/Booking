
module.exports = {
  content: [
    "src/pages/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('autoprefixer'),
  ],
}
