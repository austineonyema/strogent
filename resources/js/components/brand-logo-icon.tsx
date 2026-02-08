import type { SVGAttributes } from 'react';
import { colors } from '@/theme/colors';

export default function BrandLogoIcon(props: SVGAttributes<SVGElement>) {
    const primary = colors.primary;

    return (
        <svg
            {...props}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
        >
            <polygon
                fill={primary[400]}
                points="220,80 280,45 400,45 340,80"
            />
            <polygon
                fill={primary[500]}
                points="220,80 340,80 340,180 220,180"
            />
            <polygon
                fill={primary[600]}
                points="340,80 400,45 400,145 340,180"
            />

            <polygon
                fill={primary[400]}
                points="120,200 180,165 300,165 240,200"
            />
            <polygon
                fill={primary[500]}
                points="120,200 240,200 240,300 120,300"
            />
            <polygon
                fill={primary[600]}
                points="240,200 300,165 300,265 240,300"
            />

            <polygon
                fill={primary[400]}
                points="220,320 280,285 400,285 340,320"
            />
            <polygon
                fill={primary[500]}
                points="220,320 340,320 340,420 220,420"
            />
            <polygon
                fill={primary[600]}
                points="340,320 400,285 400,385 340,420"
            />
        </svg>
    );
}
