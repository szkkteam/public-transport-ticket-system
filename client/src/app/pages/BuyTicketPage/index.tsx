import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from 'app/components/PageWrapper';
import { NavBar } from 'app/components/NavBar';
import { Masthead } from './Masthead';
import { Tickets } from './Tickets';

export function BuyTicketPage() {
    return (
        <>
            <Helmet>
                <title>Buy ticket</title>
                <meta
                    name="description"
                    content="Buy tickets in a decentralized trustless way"
                />
            </Helmet>
            <NavBar />
            <PageWrapper>
                <Masthead />
                <Tickets />
            </PageWrapper>
        </>
    )
}