import { Slider } from '../../components/Slider/index';
import { info } from '../../constants/slider';
import { Container } from 'react-bootstrap';
import { CardS } from '../../components/Card';
import { CardContainer } from '../../components/CardContainer';
import { useState } from 'react';

export const Main = () => {
  const [pub] = useState([]);

  return (
    <>
      <Slider data={info} />
      <Container>
        <CardContainer>
          {pub.map((item) => (
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
