import * as vscode from 'vscode'
import { window, workspace, TextEditor,Disposable } from 'vscode';
import {ICommand} from "./icommand"
import {Utils} from "./../utils/utils";


export class NgService implements ICommand {
    
    utils:Utils;

    public constructor(){
        this.utils= new Utils();
    }

    public regMenuCommand(terminal:vscode.Terminal):Disposable{
        // For Context Menu
        let disposable = vscode.commands.registerCommand('angularcliextension.menu_service', (args) => {
            this.utils.getRelativePath(args).subscribe(
                    v => {
                        if(v === "1-ERROR-") return;
                        vscode.window.showInputBox({ placeHolder: 'name of service (Note - #service support relative path generation)'}).then(
                            (data) => {
                                    let loc:string = v+"/"+data;
                                    if(data!=undefined)
                                    terminal.sendText("ng g service "+loc);
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
        let disposable = vscode.commands.registerCommand('angularcliextension.service', () => {
            vscode.window.showInputBox({ placeHolder: 'name of service (Note - #service support relative path generation)'}).then(
                (data) => {
                        if(data!=undefined)
                        terminal.sendText("ng g service "+data);
                    }
            )
        });
        return disposable;
    }
    
}