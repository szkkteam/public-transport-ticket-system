import * as React from 'react';
import styled from 'styled-components/macro';

import { Link as LinkBase } from 'app/components/Link';

export function ListItem({to, children, ...props}) {
    return (
        <Item>
            <Link
                to={to}
            >
                test
            </Link>
        </Item>
    )
}


const Item = styled.li`
    padding: 0 2.25rem;
`


const Link = styled(LinkBase)`
  color: ${p => p.theme.primary};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }

  .icon {
    margin-right: 0.25rem;
  }
`;