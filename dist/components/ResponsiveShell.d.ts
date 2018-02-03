/// <reference types="react" />
import * as React from 'react';
import { CoinInfo } from '../interfaces/coinInfo';
export interface ResponsiveShellProps {
    coins: CoinInfo[];
    changeView: (view: number) => void;
    view: number;
}
export declare const ResponsiveShell: React.SFC<ResponsiveShellProps>;
