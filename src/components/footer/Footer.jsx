import { Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/icons/flux-main-logo.svg';
import { FacebookIcn, InstagramIcon, TwitterIcon } from '../index';

export function Footer() {
  return (
    <Root>
      <Flex className="footer__top">
        <Flex className="footer__top--item">
          <img src={logo} alt="" />
        </Flex>

        <Flex className="footer__top--item">
          <Link className="link" to={'#'}>
            Getting started
          </Link>
          <Link to={'#'}>Support</Link>
          <Link to={'#'}>FAQ</Link>
          <Link to={'#'}>Terms of Service</Link>
        </Flex>
      </Flex>
      <Flex className="footer__bottom">
        <Flex className="footer__bottom--item">
          <Link to={'#'}>
            <TwitterIcon className="icon" />
          </Link>
          <Link to={'#'}>
            <FacebookIcn className="icon" />
          </Link>
          <Link to={'#'}>
            <InstagramIcon className="icon" />
          </Link>
        </Flex>
        <Flex className="footer__bottom--item">
          <Text fontSize={'var(--fs-text-sm)'}>Copyright © 2023 Flux. All Rights Reserved.</Text>
        </Flex>
      </Flex>
    </Root>
  );
}

const Root = styled.div`
  padding-top: 65px;
  color: #a8afd6;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    border-radius: 1591px;
    opacity: 0.28999999165534973;
    background: radial-gradient(
      50.72% 50.72% at 47.52% 48.13%,
      #371ba0 0%,
      #3217a0 48.97%,
      rgba(29, 11, 104, 0) 100%
    );
    z-index: -1;
  }
  .footer__top {
    flex-direction: column;
    &--item {
      gap: 30px;
      justify-content: center;
      &:first-of-type {
        padding: 20px 0;
      }
      &:last-of-type {
        padding: 30px 0;
      }
    }
  }

  .footer__bottom {
    border-top: solid 1px #a8afd6;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 30px 0;
    justify-content: space-between;

    &--item:first-of-type {
      gap: 20px;
      .icon {
        color: #a8afd6;
        &:hover {
          color: var(--grey-150);
        }
      }
    }
  }
`;
