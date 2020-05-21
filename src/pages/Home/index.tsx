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
            <Link to={`/${1}`}>
              <img src={Normal} alt="Normal" />
            </Link>
          </li>
          <li>
            <Link to={`/${2}`}>
              <img src={Fighting} alt="Fighting" />
            </Link>
          </li>
          <li>
            <Link to={`/${3}`}>
              <img src={Flying} alt="Flying" />
            </Link>
          </li>
          <li>
            <Link to={`/${4}`}>
              <img src={Poison} alt="Poison" />
            </Link>
          </li>
          <li>
            <Link to={`/${5}`}>
              <img src={Ground} alt="Ground" />
            </Link>
          </li>

          <li>
            <Link to={`/${6}`}>
              <img src={Rock} alt="Rock" />
            </Link>
          </li>

          <li>
            <Link to={`/${7}`}>
              <img src={Bug} alt="Bug" />
            </Link>
          </li>

          <li>
            <Link to={`/${8}`}>
              <img src={Ghost} alt="Ghost" />
            </Link>
          </li>

          <li>
            <Link to={`/${9}`}>
              <img src={Steel} alt="Steel" />
            </Link>
          </li>

          <li>
            <Link to={`/${10}`}>
              <img src={Fire} alt="Fire" />
            </Link>
          </li>

          <li>
            <Link to={`/${11}`}>
              <img src={Water} alt="Water" />
            </Link>
          </li>

          <li>
            <Link to={`/${12}`}>
              <img src={Grass} alt="Grass" />
            </Link>
          </li>

          <li>
            <Link to={`/${13}`}>
              <img src={Electric} alt="Electric" />
            </Link>
          </li>

          <li>
            <Link to={`/${14}`}>
              <img src={Psychic} alt="Psychic" />
            </Link>
          </li>

          <li>
            <Link to={`/${15}`}>
              <img src={Ice} alt="Ice" />
            </Link>
          </li>

          <li>
            <Link to={`/${16}`}>
              <img src={Dragon} alt="Dragon" />
            </Link>
          </li>
          <li>
            <Link to={`/${17}`}>
              <img src={Dark} alt="Dark" />
            </Link>
          </li>
          <li>
            <Link to={`/${18}`}>
              <img src={Fairy} alt="Fairy" />
            </Link>
          </li>
        </Types>
      </Pokebola>
    </Container>
  );
};

export default Home;
