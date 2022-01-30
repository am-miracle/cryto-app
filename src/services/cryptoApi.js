// jshint esversion: 9
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// const baseUrl = process.env.COINRANKING_RAPID_API_URL;

const cryptoApiHeader = {
  'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
  'x-rapidapi-key': process.env.REACT_APP_CRYPTO_API_KEY
};

const createRequest = (url) => ({ url, headers: cryptoApiHeader});

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CRYPTO_API_URL }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    })
  })
});

export const { useGetCryptosQuery } = cryptoApi;