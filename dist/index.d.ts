import { FC, HTMLAttributes } from 'react';
declare type IconT = {
    viewBox: string;
    id: string;
};
export declare type PropsT = HTMLAttributes<HTMLElement> & {
    icon: IconT;
};
declare const Icon: FC<PropsT>;
export default Icon;
