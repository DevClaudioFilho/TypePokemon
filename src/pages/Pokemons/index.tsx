import React, { useEffect, useState } from 'react';

import api from '../../service/api';

import {
  Container,
  Header,
  Pokemon,
  ContainerList,
  Pokebola,
  Stats,
} from './styles';

import PokebolaImg from '../../asset/pokebola.jpeg';

interface PokemonI {
  id: number;
  name: string;
  types: Array<Record<string, any>>;
  sprites: Record<string, any>;
  weight: number;
  height: number;
}

const Pokemons: React.FC = () => {
  const [pokemons, setPokemons]: any[] = useState([]);

  useEffect(() => {
    async function loadPokemons(): Promise<any> {
      // const { id } = props.match.params;

      const typeReturn = await api.get(`type/1/`);

      const getPokemonName = await typeReturn.data.pokemon;

      const infoPokemons = [];

      for (let i = 0; i < getPokemonName.length; i++) {
        const { name } = getPokemonName[i].pokemon;
        const getInfo = await api.get(`pokemon/${name}`);

        infoPokemons.push(getInfo.data);
      }

      return setPokemons(infoPokemons);
    }
    loadPokemons();
  }, []);

  return (
    <Container>
      <Header>
        <h1>Pokemons tipo teste</h1>
        <p>this is all pokemon type teste</p>
      </Header>

      <ContainerList>
        <Pokemon>
          {pokemons.map((pokemon: PokemonI) => (
            <li key={pokemon.id}>
              <div>
                <h1>{`Nº ${pokemon.id}`}</h1>
                <h2>{pokemon.name.toUpperCase()}</h2>
                <p>{pokemon.types.map(i => `${i.type.name}  `)}</p>
              </div>

              {`${pokemon.sprites.front_default}` === 'null' && (
                <Pokebola src={PokebolaImg} alt={pokemon.name} />
              )}

              {`${pokemon.sprites.front_default}` !== 'null' && (
                <img
                  src={`${pokemon.sprites.front_default}`}
                  alt={pokemon.name}
                />
              )}
              <Stats>
                <p>{`Weight:  ${pokemon.weight / 10}Kg`}</p>
                <p>{`Height:  ${pokemon.height / 10}m`}</p>
              </Stats>
            </li>
          ))}
        </Pokemon>
      </ContainerList>
    </Container>
  );
};

export default Pokemons;
