import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// const baseUrl = process.env.COINRANKING_RAPID_API_URL;

const cryptoNewsHeader = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '129b2fc319msh341b23a0412e0abp1dab02jsn64e71a25960c'
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeader});

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://bing-news-search1.p.rapidapi.com' }),
  endpoints: (builder) => ({
    getCryptosNews: builder.query({
      query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    })
  })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;