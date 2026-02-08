import { cn } from '@/lib/utils';
import BrandLogoIcon from '@/components/brand-logo-icon';
import BrandLogoWordmark from '@/components/brand-logo-wordmark';

type BrandLogoProps = {
    className?: string;
    iconClassName?: string;
    wordmarkClassName?: string;
};

export default function BrandLogo({
    className,
    iconClassName,
    wordmarkClassName,
}: BrandLogoProps) {
    return (
        <div
            className={cn(
                'flex items-center gap-[var(--space-3)]',
                className,
            )}
            role="img"
            aria-label="Strogent"
        >
            <BrandLogoIcon
                className={cn('h-10 w-10', iconClassName)}
                aria-hidden="true"
            />
            <BrandLogoWordmark
                className={cn('h-7 w-auto', wordmarkClassName)}
                aria-hidden="true"
            />
        </div>
    );
}
