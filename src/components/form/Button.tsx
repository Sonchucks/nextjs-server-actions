import { cn } from '@/lib/utils';
import * as React from 'react';
import { IconType } from 'react-icons';

interface IButtonProps {
    label: string;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    className?: string;
    icon?: IconType;
    type?: 'submit' | 'reset' | 'button' | undefined;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<IButtonProps> = ({
    label,
    disabled,
    outline,
    small,
    className,
    icon: Icon,
    type,
    onClick,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={cn('disabled:opacity-70 disabled:cursor-not-allowed rounded-md hover:opacity-80, transition w-auto border-slate-300 flex items-center justify-center gap-2 py-3 px-5 border-2 bg-slate-700 text-white my-2',
                outline && 'bg-transparent text-slate-700',
                small && 'text-sm py-1 px-2 border-[1px]',
                className && className
            )}
        >
            {Icon && <Icon size={20} />}
            {label}
        </button>
    )
};

export default Button;