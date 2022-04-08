import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from 'app/components/PageWrapper';
import { NavBar } from 'app/components/NavBar';

export function MyTicketsPage() {
    return (
        <>
            <Helmet>
                <title>My tickets</title>
                <meta
                    name="description"
                    content="Browse your tickets"
                />
            </Helmet>
            <NavBar />
            <PageWrapper>
                <div>My Tickets Page tldr...</div>
            </PageWrapper>
        </>
    )
}