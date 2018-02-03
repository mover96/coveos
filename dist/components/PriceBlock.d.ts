/// <reference types="react" />
import * as React from 'react';
import { CoinInfo } from '../interfaces/coinInfo';
export interface PriceBlockProps {
    coinInfo: CoinInfo;
}
export declare const PriceBlock: React.SFC<PriceBlockProps>;
