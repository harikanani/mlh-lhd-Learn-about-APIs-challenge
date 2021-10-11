import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
	"x-rapidapi-host": "coinranking1.p.rapidapi.com",
	"x-rapidapi-key": "5892b5188bmsh9e96e907f299762p1a9c02jsna0f073063e7b",
};

const baseUrl = `https://coinranking1.p.rapidapi.com`;

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const crytoApi = createApi({
	reducerPath: "cryptoApi",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: (count) => createRequest(`/coins?limit=${count}`),
		}),
	}),
});

export const { useGetCryptosQuery } = crytoApi;
