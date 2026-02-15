import { usePage } from '@inertiajs/react';
import { ChevronsUpDown } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from '@/components/ui/sidebar';
import { UserInfo } from '@/components/user-info';
import { UserMenuContent } from '@/components/user-menu-content';
import { useIsMobile } from '@/hooks/use-mobile';
import { semanticColors } from '@/theme/colors';
import type { SharedData } from '@/types';

export function NavUser() {
    const { auth } = usePage<SharedData>().props;
    const { state } = useSidebar();
    const isMobile = useIsMobile();

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="group text-white hover:bg-white/15 hover:text-white data-[state=open]:bg-white/15 data-[state=open]:text-white"
                            data-test="sidebar-menu-button"
                        >
                            <UserInfo user={auth.user} />
                            <ChevronsUpDown className="ml-auto size-4" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg text-white [&_.text-muted-foreground]:text-white/80 [&_[data-slot=dropdown-menu-label]]:text-white [&_[data-slot=dropdown-menu-item][data-variant=default]]:text-white [&_[data-slot=dropdown-menu-item][data-variant=default]]:focus:bg-white/15 [&_[data-slot=dropdown-menu-item][data-variant=default]]:focus:text-white [&_[data-slot=dropdown-menu-item][data-variant=destructive]]:text-red-300 [&_[data-slot=dropdown-menu-item][data-variant=destructive]]:focus:bg-red-500/20 [&_[data-slot=dropdown-menu-item][data-variant=destructive]]:focus:text-red-200 [&_[data-slot=dropdown-menu-separator]]:bg-white/20"
                        style={{
                            backgroundColor: semanticColors.primary,
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                            color: '#FFFFFF',
                        }}
                        align="end"
                        side={
                            isMobile
                                ? 'bottom'
                                : state === 'collapsed'
                                  ? 'left'
                                  : 'bottom'
                        }
                    >
                        <UserMenuContent user={auth.user} />
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
