import axios from 'axios';
import { Slider } from '../../components/Slider/index';
import { info } from '../../constants/slider';
import { Container } from 'react-bootstrap';
import { CardS } from '../../components/Card';
import { CardContainer } from '../../components/CardContainer';
import { useState, useEffect } from 'react';

export const Main = () => {
  const [games, setGames] = useState([]);

  const getData = async () => {
    await axios.get('/game').then((response) => {
      setGames(response.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Slider data={info} />
      <Container>
        <CardContainer>
          {games.map((item) => (
            <a href="!#" key={item.id}>
              <CardS>
                <CardS.Img variant="top" src={item.imageUrl} />
              </CardS>
            </a>
          ))}
        </CardContainer>
      </Container>
    </>
  );
};
