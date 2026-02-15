import { Link } from '@inertiajs/react';
import type { CSSProperties } from 'react';
import { LayoutGrid } from 'lucide-react';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import type { NavItem } from '@/types';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
];

const footerNavItems: NavItem[] = [];

const sidebarThemeVars = {
    '--sidebar': 'var(--color-primary)',
    '--sidebar-foreground': '#FFFFFF',
    '--sidebar-primary': 'var(--color-primary)',
    '--sidebar-primary-foreground': '#FFFFFF',
    '--sidebar-accent': 'rgba(255, 255, 255, 0.16)',
    '--sidebar-accent-foreground': '#FFFFFF',
    '--sidebar-border': 'rgba(255, 255, 255, 0.25)',
} as CSSProperties;

export function AppSidebar() {
    return (
        <Sidebar
            collapsible="icon"
            variant="inset"
            style={sidebarThemeVars}
        >
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                {footerNavItems.length > 0 && (
                    <NavFooter items={footerNavItems} className="mt-auto" />
                )}
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
