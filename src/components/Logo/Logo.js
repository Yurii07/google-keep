import React from 'react';
import styled from 'styled-components';
import { DingdingOutlined } from '@ant-design/icons';

const LogoWrapper = styled.div`
  color: var(--color-white);
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.2rem;
  padding: 1rem;
`;

const Logo = () => {
  return <LogoWrapper><DingdingOutlined style={{fontSize: '30px'}}/> </LogoWrapper>;
};

export default Logo;
