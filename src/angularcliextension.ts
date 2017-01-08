'use strict';
import * as vscode from 'vscode'


export function activate(context: vscode.ExtensionContext) {
    let terminal:vscode.Terminal = vscode.window.createTerminal("ng");
    terminal.show(true);

    vscode.commands.registerCommand('angularcliextension.ngnew', () => {
        let project = vscode.window.showInputBox({ placeHolder: 'name of your project'}).then(
            (data) => {
                    terminal.sendText("ng new "+data);
                }
        )   
    });

    vscode.commands.registerCommand('angularcliextension.serve', () => {
        terminal.sendText("ng serve");
    });

    vscode.commands.registerCommand('angularcliextension.component', () => {
        let project = vscode.window.showInputBox({ placeHolder: 'name of component (Note - #components support relative path generation)'}).then(
            (data) => {
                    terminal.sendText("ng g component "+data);
                }
        )  
    });

    vscode.commands.registerCommand('angularcliextension.directive', () => {
        let project = vscode.window.showInputBox({ placeHolder: 'name of directive (Note - #directive support relative path generation)'}).then(
            (data) => {
                    terminal.sendText("ng g directive "+data);
                }
        ) 
    });

    vscode.commands.registerCommand('angularcliextension.pipe', () => {
        let project = vscode.window.showInputBox({ placeHolder: 'name of pipe (Note - #pipe support relative path generation)'}).then(
            (data) => {
                    terminal.sendText("ng g pipe "+data);
                }
        )
    });

    vscode.commands.registerCommand('angularcliextension.service', () => {
        let project = vscode.window.showInputBox({ placeHolder: 'name of service (Note - #service support relative path generation)'}).then(
            (data) => {
                    terminal.sendText("ng g service "+data);
                }
        )
    });

    vscode.commands.registerCommand('angularcliextension.class', () => {
         let project = vscode.window.showInputBox({ placeHolder: 'name of class'}).then(
            (data) => {
                    terminal.sendText("ng g class "+data);
                }
        )
    });

    vscode.commands.registerCommand('angularcliextension.interface', () => {
        let project = vscode.window.showInputBox({ placeHolder: 'name of interface'}).then(
            (data) => {
                    terminal.sendText("ng g interface "+data);
                }
        )
    });

    vscode.commands.registerCommand('angularcliextension.enum', () => {
        let project = vscode.window.showInputBox({ placeHolder: 'name of enum'}).then(
            (data) => {
                    terminal.sendText("ng g enum "+data);
                }
        )
    });

    vscode.commands.registerCommand('angularcliextension.module', () => {
        let project = vscode.window.showInputBox({ placeHolder: 'name of module'}).then(
            (data) => {
                    terminal.sendText("ng g module "+data);
                }
        )
    });

    vscode.commands.registerCommand('angularcliextension.build', () => {
        terminal.sendText("ng build");
    });

    vscode.commands.registerCommand('angularcliextension.test', () => {
        terminal.sendText("ng test");
    });

    vscode.commands.registerCommand('angularcliextension.e2e', () => {
        terminal.sendText("ng e2e");
    });

}

// this method is called when your extension is deactivated
export function deactivate() {
    
}

