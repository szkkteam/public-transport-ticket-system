import * as React from 'react';
import styled from 'styled-components/macro';

export function TicketFrame({
    children,
    ...props
}) {

    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    
`;