import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Title, Pokebola, Types } from './styles';

import Normal from '../../asset/Normal.png';
import Fighting from '../../asset/Fighting.png';
import Flying from '../../asset/Flying.png';
import Poison from '../../asset/Poison.png';
import Ground from '../../asset/Ground.png';
import Rock from '../../asset/Rock.png';
import Bug from '../../asset/Bug.png';
import Ghost from '../../asset/Ghost.png';
import Steel from '../../asset/Steel.png';
import Fire from '../../asset/Fire.png';
import Water from '../../asset/Water.png';
import Grass from '../../asset/Grass.png';
import Electric from '../../asset/Electric.png';
import Psychic from '../../asset/Psychic.png';
import Ice from '../../asset/Ice.png';
import Dragon from '../../asset/Dragon.png';
import Dark from '../../asset/Dark.png';
import Fairy from '../../asset/Fairy.png';

const Home: React.FC = () => {
  return (
    <Container>
      <Title>
        <h1>Pokemon Types</h1>
        <p>You can chose type in the Pokebola!!</p>
      </Title>
      <Pokebola>
        <Types>
          <li>
            <Link to={`/${1}/normal`}>
              <img src={Normal} alt="Normal" />
            </Link>
          </li>
          <li>
            <Link to={`/${2}/fighting`}>
              <img src={Fighting} alt="Fighting" />
            </Link>
          </li>
          <li>
            <Link to={`/${3}/flying`}>
              <img src={Flying} alt="Flying" />
            </Link>
          </li>
          <li>
            <Link to={`/${4}/poison`}>
              <img src={Poison} alt="Poison" />
            </Link>
          </li>
          <li>
            <Link to={`/${5}/ground`}>
              <img src={Ground} alt="Ground" />
            </Link>
          </li>

          <li>
            <Link to={`/${6}/rock`}>
              <img src={Rock} alt="Rock" />
            </Link>
          </li>

          <li>
            <Link to={`/${7}/bug`}>
              <img src={Bug} alt="Bug" />
            </Link>
          </li>

          <li>
            <Link to={`/${8}/ghost`}>
              <img src={Ghost} alt="Ghost" />
            </Link>
          </li>

          <li>
            <Link to={`/${9}/steel`}>
              <img src={Steel} alt="Steel" />
            </Link>
          </li>

          <li>
            <Link to={`/${10}/fire`}>
              <img src={Fire} alt="Fire" />
            </Link>
          </li>

          <li>
            <Link to={`/${11}/water`}>
              <img src={Water} alt="Water" />
            </Link>
          </li>

          <li>
            <Link to={`/${12}/grass`}>
              <img src={Grass} alt="Grass" />
            </Link>
          </li>

          <li>
            <Link to={`/${13}/electric`}>
              <img src={Electric} alt="Electric" />
            </Link>
          </li>

          <li>
            <Link to={`/${14}/psychic`}>
              <img src={Psychic} alt="Psychic" />
            </Link>
          </li>

          <li>
            <Link to={`/${15}/ice`}>
              <img src={Ice} alt="Ice" />
            </Link>
          </li>

          <li>
            <Link to={`/${16}/dragon`}>
              <img src={Dragon} alt="Dragon" />
            </Link>
          </li>
          <li>
            <Link to={`/${17}/dark`}>
              <img src={Dark} alt="Dark" />
            </Link>
          </li>
          <li>
            <Link to={`/${18}/fairy`}>
              <img src={Fairy} alt="Fairy" />
            </Link>
          </li>
        </Types>
      </Pokebola>
    </Container>
  );
};

export default Home;
