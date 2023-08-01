import { Stack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

import featuresImage from '../../assets/images/features.png';
import { featuesData } from './data';
import FeaturesCard from './FeaturesCard';

export function Features() {
  return (
    <Root className="container">
      <div className="feature__item">
        <img src={featuresImage} alt="featured coins" />
      </div>

      <div className="feature__item">
        <Stack gap={'20px'}>
          {featuesData?.map((item) => {
            return (
              <FeaturesCard
                key={item.id}
                label={item.label}
                rate={item.rate}
                details={item.details}
                rateLabel={item?.rateLabel}
                variant={item?.variant}
              />
            );
          })}
        </Stack>
      </div>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  .feature__item:first-of-type {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      border-radius: 989px;
      opacity: 0.30000001192092896;
      background: radial-gradient(
        50.72% 50.72% at 47.52% 48.13%,
        #05e1ff 0%,
        #7803ee 48.97%,
        rgba(0, 29, 31, 0) 100%
      );
      z-index: -1;
    }
  }

  @media screen and (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .feature__item {
      width: 45%;
      gap: 75px;
    }
  }
`;
