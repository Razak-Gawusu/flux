import styled from '@emotion/styled';
import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../components';

export function WebsiteLayout() {
  return (
    <Root mobile>
      <Outlet />
      <Footer />
    </Root>
  );
}

const Root = styled.div``;
