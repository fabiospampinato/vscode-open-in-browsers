
/* IMPORT */

import openPath from 'tiny-browser-open';
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

  for ( const app of castArray ( browsers ) ) {

    if ( app === 'chrome' || app === 'firefox' || app === 'safari' || app === 'edge' ) {

      openPath ( targetPath, { app } );

    } else {

      openPath ( targetPath );

    }

  }

};

const openDefault = (): Promise<void> => {

  const config = getConfig ( 'openInBrowsers' );
  const browser = config?.browser || 'chrome';

  return open ( browser );

};

const openAll = (): Promise<void> => {

  const config = getConfig ( 'openInBrowsers' );
  const browsers = config?.browsers || ['chrome', 'firefox', 'safari', 'edge'];

  return open ( browsers );

};

/* EXPORT */

export {open, openDefault, openAll};
