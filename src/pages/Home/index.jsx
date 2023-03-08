import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Logo } from 'components/Logo';
import { Searchbar } from 'components/Searchbar';
import { CharactersList } from 'components/CharactersList';

import { getAllCharacters, getCharacterByName } from 'services/rick&mortyAPI';

import css from './Home.module.css';

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query');

  useEffect(() => {
    if (!queryParam) {
      const getResults = async () => {
        const data = await getAllCharacters();
        setCharacters(data.results);
      };
      getResults();
      return;
    }
    const getResults = async query => {
      const data = await getCharacterByName(query);
      setCharacters(data.results);
    };
    getResults(queryParam);
  }, [queryParam]);

  const filterCharacters = query => {
    setSearchParams({ query });
  };

  return (
    <main>
      <div className={css.container}>
        <Logo />
        <section>
          <Searchbar onSubmit={filterCharacters} />
          <CharactersList items={characters} />
        </section>
      </div>
    </main>
  );
};
