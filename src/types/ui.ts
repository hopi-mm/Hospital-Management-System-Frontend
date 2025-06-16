// select component props type

export interface SelectOption {
    value: string;
    label: string;
}

export interface SelectProps {
    placeholder?: string;
    options: SelectOption[];
}


// card component props type
export interface CardProps {
    title?: string;
    description?: string;
}


