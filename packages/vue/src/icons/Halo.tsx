/**
 * @file Halo 光晕
 * @author Auto Generated by IconPark
 */

/* tslint:disable: max-line-length */
/* eslint-disable max-len */
import {ISvgIconProps, IconHelper, IconWrapper} from '../runtime';

export default IconWrapper(
    'halo',
    true,
    (h: IconHelper, props: ISvgIconProps) => (
        <svg
            width={props.size}
            height={props.size}
            viewBox="0 0 48 48"
            fill="none"
        >
            <circle
                cx="24"
                cy="24"
                r="4"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                stroke-width={props.strokeWidth}
                stroke-linecap={props.strokeLinecap}
                stroke-linejoin={props.strokeLinejoin}
            />
            <circle
                cx="24"
                cy="24"
                r="12"
                stroke={props.colors[0]}
                stroke-width={props.strokeWidth}
                stroke-linecap={props.strokeLinecap}
                stroke-linejoin={props.strokeLinejoin}
                stroke-dasharray="6 6"
            />
            <circle
                cx="24"
                cy="24"
                r="20"
                stroke={props.colors[0]}
                stroke-width={props.strokeWidth}
                stroke-linecap={props.strokeLinecap}
                stroke-linejoin={props.strokeLinejoin}
                stroke-dasharray="1 6"
            />
        </svg>
    )
);
