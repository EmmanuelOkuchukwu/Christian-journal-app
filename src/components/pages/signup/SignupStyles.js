import styled from 'styled-components';

export const RegisterContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const RegisterBackground = styled.div`
  background: rgba(0, 0, 0, 0.6);
  height: 600px;
  width: 400px;
  border-radius: 4px;
`

export const RegisterForm = styled.form`
  width: 100%;
  padding: 35px;
  .input-field {
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #f1f1f1;
  }
  .is-invalid {
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #f1f1f1;
  }
  .invalid-feedback {
    color: red;
  }
  
  .register-btn {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #f1f1f1;
    margin: 15px 0;
    cursor: pointer;
  }
`;
