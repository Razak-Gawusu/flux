import { Stack, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

export default function FeaturesCard({ label, details, rate, rateLabel, variant }) {
  return (
    <Root className={variant}>
      <Stack className="feature__card--item">
        <Text fontSize={'clamp(1.2rem, 1.75vw, 1.8rem)'}>{rateLabel}</Text>
        <Text fontSize={'clamp(3rem, 3vw, 4.5rem)'} fontWeight={700}>
          {rate}
        </Text>
      </Stack>
      <Stack className="feature__card--item">
        <Text fontWeight={700} fontSize={'clamp(1.8rem, 2.25vw, 2.5rem)'}>
          {label}
        </Text>
        <Text fontWeight={300} fontSize={'clamp(1.4rem, 2vw, 1.8rem)'}>
          {details}
        </Text>
      </Stack>
    </Root>
  );
}

const Root = styled.div`
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 25px;
  opacity: 0.8999999761581421;

  &.first {
    background: linear-gradient(130deg, #38bf68 0%, #a64bb9 100%);
  }
  &.second {
    background: linear-gradient(237deg, #24f2ff 0%, rgba(210, 43, 223, 0.99) 100%);
  }
  &.third {
    background: linear-gradient(237deg, #eaa640 0%, rgba(210, 43, 223, 0.99) 100%);
  }
  padding: 8px 16px;
  height: 110px;

  .feature__card--item: first-of-type {
    width: 25%;
  }
  .feature__card--item: last-of-type {
    width: 75%;
  }
`;
