import React from 'react';

import { Container, Form, ButtonSubmit, SearchInput } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Form>
        <SearchInput />
        <SearchInput />
        <ButtonSubmit>Sign In</ButtonSubmit>
        <strong>Don&apos;t have an account? Create one</strong>
      </Form>
    </Container>
  );
};

export default Home;
