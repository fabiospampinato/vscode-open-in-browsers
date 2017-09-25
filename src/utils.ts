
/* IMPORT */

import * as _ from 'lodash';
import * as vscode from 'vscode';
import * as Commands from './commands';

/* UTILS */

const Utils = {

  initCommands ( context: vscode.ExtensionContext ) {

    const {commands} = vscode.extensions.getExtension ( 'fabiospampinato.vscode-open-in-browsers' ).packageJSON.contributes;

    commands.forEach ( ({ command, title }) => {

      const commandName = _.last ( command.split ( '.' ) ) as string,
            handler = Commands[commandName],
            disposable = vscode.commands.registerCommand ( command, () => handler () );

      context.subscriptions.push ( disposable );

    });

    return Commands;

  },

  folder: {

    getRootPath () {

      const {workspaceFolders} = vscode.workspace;

      if ( !workspaceFolders ) return;

      return workspaceFolders[0].uri.fsPath;

    }

  }

};

/* EXPORT */

export default Utils;
