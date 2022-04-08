import * as React from 'react';
import styled from 'styled-components/macro';
import { Title } from '../components/Title';
import { Lead } from '../components/Lead';
import { SubTitle } from '../components/SubTitle';
import { P } from '../components/P';
import { A } from 'app/components/A';

export function Sections() {
    return (
        <>
            <Title as="h2">Lorem ipsum dolor sit amet,</Title>
            <Lead>Curabitur laoreet molestie purus, quis rutrum enim fringilla a. Praesent id pellentesque dui, eu pellentesque diam</Lead>
            <List>
              <Feature>
                <Content>
                    <SubTitle>Nam a tempor erat</SubTitle>
                    <ImageLeft  />
                    <P>Nulla facilisi. Integer ut elementum augue. Suspendisse eget erat mattis, finibus ex ac, finibus magna. Morbi facilisis venenatis enim et scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi imperdiet blandit varius. Duis placerat lobortis neque eu pretium.</P>
                </Content>
              </Feature>
              <Feature>
                <Content>
                    <SubTitle>Nam a tempor erat</SubTitle>
                    <ImageRight  />
                    <P>Nulla facilisi. Integer ut elementum augue. Suspendisse eget erat mattis, finibus ex ac, finibus magna. Morbi facilisis venenatis enim et scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi imperdiet blandit varius. Duis placerat lobortis neque eu pretium.</P>
                </Content>
              </Feature>
              <Feature>
                <Content>
                    <SubTitle>Nam a tempor erat</SubTitle>
                    <ImageLeft  />
                    <P>Nulla facilisi. Integer ut elementum augue. Suspendisse eget erat mattis, finibus ex ac, finibus magna. Morbi facilisis venenatis enim et scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi imperdiet blandit varius. Duis placerat lobortis neque eu pretium.</P>
                </Content>
              </Feature>
            </List>
        </>
    )
}

const ImageLeft = styled.div`
    width: 120px;
    height: 120px;
    float: left;
    margin-right: 2.25rem;
    background: black;
`

const ImageRight = styled.div`
    width: 120px;
    height: 120px;
    float: right;
    margin-left: 2.25rem;
    background: black;
`

const Feature = styled.li`
  display: flex;
  margin: 6.25rem 0 6.25rem 2.25rem;

  .feature-icon {
    width: 6.25rem;
    height: 6.25rem;
    margin-right: 2.25rem;
    flex-shrink: 0;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const List = styled.ul`
  padding: 0;
  margin: 6.25rem 0 0 0;
`;
