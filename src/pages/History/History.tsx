import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Container, Title, Ul, Li } from './styles';

export interface HistoryProps {
  id: number;
  episodeId: number;
  historyId: number;
  createdAt: string;
  updatedAt: string;
  episode: {
    id: number;
    name: string;
    path: string;
    createdAt: string;
    updatedAt: string;
    url: string;
  };
}

const History: React.FC = () => {
  const [history, setHistory] = useState<HistoryProps[]>([]);

  async function loadHistory() {
    try {
      const { data } = await api.get('/history', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('authentication')}`,
        },
      });
      if (data) {
        setHistory(data.episodeToHistory);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadHistory();
  }, []);
  console.log(history);
  return (
    <Container data-test="home-container">
      <Title>History</Title>

      <Ul data-test="latest-episodes">
        {history &&
          history.map((episode) => (
            <Li key={episode.id}>{episode.episode.name}</Li>
          ))}
      </Ul>
    </Container>
  );
};

export default History;
