/**
 * @providesModule SafariViewManager
 */

'use strict';

import {
  NativeModules,
  NativeEventEmitter,
  processColor
} from 'react-native';

const NativeSafariViewManager = NativeModules.SafariViewManager;
const moduleEventEmitter = new NativeEventEmitter(NativeSafariViewManager);

/**
 * High-level docs for the SafariViewManager iOS API can be written here.
 */

const SafariViewManager = {
  isAvailable: !!NativeSafariViewManager.isAvailable,

  show(options) {
    if (options && options.tintColor) {
      options.tintColor = processColor(options.tintColor);
    }
    if (options && options.barTintColor) {
      options.barTintColor = processColor(options.barTintColor);
    }

    return new Promise((resolve, reject) => {
      NativeSafariViewManager.show(options, (error) => {
        if (error) {
          return reject(error);
        }

        resolve(true);
      });
    });
  },

  dismiss() {
    NativeSafariViewManager.dismiss();
  },

  addEventListener(event, listener) {
    return moduleEventEmitter.addListener(event, listener);
  },

  removeEventListener(event, listener) {
    moduleEventEmitter.removeListener(event, listener);
  }
};

exports.default = SafariViewManager;
module.exports = exports['default'];
