import styled from 'styled-components';
// import { Form, Field } from 'formik';

export const Input = styled.input`
  width: 250px;
  padding: 5px;
  font-size: 15px;
`;

export const Form = styled.form`
  width: 350px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const Button = styled.button`
  padding: 8px;
  margin-left: 5px;
  background-color: #6360f7;
  color: #fff;
  border: none;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    background-color: #3936f5;
  }
`;

// export const P = styled.p`
//   color: red;
//   margin-top: 5px;
// `;
