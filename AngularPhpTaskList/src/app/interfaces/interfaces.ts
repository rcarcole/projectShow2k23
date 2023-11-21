export interface Task {
    id?: string;
    title: string;
    description?: string;
    status: boolean;
    created_at?: Date;
    updated_at?: Date;
    category_id: number;
}

export interface Category {
    id: number;
    name: string;
    created_at: Date;
    updated_at: Date;
    owner_id: number;
}

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: Date;
    created_at: Date;
    updated_at: Date;
}