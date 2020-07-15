import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import {
  Container,
  LatestEpisodes,
  Title,
  PaginationContainer,
} from './styles';
import { Card } from '../../components/Card';
import { Pagination } from '../../components/Pagination';

export interface EpisodeProps {
  id: number;
  name: string;
  path: string;
  createdAt: string;
  updatedAt: string;
  url: string;
  thumbnail: {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    url: string;
  };
}

const Home: React.FC = () => {
  const [skip, setSkip] = useState(0);
  const [episodes, setEpisodes] = useState<EpisodeProps[]>([]);
  const [take, setTake] = useState(20);
  const [count, setCount] = useState(0);

  async function loadEpisodes() {
    try {
      const { data } = await api.get('/episode', {
        params: {
          take,
          skip,
        },
      });
      if (data) {
        setEpisodes(data.episodes);
        setCount(data.count);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    loadEpisodes();
  }, [current]);

  const onChange = (page: number, pageSize: number) => {
    setCurrent(page);
    if (page === 1) {
      setSkip(0);
    } else {
      setSkip((page - 1) * take);
    }
  };

  return (
    <Container data-test="home-container">
      <Title>Latest episodes</Title>

      <LatestEpisodes data-test="latest-episodes">
        {episodes &&
          episodes.map((episode) => (
            <Card
              episodeTitle={episode.name}
              imgBackground={episode.thumbnail.url}
              key={episode.id}
            />
          ))}
      </LatestEpisodes>
      <PaginationContainer data-test="pagination-container">
        <Pagination
          data-test="pagination"
          current={current}
          onChange={onChange}
          total={count}
          pageSize={take}
        />
      </PaginationContainer>
    </Container>
  );
};

export default Home;
