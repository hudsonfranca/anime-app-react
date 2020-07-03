import React from 'react';
import { Layout } from './components/Layout';
import { ResetStyle, GlobalStyle } from './components/GlobalStyle/globalStyle';

const App: React.FC = () => {
  return (
    <div className="App">
      <ResetStyle />
      <GlobalStyle />
      <Layout />
    </div>
  );
};

export default App;
