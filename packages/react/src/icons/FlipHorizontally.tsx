/**
 * @file FlipHorizontally 水平翻转
 * @author Auto Generated by IconPark
 */

/* tslint:disable: max-line-length */
/* eslint-disable max-len */
import React from 'react';
import {ISvgIconProps, IconWrapper} from '../runtime';

export default IconWrapper(
    'flip-horizontally',
    true,
    (props: ISvgIconProps) => (
        <svg
            width={props.size}
            height={props.size}
            viewBox="0 0 48 48"
        >
            <g
                stroke="none"
                strokeWidth={props.strokeWidth}
                fill="none"
                fillRule="evenodd"
            >
                <g>
                    <g
                        transform="translate(4.000000, 6.000000)"
                        stroke={props.colors[0]}
                        strokeLinejoin={props.strokeLinejoin}
                        strokeWidth={props.strokeWidth}
                    >
                        <path
                            d="M20,0 L20,36"
                            strokeLinecap={props.strokeLinecap}
                        />
                        <polygon
                            fill={props.colors[1]}
                            fillRule="nonzero"
                            points="0 28 12 6 12 28"
                        />
                        <polygon
                            fill={props.colors[1]}
                            fillRule="nonzero"
                            points="40 28 28 28 28 6"
                        />
                    </g>
                </g>
            </g>
        </svg>
    )
);
