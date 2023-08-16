import axios from 'axios';

export const FETCH_CRYPTO_DATA_REQUEST = 'FETCH_CRYPTO_DATA_REQUEST';
export const FETCH_CRYPTO_DATA_SUCCESS = 'FETCH_CRYPTO_DATA_SUCCESS';
export const FETCH_CRYPTO_DATA_FAILURE = 'FETCH_CRYPTO_DATA_FAILURE';

export const fetchCryptoData = () => async (dispatch) => {
  dispatch({ type: FETCH_CRYPTO_DATA_REQUEST });

  try {
    const response = await axios.get(
      'https://min-api.cryptocompare.com/data/top/totalvolfull',
      {
        params: {
          limit: 20,
          tsym: 'USD',
        },
      },
    );
    dispatch({
      type: FETCH_CRYPTO_DATA_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: FETCH_CRYPTO_DATA_FAILURE, payload: error });
  }
};
