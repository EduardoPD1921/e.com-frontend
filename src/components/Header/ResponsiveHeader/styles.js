import styled from 'styled-components';

export const MobileMenu = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;

  color: #efefef;
  font-size: 15px;

  z-index: 100;

  background: #ffa54a;

  /* Animação */
  max-height: ${props => props.isOpen ? '500px' : '0'};
  transition: ${props => props.isOpen ? 'max-height 0.25s ease-in' : 'max-height 0.15s ease-out'};
  overflow: hidden;
`;