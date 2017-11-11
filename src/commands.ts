
/* IMPORT */

import * as _ from 'lodash';
import * as absolute from 'absolute';
import * as openPath from 'open';
import * as vscode from 'vscode';
import Config from './config';
import Utils from './utils';

/* COMMANDS */

async function open ( browser?: string | string[] ) {

  const {activeTextEditor} = vscode.window,
        editorPath = activeTextEditor ? activeTextEditor.document.uri.fsPath : undefined,
        filePath = editorPath && absolute ( editorPath ) ? editorPath : Utils.folder.getRootPath ();

  if ( !filePath ) return vscode.window.showErrorMessage ( 'You have to open a project or a file before opening it in a browser' );

  if ( !browser ) {

    const config = Config.get (),
          items = config.browsers.map ( label => ({ label }) ),
          selected = await vscode.window.showQuickPick ( items, { placeHolder: 'Select a browser...' } );

    if ( !selected ) return;

    browser = selected['label'];

  }

  browser = _.castArray ( browser ) as string[];

  browser.forEach ( browser => openPath ( filePath, browser ) );

}

function openDefault () {

  const config = Config.get ();

  open ( config.browser );

}

function openAll () {

  const config = Config.get ();

  open ( config.browsers );

}

/* EXPORT */

export {open, openDefault, openAll};
