import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  color: grey;
  font-weight: 400;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: calc(100% / 5);
  font-size: 20px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.5);
  background-color: grey;
  color: white;
`;
