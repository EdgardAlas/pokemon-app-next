import { NextPage } from 'next';
import { useState } from 'react';
import { Layout } from '../../components/layouts/Layout';
import { FavoritePokemons } from '../../components/pokemons';
import { NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';

const Favorites: NextPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>(
    localFavorites.pokemons
  );

  return (
    <Layout title='Pokémons - Favoritos'>
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default Favorites;
