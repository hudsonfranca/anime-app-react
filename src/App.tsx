import React from 'react';
import { Layout } from './components/Layout';
import { ResetStyle, GlobalStyle } from './components/GlobalStyle/globalStyle';

const App: React.FC = () => {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <Layout />
    </>
  );
};

export default App;
