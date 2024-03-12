
/* IMPORT */

import {alert, getActiveFilePath, getProjectRootPath, openInApp, prompt} from 'vscode-extras';
import {castArray, getOptions} from './utils';

/* MAIN */

const open = async ( browsers?: string | string[] ): Promise<void> => {

  const targetPath = getActiveFilePath () || getProjectRootPath ();

  if ( !targetPath ) return alert.error ( 'You have to open a project or a file before opening it in a browser' );

  const options = getOptions ();
  const items = options.browsers.map ( label => ({ label }) );

  browsers ||= ( await prompt.select ( 'Select a browser...', items ) )?.label;

  if ( !browsers?.length ) return;

  for ( const app of castArray ( browsers ) ) {

    openInApp ( targetPath, app );

  }

};

const openDefault = (): Promise<void> => {

  const options = getOptions ();

  return open ( options.browser );

};

const openAll = (): Promise<void> => {

  const options = getOptions ();

  return open ( options.browsers );

};

/* EXPORT */

export {open, openDefault, openAll};
