import { Flex, Stack, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

import cube from '../../assets/icons/cube.svg';
import laptop from '../../assets/images/laptop.png';
import { digitToCurrencyString } from '../../utils';

export function TradeContest() {
  return (
    <Root>
      <div className="trade__contest">
        <Flex className="trade__contest--item">
          <Stack color={'var(--white)'}>
            <Text fontWeight={700} fontSize={'clamp(3rem, 2.75vw, 3.5rem)'}>
              Trading Contest on
            </Text>
            <Text fontSize={'clamp(1.8rem, 2vw, 2.2rem)'}>Worth of $FTM Tokens</Text>
          </Stack>

          <Flex gap={'16px'} alignItems={'center'}>
            <Flex
              className="fantom"
              gap={'10px'}
              borderRadius={'62px'}
              alignItems={'center'}
              h={'51px'}>
              <img src={cube} alt="" />
              <Text fontSize={'clamp(1.8rem, 2.5vw, 2.8rem)'} fontWeight={700} color={'#0617FF'}>
                fantom
              </Text>
            </Flex>

            <Text fontSize={'42px'} fontWeight={600}>
              {digitToCurrencyString(10000, 0)}
            </Text>
          </Flex>
        </Flex>

        <div className="trade__contest--item">
          <img src={laptop} alt="" />
        </div>
      </div>
    </Root>
  );
}

const Root = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    border-radius: 0px 30px;
    opacity: 0.6000000238418579;
    background: linear-gradient(249deg, #0617ff 0%, #19c8ff 100%);
    z-index: -1;
  }

  color: var(--white);
  margin-top: 50px;
  .trade__contest {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;
    position: relative;
    height: 268px;

    .fantom {
      background-color: #fff !important;
      padding: 7px 17.5px;
    }

    &--item:first-of-type {
      flex-direction: column;
      gap: 16px;
    }

    &--item:last-of-type {
      width: 183px;
      position: absolute;
      top: -45px;
      right: 20px;
    }

    @media screen and (min-width: 645px) {
      &--item:last-of-type {
        width: 300px;
      }
    }

    @media screen and (min-width: 1000px) {
      width: 90%;
      margin: auto;
      flex-direction: row;
      justify-content: flex-start;
      height: 157px;

      &--item:first-of-type {
        gap: 25px;
        flex-direction: row;
        align-items: flex-start;
      }

      &--item:last-of-type {
        top: -55px;
        width: 364px;
      }
    }
  }
`;
