//vue.config.js
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/fullcalendar-test/' :
        '/',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Calendar Events';
                return args;
            });
    },
};