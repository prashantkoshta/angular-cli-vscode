import * as vscode from 'vscode'
import { window, workspace, TextEditor } from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

export class Utils {

    public getRelativePath(args):Observable<string>{
        var rootPath = '';
        var clickedFolderPath: string;
        if (args) {
            clickedFolderPath = args.fsPath
            let srcInx = clickedFolderPath.indexOf("app");
            if (srcInx != -1) {
                rootPath = clickedFolderPath.substring(0, srcInx + "app".length);
            }
        }else {
            if (!window.activeTextEditor) {
                vscode.window.showErrorMessage("Please open a file first.. or just right-click on a file/folder and use the context menu!");
                return Observable.of("1-ERROR-");
            } else {
                clickedFolderPath = path.dirname(window.activeTextEditor.document.fileName);
            }
        }
        var newFolderPath: string = fs.lstatSync(clickedFolderPath).isDirectory() ? clickedFolderPath : path.dirname(clickedFolderPath);
        if (workspace.rootPath === undefined) {
            vscode.window.showErrorMessage("Please open project.");
            return Observable.of("1-ERROR-");
        }
        if(newFolderPath.indexOf(workspace.rootPath+"/src/app") === -1){
            vscode.window.showErrorMessage("Invalid path, Please select app folder.");
            return Observable.of("1-ERROR-");
        }
        newFolderPath= newFolderPath.replace(workspace.rootPath+"/src/app","");
        return Observable.of(newFolderPath);
        
    }

    

}