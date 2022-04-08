import * as React from 'react';
import styled from 'styled-components/macro';
import { Title } from './components/Title';
import { Lead } from './components/Lead';
import { A } from 'app/components/A';
 
export function Masthead() {
  return (
    <Wrapper>
      <Title>Etiam non commodo sem, quis condimentum orci</Title>
      <Lead>
        Duis dolor felis, mollis sed enim vel, bibendum laoreet neque. Donec blandit, turpis at venenatis interdum, lorem lorem feugiat orci, sed consectetur tortor nunc nec augue. Phasellus aliquam orci ut eleifend semper
      </Lead>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 320px;
`;
