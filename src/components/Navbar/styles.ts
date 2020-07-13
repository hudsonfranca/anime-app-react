import styled from 'styled-components';
import { SearchAlt } from '@styled-icons/boxicons-regular';

const baseAlign = `
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const InpuContainer = styled.div`
  width: 100%;
  grid-area: ic;
  ${baseAlign}
`;

export const Menu = styled.ul`
  grid-area: menu;
  ${baseAlign}
  color: var(--white);
  a {
    color: var(--white);
  }
  li {
    cursor: pointer;
    transition: 0.4s;
    :hover,
    :active {
      color: var(--hover1);
    }
  }
`;

export const LoginLogout = styled.ul`
  grid-area: ll;
  ${baseAlign}
  color: var(--white);
  a {
    color: var(--white);
  }
  li {
    cursor: pointer;
    transition: 0.4s;
    :hover,
    :active {
      color: var(--hover1);
    }
  }
`;

export const HamburguerContainer = styled.div`
  ${baseAlign}
  grid-area: hb;
`;

export const LogoContainer = styled.div`
  grid-area: logo;
  ${baseAlign}
`;

export const LogoIconContainer = styled.button`
  grid-area: logo;
  ${baseAlign}
`;

export const SearchButton = styled(SearchAlt)`
  color: var(--white);
  width: 45px;
  height: 45px;
`;

export const SearchButtonContainer = styled.button`
  grid-area: searchButton;
  ${baseAlign}
`;

export const Container = styled.div`
  grid-area: navbar;
  background-color: var(--primary);
  width: 100%;
  height: 60px;
  font-size: 2rem;
  display: grid;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  z-index:20;
  ::after {
    content: '';
    width: 100%;
    height: 5px;
    position: absolute;
    top: 60px;
    background-image: linear-gradient(to right, var(--hover1), var(--hover2));
  }

  @media (min-width: 1000px) {
    grid-template-areas:'logo menu ic ll';
    grid-template-columns: 1fr 2fr 1fr 1fr;
    grid-template-rows:1fr;
    
   ${InpuContainer},${Menu},${LoginLogout}{
     display: flex;
   }

  ${SearchButtonContainer},${HamburguerContainer}{
     display: none;
   }
 }

  @media (max-width: 999px) {
    grid-template-areas:'hb logo searchButton';
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows:1fr;
   ${InpuContainer},${Menu},${LoginLogout}{
     display: none;
   }
 }

 @media (min-width:425px) {
  ${LogoIconContainer} {
     display: none;
   }
   ${LogoContainer} {
     display: flex;
   }
  
  }

  @media (max-width: 424px) {
    ${LogoContainer} {
     display: none;
   }
  
    
  }

`;
