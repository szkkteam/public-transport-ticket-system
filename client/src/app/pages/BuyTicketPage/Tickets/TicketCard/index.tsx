import * as React from 'react';
import styled from 'styled-components/macro';
import { Card } from './Card';

export function TicketCard() {
    return (
        <Container>
            <Card
                title="Single ticket"
                subtitle="In fermentum nunc urna, id laoreet diam"
                onClick={() => null}
            >
                Buy ticket
            </Card>
            <Card
                title="Seasonal pass"
                subtitle="In fermentum nunc urna, id laoreet diam"
                onClick={() => null}
            >
                Buy pass
            </Card>
        </Container>

    )
}

const Container = styled.div`
    display: grid;
    grid-auto-rows: auto;
    gap: 3.125rem;
    justify-content: space-evenly;
    grid-auto-flow: column;
`;
