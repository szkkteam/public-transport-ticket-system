import * as React from 'react';
import styled from 'styled-components/macro';

export function Copyright() {
    return (
        <P>
            Company Name © 2018
        </P>
    )
}

const P = styled.p`
    color: ${p => p.theme.primary};
    margin-top: 15px;
    text-align: center;
    margin-bottom: 0;
`
