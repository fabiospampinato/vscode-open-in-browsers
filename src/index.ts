
/* IMPORT */

import vscode from 'vscode';
import * as Commands from './commands';

/* MAIN */

const activate = (): void => {

  vscode.commands.registerCommand ( 'openInBrowsers.open', Commands.open );
  vscode.commands.registerCommand ( 'openInBrowsers.openDefault', Commands.openDefault );
  vscode.commands.registerCommand ( 'openInBrowsers.openAll', Commands.openAll );

};

/* EXPORT */

export {activate};
