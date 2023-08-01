import { Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';

import { digitToCurrencyString } from '../../utils';

export function AnalyticsCard({ src, label, value }) {
  return (
    <Root>
      <img src={src} alt="" className="analytics__image" />
      <Flex gap={'8px'} alignItems={'center'} flexDir={'column'}>
        <Text fontWeight={700} fontSize={'var(--fs-text-md)'}>
          {digitToCurrencyString(value, 0)}
        </Text>
        <Text fontSize={'12px'}>{label}</Text>
      </Flex>
    </Root>
  );
}

AnalyticsCard.propTypes = {
  src: PropTypes.any,
  label: PropTypes.string,
  value: PropTypes.number,
};

const Root = styled(Flex)`
  z-index: 1;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(2px);
  flex-direction: column;
  gap: 15px;
  align-items: center;
  border-radius: 16px;
  padding: 25px;

  .analytics__image {
    will-change: filter;
    transition: filter 300ms;

    filter: drop-shadow(0 0 2em #d22bdf);
  }
`;
