/// <reference types="react" />
import * as React from 'react';
import { CoinInfo } from '../interfaces/coinInfo';
export interface DetailBlockProps {
    coinInfo: CoinInfo;
}
export declare const DetailBlock: React.SFC<DetailBlockProps>;
