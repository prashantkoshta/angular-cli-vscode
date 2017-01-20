'use strict';
import * as vscode from 'vscode'
import { window, workspace, TextEditor,Uri } from 'vscode';
import {NgComponent} from "./com/devcli/commands/ngcomponent";
import {NgDirective} from "./com/devcli/commands/ngdirective";
import {NgPipe} from "./com/devcli/commands/ngpipe";
import {NgEnum} from "./com/devcli/commands/ngenum";
import {NgInterface} from "./com/devcli/commands/nginterface";
import {NgService} from "./com/devcli/commands/ngservice";
import {NgClass} from "./com/devcli/commands/ngclass";
import {NgModule} from "./com/devcli/commands/ngmodule";


export function activate(context: vscode.ExtensionContext) {
    let terminal:vscode.Terminal = vscode.window.createTerminal("ng-build");
    let activity_terminal:vscode.Terminal = vscode.window.createTerminal("ng");
    terminal.show(true);

    vscode.commands.registerCommand('angularcliextension.ngnew', (args) => {
        vscode.window.showInputBox({ placeHolder: 'name of your project'}).then(
            (data) => {
                    terminal.sendText("ng new "+data);
                    /*let uri = Uri.parse('file://'+workspace.rootPath+"/"+data);
                    setInterval( function(){
                        console.log(uri,workspace);
                        vscode.commands.executeCommand('vscode.openFolder', uri);
                        //terminal.sendText("npm install");
                    },10000); */
                   
                }
        )   
    });

    vscode.commands.registerCommand('angularcliextension.serve', () => {
        terminal.sendText("ng serve");
    });

    context.subscriptions.push(new NgComponent().regCommand(activity_terminal));
    context.subscriptions.push(new NgComponent().regMenuCommand(activity_terminal));
    
    context.subscriptions.push(new NgDirective().regCommand(activity_terminal));
    context.subscriptions.push(new NgDirective().regMenuCommand(activity_terminal));

    context.subscriptions.push(new NgPipe().regCommand(activity_terminal));
    context.subscriptions.push(new NgPipe().regMenuCommand(activity_terminal));

    context.subscriptions.push(new NgService().regCommand(activity_terminal));
    context.subscriptions.push(new NgService().regMenuCommand(activity_terminal));
        
    context.subscriptions.push(new NgClass().regCommand(activity_terminal));
    context.subscriptions.push(new NgClass().regMenuCommand(activity_terminal));

    context.subscriptions.push(new NgInterface().regCommand(activity_terminal));
    context.subscriptions.push(new NgInterface().regMenuCommand(activity_terminal));

    context.subscriptions.push(new NgEnum().regCommand(activity_terminal));
    context.subscriptions.push(new NgEnum().regMenuCommand(activity_terminal));

    context.subscriptions.push(new NgModule().regCommand(activity_terminal));
    context.subscriptions.push(new NgModule().regMenuCommand(activity_terminal));


    vscode.commands.registerCommand('angularcliextension.build', () => {
        vscode.window.showQuickPick([
            "",
            "--target=production --environment=prod",
            "--prod --env=prod",
            "--prod",
            "--target=development --environment=dev",
            "--dev --e=dev",
            "--dev"
            ]).then(
            (data) => {
                   terminal.sendText("ng build "+data);
                }
        )
        
    });

    vscode.commands.registerCommand('angularcliextension.test', () => {
        terminal.sendText("ng test");
    });

    vscode.commands.registerCommand('angularcliextension.e2e', () => {
        terminal.sendText("ng e2e");
    });

}

// this method is called when your extension is deactivated
export function deactivate(args) {
    
}


