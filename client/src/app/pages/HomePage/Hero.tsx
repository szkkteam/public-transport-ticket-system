import * as React from 'react';
import styled from 'styled-components/macro';

export function Hero({children, ...props}) {

    return (
        <Wrapper>
            <HeroImage>
                <HeroText>
                    {children}
                </HeroText>
            </HeroImage>
        </Wrapper>
    )
}

const HeroImage = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://picsum.photos/1200/320");
    height: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`

const HeroText = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${p => p.theme.text};
`

const Wrapper = styled.main`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 320px;
`;
