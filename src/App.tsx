import React from 'react';
import { Layout } from './components/Layout';
import { ResetStyle, GlobalStyle } from './components/GlobalStyle/globalStyle';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

const App: React.FC = () => {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <ReactNotification />
      <Layout />
    </>
  );
};

export default App;
