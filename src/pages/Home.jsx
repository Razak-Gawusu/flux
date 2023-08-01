import { Stack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

import desktopImage from '../assets/images/desktop-bg-image.png';
import mobileImage from '../assets/images/mobile-bg-image.png';
import { AnalyticsList, Features, Header, Hero, TradeContest } from '../components';
import { useWindowTracker } from '../hooks';

export function Home() {
  const { windowWidth } = useWindowTracker();
  return (
    <Root>
      <HeadHero className="header__hero" mobile={windowWidth < 800 ? true : false}>
        <Header />
        <Hero />
        <AnalyticsList />
      </HeadHero>
      <TradeContest />
      <Features />
    </Root>
  );
}

const Root = styled(Stack)`
  gap: 55px;

  @media screen and (min-width: 800px) {
    gap: 100px;
  }
`;

const HeadHero = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: '#161342';
    background-repeat: no-repeat;
    background-position-x: right;
    background-image: ${(props) => (props.mobile ? `url(${mobileImage})` : `url(${desktopImage})`)};
    opacity: 0.6000000238418579;
    background-size: cover;
    z-index: -1;
  }
`;
