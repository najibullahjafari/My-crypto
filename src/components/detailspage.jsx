import React, { useEffect } from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCryptoData } from './action';
import '../style/detailpage.css';

function DetailPage() {
  const { cryptoId } = useParams();
  const cryptoData = useSelector((state) => state.cryptoData);
  const crypto = cryptoData.data.find((crypto) => crypto.id === cryptoId);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!cryptoData.data.length) {
      dispatch(fetchCryptoData());
    }
  }, [dispatch, cryptoData.data.length]);

  if (!crypto) {
    return <div className="error-message">Crypto not found</div>;
  }

  return (
    <div className="detail-page">
      <Link to="/" className="home-link">
        <div className="back-button">
          <FontAwesomeIcon icon={faArrowLeft} className="back-icon" />
        </div>
      </Link>
      <table className="crypto-details">
        <tbody>
          <tr>
            <td rowSpan="2">
              <img src={crypto.image} alt={`${crypto.name} Logo`} />
            </td>
            <td>
              <h2>{crypto.name}</h2>
            </td>
          </tr>
          {Object.entries(crypto).map(([key, value]) => (
            <tr key={key}>
              <td>{key.replace(/_/g, ' ').toUpperCase()}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DetailPage;
