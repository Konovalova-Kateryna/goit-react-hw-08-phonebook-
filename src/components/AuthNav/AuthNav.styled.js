import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navlink = styled(NavLink)`
  &:active,
  &:hover,
  &:focus {
    color: violet;
  }
`;
