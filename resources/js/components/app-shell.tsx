import { usePage } from '@inertiajs/react';
import type { CSSProperties, ReactNode } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { colorCssVars } from '@/theme/colors';
import type { SharedData } from '@/types';

type Props = {
    children: ReactNode;
    variant?: 'header' | 'sidebar';
};

const sidebarThemeVars = {
    ...colorCssVars,
    '--sidebar': 'var(--color-primary)',
    '--sidebar-foreground': '#FFFFFF',
    '--sidebar-primary': 'var(--color-primary)',
    '--sidebar-primary-foreground': '#FFFFFF',
    '--sidebar-accent': 'rgba(255, 255, 255, 0.16)',
    '--sidebar-accent-foreground': '#FFFFFF',
} as CSSProperties;

export function AppShell({ children, variant = 'header' }: Props) {
    const isOpen = usePage<SharedData>().props.sidebarOpen;

    if (variant === 'header') {
        return (
            <div className="flex min-h-screen w-full flex-col">{children}</div>
        );
    }

    return (
        <SidebarProvider defaultOpen={isOpen} style={sidebarThemeVars}>
            {children}
        </SidebarProvider>
    );
}
