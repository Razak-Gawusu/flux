import styled from '@emotion/styled';
import React from 'react';

import { AnalyticsCard } from './AnalyticsCard';
import { analyticsData } from './data';

export function AnalyticsList() {
  return (
    <Root>
      <div className="container">
        {analyticsData?.map((item) => {
          return (
            <AnalyticsCard key={item.id} value={item.value} label={item.label} src={item.src} />
          );
        })}
      </div>
    </Root>
  );
}

const Root = styled.div`
  padding-top: 100px;

  background: linear-gradient(180deg, rgba(1, 1, 64, 0) 0%, #010140 100%);
  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    @media screen and (min-width: 800px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
