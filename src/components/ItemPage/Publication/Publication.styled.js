import styled from 'styled-components';

export const Article = styled.article`
  display: flex;
  margin-top: 20px;
  width: 700px;
`;

export const Container = styled.div`
  box-shadow: 0 0 5px;
  border-radius: 5px;
  margin-left: 10px;
  padding: 0 10px;
  background-color: #ededed;
`;

export const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Span = styled.span`
  & + & {
    margin-left: 10px;
  }
`;
