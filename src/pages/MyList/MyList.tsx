import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Container, Title, Ul, Li, Image, Description, Button } from './styles';

export interface MyListProps {
  id: number;
  animeId: number;
  myListId: number;
  createdAt: string;
  updatedAt: string;
  anime: {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    debutDate: string;
    description: string;
    images: {
      id: number;
      name: string;
      createdAt: string;
      updatedAt: string;
      path: string;
      url: string;
    }[];
  };
}

const MyList: React.FC = () => {
  const [myList, setMyList] = useState<MyListProps[]>([]);

  async function loadMyList() {
    try {
      const { data } = await api.get('/mylist', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('authentication')}`,
        },
      });
      if (data) {
        setMyList(data.animesToMyList);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadMyList();
  }, []);

  return (
    <Container data-test="home-container">
      <Title>My list</Title>

      <Ul data-test="latest-episodes">
        {myList &&
          myList.map((anime) => (
            <Li key={anime.id}>
              <Image src={anime.anime.images[0].url} />
              <Description>
                {anime.anime.name}

                <small> {anime.anime.description}</small>
                <Button>Remove</Button>
              </Description>
            </Li>
          ))}
      </Ul>
    </Container>
  );
};

export default MyList;
