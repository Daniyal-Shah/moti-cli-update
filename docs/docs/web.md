---
id: web
title: Web Support
sidebar_label: Web Support
---

Moti works on all platforms, including Web. Make sure you've installed `react-native-web`.

## Expo Web support

Expo Web should work out of the box.

## Expo Router / Metro Web

You'll need to add `mjs` to your `sourceExts` in `metro.config.js`. For example:

```js
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push(
  'mjs’
);

module.exports = config;
```

### Troubleshooting

If you get the following Reanimated error in your console: `ReferenceError: _frameTimestamp is not defined`, you can add add this to `App.js` at the top:

```ts
import { Platform } from 'react-native'
if (Platform.OS === 'web') {
  global._frameTimestamp = null
}
```

This should go away in Reanimated v3. See [react-native-reanimated#3355](https://github.com/software-mansion/react-native-reanimated/issues/3355).

## Vanilla React Native Web

You may need to add a custom `webpack.config.js` to your project and export the config from `@expo/webpack-config`.

<!-- Next, create a custom `webpack.config.js` in the root of your Expo app, and paste the contents below:

`webpack.config.js`

```js
const createExpoWebpackConfigAsync = require('@expo/webpack-config')

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      // for moti 0.19+, you can remove @motify here
      babel: { dangerouslyAddModulePathsToTranspile: ['moti', '@motify'] },
    },
    argv
  )

  config.resolve.alias['framer-motion'] = 'framer-motion/dist/framer-motion'

  return config
}
```

Your app will now run with Expo Web! -->
