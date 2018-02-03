/// <reference types="react" />
import * as React from 'react';
export interface UserSwitchProps {
    changeView: (view: number) => void;
    view: number;
}
export declare const UserSwitch: React.SFC<UserSwitchProps>;
