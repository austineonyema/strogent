import type { SVGAttributes } from 'react';
import { colors } from '@/theme/colors';

export default function BrandLogoWordmark(props: SVGAttributes<SVGElement>) {
    return (
        <svg
            {...props}
            viewBox="0 0 680 160"
            xmlns="http://www.w3.org/2000/svg"
        >
            <text
                x="0"
                y="120"
                fill={colors.primary[700]}
                fontFamily='"Sora","Instrument Sans",ui-sans-serif,system-ui'
                fontSize="120"
                fontWeight="700"
                letterSpacing="3"
            >
                Strogent
            </text>
        </svg>
    );
}
