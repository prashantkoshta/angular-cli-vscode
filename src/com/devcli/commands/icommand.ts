import * as vscode from 'vscode'
import { Disposable } from 'vscode';

export interface ICommand {
    regMenuCommand(terminal:vscode.Terminal):Disposable;
    regCommand(terminal:vscode.Terminal):Disposable;
}