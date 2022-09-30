const { defineConfig } = require('@vue/cli-service')

const version = new Date()
let cdn = {css:["/css/global.css"]}
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack:(config)=>{
    config.plugin("html").tap(args => {
      args[0].cdn = cdn;
      console.log("args",args)
      return args;
    });
  },
})
