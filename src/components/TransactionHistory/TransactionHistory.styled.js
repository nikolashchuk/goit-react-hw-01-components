import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  margin-bottom: 20px;
  width: 100%;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  border-radius: 5px;

  th {
    width: calc(100% / 3);
  }

  td {
    padding: 5px 10px;
    border: 1px solid #eee;
    text-align: left;
  }

  tbody tr:nth-child(odd) {
    background: lightgray;
  }
`;

export const Head = styled.thead`
  background-color: grey;
  color: white;
  height: 40px;
`;
