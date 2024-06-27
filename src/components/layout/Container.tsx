import * as React from 'react';

interface IContainerProps {
    children: React.ReactNode
};

const Container: React.FC<IContainerProps> = ({children}) => {
    return (
        <div className='max-w-[1920px] w-full mx-auto px-4 py-4 xl:px-20'>
            {children}
        </div>
    )
};

export default Container;