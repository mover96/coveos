/// <reference types="react" />
import * as React from 'react';
import { CoinInfo } from '../interfaces/coinInfo';
export interface PriceBlockContainerProps {
    coinInfo: CoinInfo;
}
export declare const PriceBlockContainer: React.SFC<PriceBlockContainerProps>;
