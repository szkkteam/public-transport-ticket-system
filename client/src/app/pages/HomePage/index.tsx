import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { Masthead } from './Masthead';
import { Hero } from './Hero';
import { Sections } from './Sections';
import { Features } from './Features';
import { PageWrapper } from 'app/components/PageWrapper';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <Hero>
            <>
              <h1>Hero section</h1>
              <p>some text</p>
              <button>Buy</button>
            </>
        </Hero>
        <Sections />
      </PageWrapper>
    </>
  );
}
