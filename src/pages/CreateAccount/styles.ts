import styled from 'styled-components';

interface InputProps {
  error: string | undefined;
}

interface TextProps {
  error: string | undefined;
}

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--tertiary);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  color: var(--white);
`;

export const Form = styled.form`
  width: 330px;
  height: 380px;
  background-color: var(--primary);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: ${({ error }) => (error ? '1px solid var(--red)' : 'none')};
  transition: 0.4s;
  font-size: 1.6rem;
  background-color: var(--white);
  padding-left: 5px;

  :focus {
    outline: none !important;
    border: none;
    box-shadow: ${({ error }) =>
      error ? '0 0 7px  var(--red)' : '0 0 9px var(--hover1)'};
  }
`;

export const ButtonSubmit = styled.button`
  border-radius: 10px;
  width: 80%;
  height: 40px;
  transition: 0.4s;
  color: var(--white);
  font-size: 1.6rem;
  background-image: linear-gradient(45deg, var(--hover1), var(--hover2));
  :hover,
  :active {
    background-image: linear-gradient(-45deg, var(--hover1), var(--hover2));
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-size: 0.8em;
  margin: 0.5em 0;
  position: relative;
  width: 80%;
  height: 58px;
`;

export const Text = styled.p<TextProps>`
  color: ${({ error }) => (error ? 'var(--red)' : 'var(--white)')};
  width: 80%;
  height: 10px;
  margin-top: 4px;
  font-size: 1.4rem;
`;

export const Title = styled.p`
  color: var(--white);

  font-size: 2rem;
`;
