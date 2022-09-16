import React, { ComponentProps } from 'react';
import { PopperProps } from 'react-popper';
export declare const Tooltip: ({ children, ...rest }: ComponentProps<'div'>) => JSX.Element;
export declare type PopperTooltipProps<T extends HTMLElement> = React.PropsWithChildren<{
    /** Reference element to which the tooltip should attach to */
    referenceElement: T | null;
    /** Popper's modifier (offset) property - [xAxis offset, yAxis offset], default [0, 10] */
    offset?: [number, number];
    /** Popper's placement property defining default position of the tooltip, default 'top' */
    placement?: PopperProps<unknown>['placement'];
    /** Tells component whether to render it's contents */
    visible?: boolean;
}>;
export declare const PopperTooltip: <T extends HTMLElement>({ children, offset, referenceElement, placement, visible, }: PopperTooltipProps<T>) => JSX.Element | null;
//# sourceMappingURL=Tooltip.d.ts.map