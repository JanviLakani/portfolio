import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_USR } from "../../constant/url";

export const portfolioApi = createApi({
  reducerPath: "portfolioApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_USR }),
  refetchOnFocus: true,

  endpoints: (builder) => ({
    getPortfolioList: builder.query({
      query: () => "portfolio",
    }),

    addPortfolioItem: builder.mutation({
      query: (data) => ({
        url: "portfolio",
        method: "POST",
        body: data,
      }),


      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        const tempId = crypto.randomUUID();

       const temUrl = { url: URL.createObjectURL(data.get("portfolio_image")) };


        const patchResult = dispatch(
          portfolioApi.util.updateQueryData(
            "getPortfolioList",
            undefined,
            (draft) => {
              draft.push({
                _id: tempId,
                name: data.get("name"),
                description: data.get("description"),
                technology: data.get("technology"),
                image : temUrl,
               
              });
            }
          )
        );

        try {
          const { data} = await queryFulfilled;

          dispatch(
            portfolioApi.util.updateQueryData(
              "getPortfolioList",
              undefined,
              (draft) => {
                const index = draft.findIndex((p) => p._id === tempId);
                if (index !== -1) draft[index] = data;
              }
            )
          );
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const { useGetPortfolioListQuery, useAddPortfolioItemMutation } =
  portfolioApi;







// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { BASE_USR } from "../../constant/url";

// export const portfolioApi = createApi({
//   reducerPath: "portfolioApi",
//   baseQuery: fetchBaseQuery({ baseUrl: BASE_USR }),
//   refetchOnFocus: true,

//   endpoints: (builder) => ({
//     getPortfolioList: builder.query({
//       query: () => "portfolio",
//     }),

//     addPortfolioItem: builder.mutation({
//       query: (data) => ({
//         url: "portfolio",
//         method: "POST",
//         body: data,
//       }),

//       async onQueryStarted(data, { dispatch, queryFulfilled }) {
//         const tempId = crypto.randomUUID();

//         const patchResult = dispatch(
//           portfolioApi.util.updateQueryData(
//             "getPortfolioList",
//             undefined,
//             (draft) => {
//               draft.push({
//                 _id: tempId,
//                 title: data.title,
//                 description: data.description,
//                 image: data.image || null,
//                 isTemp: true,
//               });
//             }
//           )
//         );

//         try {
//           const { data: newPortfolio } = await queryFulfilled;

//           dispatch(
//             portfolioApi.util.updateQueryData(
//               "getPortfolioList",
//               undefined,
//               (draft) => {
//                 const index = draft.findIndex((p) => p._id === tempId);
//                 if (index !== -1) draft[index] = newPortfolio;
//               }
//             )
//           );
//         } catch {
//           patchResult.undo();
//         }
//       },
//     }),
//   }),
// });

// export const { useGetPortfolioListQuery, useAddPortfolioItemMutation } =
//   portfolioApi;
