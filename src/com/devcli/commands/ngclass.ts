import * as vscode from 'vscode'
import { window, workspace, TextEditor,Disposable } from 'vscode';
import {ICommand} from "./icommand"
import {Utils} from "./../utils/utils";


export class NgClass implements ICommand {
    
    utils:Utils;

    public constructor(){
        this.utils= new Utils();
    }

    public regMenuCommand(terminal:vscode.Terminal):Disposable{
        // For Context Menu
        let disposable = vscode.commands.registerCommand('angularcliextension.menu_class', (args) => {
            this.utils.getRelativePath(args).subscribe(
                    v => {
                        if(v === "1-ERROR-") return;
                        vscode.window.showInputBox({ placeHolder: 'name of class'}).then(
                            (data) => {
                                    let loc:string = v+"/"+data;
                                    terminal.sendText("ng g class "+loc);
                                }
                        )  
                    },
                    e => { 
                        vscode.window.showErrorMessage(e);
                    },
                    () => { }
            );
        });
        return disposable;
    }

    public regCommand(terminal:vscode.Terminal):Disposable{
        let disposable = vscode.commands.registerCommand('angularcliextension.class', () => {
            vscode.window.showInputBox({ placeHolder: 'name of class'}).then(
                (data) => {
                        terminal.sendText("ng g class "+data);
                    }
            )
        });
        return disposable;
    }
    
}