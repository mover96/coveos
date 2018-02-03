/// <reference types="react" />
import * as React from 'react';
import { CoinInfo } from '../interfaces/coinInfo';
export interface BlocksProps {
    coins: CoinInfo[];
}
export declare const Blocks: React.SFC<BlocksProps>;
