const path = require('path');

const CWD = process.cwd();
const SRC = path.join(CWD, 'src');
const MODULES = path.join(__dirname, '../node_modules');
const CSS_LOADER = require.resolve('css-loader');
const STYLE_LOADER = require.resolve('style-loader');
const LESS_LOADER = require.resolve('less-loader');
const IF_NOT_DEV = process.env.NODE_ENV !== 'development';

module.exports = neutrino => {
    const { config } = neutrino;
    config.module
        .rule('less')
        .test(/\.less$/)
        .pre()
        .include(SRC)
        .loader('style', STYLE_LOADER)
        .loader('css', CSS_LOADER)
        .loader('less', LESS_LOADER); 
    
    config.resolve.modules.add(MODULES);
    config.resolveLoader.modules.add(MODULES);
}
