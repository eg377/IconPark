/**
 * @file FlipVertically 垂直翻转
 * @author Auto Generated by IconPark
 */

/* tslint:disable: max-line-length */
/* eslint-disable max-len */
import {ISvgIconProps, IconHelper, IconWrapper} from '../runtime';

export default IconWrapper(
    'flip-vertically',
    true,
    (h: IconHelper, props: ISvgIconProps) => (
        <svg
            width={props.size}
            height={props.size}
            viewBox="0 0 48 48"
        >
            <g
                stroke="none"
                stroke-width={props.strokeWidth}
                fill="none"
                fill-rule="evenodd"
            >
                <g>
                    <g
                        transform="translate(24.000000, 24.000000) rotate(90.000000) translate(-24.000000, -24.000000) translate(4.000000, 6.000000)"
                        stroke={props.colors[0]}
                        stroke-linejoin={props.strokeLinejoin}
                        stroke-width={props.strokeWidth}
                    >
                        <path
                            d="M20,0 L20,36"
                            stroke-linecap={props.strokeLinecap}
                        />
                        <polygon
                            fill={props.colors[1]}
                            fill-rule="nonzero"
                            points="0 28 12 6 12 28"
                        />
                        <polygon
                            fill={props.colors[1]}
                            fill-rule="nonzero"
                            points="40 28 28 28 28 6"
                        />
                    </g>
                </g>
            </g>
        </svg>
    )
);
