
/* IMPORT */

import {getConfig} from 'vscode-extras';
import type {Options} from './types';

/* MAIN */

const castArray = <T> ( value: T | T[] ): T[] => {

  return isArray ( value ) ? value : [value];

};

const isArray = <T> ( value: unknown ): value is T[] => {

  return Array.isArray ( value );

};

const isString = ( value: unknown ): value is string => {

  return typeof value === 'string';

};

const getOptions = (): Options => {

  const config = getConfig ( 'openInBrowsers' );
  const browser = isString ( config?.browser ) ? config.browser : 'chrome';
  const browsers = isArray ( config?.browsers ) && config.browsers.every ( isString ) ? config.browsers : ['chrome', 'firefox', 'safari', 'edge'];

  return { browser, browsers };

};

/* EXPORT */

export {castArray, isArray, isString, getOptions};
