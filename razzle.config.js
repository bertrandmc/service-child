const nodeExternals = require('webpack-node-externals');
const fs = require('fs');

module.exports = {
  modifyBabelOptions() {
    return {
      presets: ['razzle/babel']
    };
  },
  modify: (config, { target, dev }, webpack) => {
    const babelRuleIndex = config.module.rules.findIndex(
      (rule) => rule.use && rule.use[0].loader && rule.use[0].loader.includes('babel-loader')
    );
    config.module.rules[babelRuleIndex] = Object.assign(config.module.rules[babelRuleIndex], {
      include: [
        ...config.module.rules[babelRuleIndex].include,
        fs.realpathSync('./node_modules/culturetrip-ui')
      ],
    });
    config.externals =
      target === 'node'
        ? [
          nodeExternals({
            whitelist: [
              dev ? 'webpack/hot/poll?300' : null,
              /\.(woff2|svg|png|jpg|jpeg|gif|ico|webp)$/,
              /^culturetrip-ui/,
            ].filter(Boolean),
          }),
        ]
        : [];
    // config.externals.push({
    //   "styled-components": {
    //     commonjs: "styled-components",
    //     commonjs2: "styled-components",
    //     root: "styled"
    //   }
    // });
    return config;
  }
};
