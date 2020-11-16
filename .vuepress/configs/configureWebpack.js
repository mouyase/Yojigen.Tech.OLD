const path = require('path')

module.exports = () => {
    const NODE_ENV = process.env.NODE_ENV
    if (NODE_ENV === 'production') {
        return {
            output: {
                publicPath: 'https://cdn.jsdelivr.net/gh/mouyase/Yojigen.Tech@gh-pages/'
            },
            resolve: {
                alias: {
                    public: path.resolve(__dirname, '../public')
                }
            }
        }
    } else {
        return {
            resolve: {
                alias: {
                    public: path.resolve(__dirname, '../public')
                }
            }
        }
    }
}