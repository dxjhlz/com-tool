const { defineConfig } = require('@vue/cli-service')

const version = new Date()
let cdn = {css:["/css/global.css"]}
module.exports = defineConfig({
  transpileDependencies: true
})
