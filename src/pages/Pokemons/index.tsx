import React, { useEffect, useState } from 'react';

import { RouteComponentProps } from 'react-router-dom';
import axios from 'axios';

import {
  Container,
  Header,
  Pokemon,
  Loading,
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

type PropsI = RouteComponentProps<{ id: string; type: string }>;

const Pokemons: React.FC<PropsI> = ({ match }) => {
  const [pokemons, setPokemons]: any[] = useState([]);
  const [types, setTypes]: any[] = useState([]);

  const url = 'https://pokeapi.co/api/v2';

  useEffect(() => {
    async function loadPokemons(): Promise<any> {
      const { type } = match.params;

      setTypes(type);

      const typeReturn = await axios.get(`${url}/type/${type}`);

      const getPokemonName = await typeReturn.data.pokemon;

      console.log(getPokemonName.length);

      //  async function getPokemons(name: string): Promise<any> {
      //   const getInfo = await axios.get(`${url}/pokemon/${name}`);
      //   await infoPokemons.push(getInfo.data);
      // }

      const names: any = [];

      for (let x = 0; x < getPokemonName.length; x++) {
        const { name } = getPokemonName[x].pokemon;

        names.push(name);
        // getPokemons(name);
      }

      const teste = await Promise.all(
        names.map(async (index: any) => {
          const response = await axios.get(`${url}/pokemon/${index}`);

          return response.data;
        }),
      );

      return setPokemons(teste);
    }
    loadPokemons();
  }, [match.params]);

  return (
    <Container>
      <Header>
        <h1>Pokemons List</h1>
        <p>{`this is all pokemon type ${types}`}</p>
      </Header>

      <ContainerList>
        {!pokemons.length && (
          <Loading>
            <img src={PokebolaImg} alt="Pokebola" />
          </Loading>
        )}
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
