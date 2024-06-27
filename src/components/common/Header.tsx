import { cn } from '@/lib/utils';
import * as React from 'react';

interface IHeaderProps {
    title: string;
    center?: boolean;
    large?: boolean;
};

const Header: React.FC<IHeaderProps> = ({
    title,
    center,
    large
}) => {
    return (
        <div className={center ? 'text-center' : 'text-start'}>
            <h1 className={cn('font-bold text-2xl my-2', large && 'text-4xl')}>
                {title}
            </h1>
        </div>
    )
};

export default Header;