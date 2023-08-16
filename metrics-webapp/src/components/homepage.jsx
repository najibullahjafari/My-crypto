// src/components/HomePage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptoData } from './action';
import '../style/homepage.css';

function HomePage() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.cryptoData);

  useEffect(() => {
    dispatch(fetchCryptoData());
  }, [dispatch]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return (
      <div className="error">
        Error:
        {error.message}
      </div>
    );
  }

  return (
    <div className="crypto-list">
      {data.map((crypto) => (
        <div key={crypto.id} className="crypto-card">
          <img src={crypto.image} alt={`${crypto.name} Logo`} />
          <h2>{crypto.name}</h2>
          <p className="price">
            Price: $
            {crypto.current_price}
          </p>
          <a className="details-link" href={`/crypto/${crypto.id}`}>
            More Details
          </a>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
