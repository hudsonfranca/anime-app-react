import React from 'react';

import { Container, Thumb, Title } from './styles';

interface Props {
  imgBackground: string;
  animeTitle?: string;
  episodeTitle: string;
}

const Card: React.FC<Props> = ({ animeTitle, imgBackground, episodeTitle }) => {
  return (
    <Container>
      <Thumb imgBackground={imgBackground} />
      <Title>{episodeTitle}</Title>
    </Container>
  );
};

export default Card;
