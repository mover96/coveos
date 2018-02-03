/// <reference types="react" />
import * as React from 'react';
import { CoinInfo } from '../interfaces/coinInfo';
export interface BlockProps {
    coinInfo: CoinInfo;
}
export interface BlockState {
    infoView: boolean;
}
export declare class Block extends React.Component<BlockProps, BlockState> {
    constructor(props: any);
    render(): JSX.Element;
    changeView(): void;
}
