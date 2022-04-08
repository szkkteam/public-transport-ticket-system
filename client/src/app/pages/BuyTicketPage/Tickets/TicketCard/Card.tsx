import * as React from 'react';
import styled from 'styled-components/macro';

export function Card({
    title,
    subtitle,
    children,
    onClick,
    ...props
}) {
    return (
        <CardContainer>
            <Img />
            <Body>
                <Title>{title}</Title>
                <P>{subtitle}</P>
                <Button
                    onClick={onClick}
                >
                    {children}
                </Button>
            </Body>
        </CardContainer>

    )
}

const Img = styled.img`
    height: 180px;
    width: 100%;
    display: block;
    border-top-left-radius: calc(0.25rem - 1px);
`;

const Body = styled.div`
    flex: 1 1 auto;
    padding: 1.25rem;
`;

const Title = styled.h5`
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
`;

const P = styled.p`
    margin-top: 0;
    margin-bottom: 1rem;
`;

const Button = styled.button`
    width: 100%;
    color: ${p => p.theme.text};
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
`;

const CardContainer = styled.div`
    width: 18rem;
    poisiton: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 0.25rem;
`;