
/* IMPORT */

import openPath, {apps} from 'open';
import vscode from 'vscode';
import {getConfig, getProjectRootPath} from 'vscode-extras';
import {castArray} from './utils';

/* MAIN */

const open = async ( browsers?: string | string[] ): Promise<void> => {

  const rootPath = getProjectRootPath ();
  const filePath = vscode.window.activeTextEditor?.document.uri.fsPath || vscode.window.tabGroups.activeTabGroup.activeTab?.input?.uri?.fsPath;
  const targetPath = filePath || rootPath;

  if ( !targetPath ) return void vscode.window.showErrorMessage ( 'You have to open a project or a file before opening it in a browser' );

  const config = getConfig ( 'openInBrowsers' );
  const items: vscode.QuickPickItem[] = config?.browsers?.map ( ( label: string ) => ({ label }) ) || [];

  browsers ||= ( await vscode.window.showQuickPick ( items, { placeHolder: 'Select a browser...' } ) )?.label;

  if ( !browsers?.length ) return;

  for ( const browser of castArray ( browsers ) ) {

    let name: string | readonly string[] = browser;

    if ( browser === 'Google Chrome' || browser === 'Chrome' ) name = apps.chrome;
    if ( browser === 'Firefox' ) name = apps.firefox;
    if ( browser === 'Edge' ) name = apps.edge;

    openPath ( targetPath, { app: { name } } );

  }

};

const openDefault = (): Promise<void> => {

  const config = getConfig ( 'openInBrowsers' );
  const browser = config?.browser || 'Chrome';

  return open ( browser );

};

const openAll = (): Promise<void> => {

  const config = getConfig ( 'openInBrowsers' );
  const browsers = config?.browsers || ['Chrome', 'Firefox', 'Safari', 'Edge'];

  return open ( browsers );

};

/* EXPORT */

export {open, openDefault, openAll};
