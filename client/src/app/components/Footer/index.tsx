import * as React from 'react';
import styled from 'styled-components/macro';
import { ListItem } from './ListItem';
import { Copyright } from './Copyright';
import { StyleConstants } from 'styles/StyleConstants';

export function Footer() {
    return (
        <Wrapper>
            <footer>
                <List>
                    <ListItem to={process.env.PUBLIC_URL + '/'}>
                        Home
                    </ListItem>
                </List>
                <Copyright />
            </footer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 3.125rem 0;
    height: ${StyleConstants.FOOTER_HEIGHT};
`

const List = styled.ul`
    padding: 0;
    list-style: none;
    text-align: center;
    margin-bottom: 0;
`