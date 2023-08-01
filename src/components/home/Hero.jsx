import { Flex, Stack, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

import logo from '../../assets/images/flux-logo.png';
import heroImage from '../../assets/images/group-coins.png';

export function Hero() {
  return (
    <Root className="container">
      <Stack className="hero__item" gap={'16px'}>
        <Stack gap={'16px'}>
          <Flex alignItems={'center'} gap={'12.5px'} className="hero__image">
            <img src={logo} alt="" />
            <Text fontSize={'clamp(2.6rem, 2.5vw, 3.4rem)'} fontWeight={600}>
              FluxLP
            </Text>
          </Flex>
          <Text fontSize={'clamp(3rem, 3vw, 3.8rem)'} fontWeight={600}>
            The only Token That Defines Our Ecosystem
          </Text>
          <Text fontSize={'clamp(1.8rem, 2vw, 2.2rem)'}>
            {`FluxLP is the liquidity provider token. Accrues 70% of the platform's generated fees.`}
          </Text>
        </Stack>
        <Flex fontSize={'clamp(1.8rem, 2.2vw, 2.5rem)'} fontWeight={700} gap={'52px'}>
          <Text width={'50%'}>Fantom APR: 81.91%</Text>
          <Text width={'50%'}>Zksync Era APR: 81.89%</Text>
        </Flex>

        <Flex gap={'20px'}>
          <CustomButton primary>Buy on Fantom</CustomButton>
          <CustomButton secondary>Buy on Zksync</CustomButton>
          <CustomButton tertiary>
            Buy on Aurora
            <div className="coming--soon">coming soon</div>
          </CustomButton>
        </Flex>
      </Stack>

      <Stack className="hero__item">
        <img src={heroImage} alt="coins" />
      </Stack>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  gap: 50px;
  flex-direction: column-reverse;
  padding: 50px 0;

  @media screen and (min-width: 800px) {
    padding: 100px 0;

    flex-direction: row;
    .hero__item:last-of-type {
      img {
        width: 100%;
        margin: 0;
      }
    }
  }

  .hero__item:first-of-type {
    .hero__image {
      width: clamp(4.4rem, 5vw, 7.5rem);
    }
  }
`;

const CustomButton = styled.div`
  flew-grow: 1;
  position: relative;
  padding: 20px 25px;
  border-radius: 15px;
  background: linear-gradient(77deg, #0065ff 0%, #299bd0 100%);
  font-weight: 700;

  background: ${(props) =>
    props.secondary ? 'linear-gradient(73deg, #8CABFC 0%, #4E5F9A 100%)' : ''};

  background: ${(props) =>
    props.tertiary ? 'linear-gradient(77deg, #6FC850 0%, #3E9521 100%)' : ''};

  .coming--soon {
    position: absolute;
    background-color: #e6bc24;
    bottom: -10px;
    left: 15%;
    right: 15%;
  }
`;
