const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    configureWebpack: {
        output: {
            libraryExport: 'default',
            libraryTarget: 'umd'
        }
    }
})
