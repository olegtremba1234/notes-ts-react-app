import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}


const Container: React.FC<ContainerProps> = ({children}) => {
    return <div className='max-w-md mx-auto px-5 sm:max-w-3xl sm:px-8 xl:max-w-7xl'>{ children}</div>
}
export default Container