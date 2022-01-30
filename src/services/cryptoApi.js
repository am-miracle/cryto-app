// jshint esversion: 9
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// const baseUrl = process.env.COINRANKING_RAPID_API_URL;

const cryptoApiHeader = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '129b2fc319msh341b23a0412e0abp1dab02jsn64e71a25960c'
};

const createRequest = (url) => ({ url, headers: cryptoApiHeader});

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://coinranking1.p.rapidapi.com' }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    })
  })
});

export const { useGetCryptosQuery } = cryptoApi;