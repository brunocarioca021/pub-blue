import axios from 'axios';
import { Slider } from '../../components/Slider/index';
import { info } from '../../constants/slider';
import { Container } from 'react-bootstrap';
import { CardS } from '../../components/Card';
import { CardContainer } from '../../components/CardContainer';
import { useState, useEffect } from 'react';

export const Main = () => {
  const [pub, setPub] = useState([]);

  const getData = async () => {
    await axios.get('/').then((response) => {
      setPub(response.data);
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
