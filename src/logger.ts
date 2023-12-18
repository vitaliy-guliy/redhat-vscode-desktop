/**********************************************************************
 * Copyright (c) 2023 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 ***********************************************************************/

import * as vscode from 'vscode';

let output: vscode.OutputChannel | undefined = undefined;

export function log(msg: string) {
    if (!output) {
        output = vscode.window.createOutputChannel('redhat-desktop-extension');
        // output.show(true);
    }

    output?.appendLine(msg);
}
