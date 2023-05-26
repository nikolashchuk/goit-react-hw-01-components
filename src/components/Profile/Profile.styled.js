import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 8px;
  margin: 0 auto;
  align-items: center;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  border-radius: 5px;

  img {
    width: 100%;
  }
`;

export const Name = styled.h2`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`;

export const Info = styled.p`
  text-align: center;
  font-size: 20px;
  color: grey;
`;

export const List = styled.ul`
  display: flex;
  gap: 8px;
  padding: 0;
  justify-content: space-around;
  width: 100%;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  width: calc((100% - 16px) / 3);
  border: 1px solid grey;
  border-radius: 5px;

  p {
    color: gray;
    margin: 0;
  }

  span {
    font-weight: bold;
  }
`;
