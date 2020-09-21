import React, { useEffect, useState } from 'react';
import SearchBoxLayout from '../../components/SearchBoxLayout';
import VideoGrid from '../../components/VideoGrid';
import { useAuth } from '../../providers/Auth';

const FavoritesPage = () => {
  const { authUser, authenticated } = useAuth();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (authenticated) {
      setFavorites(authUser.favorites);
    }
  }, [authUser, authenticated]);

  const applySearch = (searchText) => {
    const favs = authUser.favorites.filter((fav) =>
      fav.snippet.title.toLowerCase().includes(searchText)
    );
    setFavorites(favs);
  };

  return (
    <SearchBoxLayout searchOnType onSearch={applySearch}>
      <VideoGrid videos={favorites} />
    </SearchBoxLayout>
  );
};

export default FavoritesPage;
