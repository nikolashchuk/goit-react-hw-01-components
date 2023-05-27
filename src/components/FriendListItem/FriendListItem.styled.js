import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  padding-left: 25px;
  max-width: 350px;
  font-size: 24px;

  border: 1px solid grey;
  border-radius: 5px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;

export const Indicator = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;
