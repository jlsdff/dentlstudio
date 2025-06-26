import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';
import '@inertiajs/react'

declare module '@inertiajs/react' {
    export interface PageProps {
        flash: {
            success?: string | Media | null,
            post?: Post | null
        }
    }
}
export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface FlashMessages {
    success?: boolean | null;
    message?: string | null;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    flash?: FlashMessages;
    [key: string]: unknown;
}

export interface User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown;
}

export interface Media {
    id: number;
    name: string;
    path: string;
    created_at: string;
    updated_at: string;
}

export interface CursorPaginate<T> {
    data: T[];
    next_cursor: string | null;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_cursor: string | null;
    prev_page_url: string | null;
}

export interface PaginateLink {
    url: string;
    label: string;
    active: boolean;
}

export interface Paginate<T> {
    current_page: number;
    data: T[];
    first_page_url: string | null;
    from: number | null;
    last_page: number | null;
    last_page_url: string | null;
    links: PaginateLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    to: number;
    total: number;
}

export interface Post {
    id: number;
    user: User;
    title: string;
    description: string;
    status: 'published' | 'draft';
    slug: string;
    content: string;
    cover_image: string;
    published_at: string | null;
    created_at: string;
    updated_at: string;
    tags?: Tag[];
    [key: string]: unknown;
}

export interface Tag {
    id: number;
    name: string;
}
