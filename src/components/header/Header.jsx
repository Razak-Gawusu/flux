import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/icons/flux-main-logo.svg';
import header from '../../assets/icons/header.svg';
import menu from '../../assets/icons/menu.svg';

export function Header() {
  return (
    <Root>
      <Flex className="header container">
        <Flex gap={'15px'} className="header__item">
          <img src={menu} alt="" className="menu--icon" />
          <img src={logo} alt="" />
        </Flex>
        <nav>
          <Link to={'#'}>Home</Link>
          <Link to={'#'}>Dashboard</Link>
          <Link to={'#'}>Referrals</Link>
          <Link to={'#'}>About Us</Link>
          <Link to={'#'}>Launch App</Link>
        </nav>
      </Flex>
    </Root>
  );
}

const Root = styled.div`
  background-image: ${`url(${header})`};

  .header {
    padding: 25px 0;
    justify-content: space-between;
  }

  nav {
    display: none;
    align-items: center;
    gap: 45px;

    a:hover {
      color: var(--white);
    }

    a:last-of-type {
      padding: 10px 25px;
      border-radius: 8px;
      background: linear-gradient(77deg, #c521c8 0%, #299bd0 100%);
      color: #fff;
      font-weight: 700;
    }
  }

  @media screen and (min-width: 800px) {
    .menu--icon {
      display: none;
    }

    nav {
      display: flex;
    }
  }
`;
