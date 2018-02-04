/// <reference path="../../react-iframe.d.ts" />
/// <reference types="react" />
import * as React from 'react';
export interface ResponsiveState {
    renderFrame: boolean;
}
export declare class ResponsiveShell extends React.Component<null, ResponsiveState> {
    constructor(props: any);
    render(): JSX.Element;
}
