import React, { ReactNode } from 'react';
import { AppContainer } from "./Container.styled"

interface ContainerProps {
  children: ReactNode;
}


const Container: React.FC<ContainerProps> = ({children}) => {
    return <AppContainer>{ children}</AppContainer>
}
export default Container