import styled from 'styled-components';

export const HomeSection = styled.div`
  width: 100%;
  
  background: #efefef;
`;

export const CardSectionTitle = styled.p`
  margin: 40px;

  color: #575757;
  font-family: robotoBold;
  font-size: 22px;
`;

export const ProductCard = styled.div`
  width: 15vw;
  height: 400px;
  margin: 40px;

  display: flex;
  flex-direction: column;

  border-radius: 10px;

  -webkit-box-shadow: 4px 1px 15px -7px rgba(0,0,0,0.2); 
  box-shadow: 4px 1px 15px -7px rgba(0,0,0,0.2);
`;

export const CardActions = styled.div`
  margin: 15px;

  display: flex;
  justify-content: space-between;
`;

