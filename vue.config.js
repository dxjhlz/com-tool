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
  devServer:{
    proxy: {
      "^/app": {
        target: "http://192.168.5.198:8081", //代理地址，这里设置的地址会代替axios中设置的baseURL
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
      },
    }
  }
})
