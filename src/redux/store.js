import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { portfolioApi } from "./api/portfolioApi.js";
// import portfolioApi from "./api/portfolioApi.js";
import categorySlice from "./slice/category.slice.js" 

import {portfolioApi} from "./api/portfolioApi.js"

const rootReducer = combineReducers({
  
 category: categorySlice,  
  [portfolioApi.reducerPath]: portfolioApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,

  // whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const persistReducerStore = () => {
 
  const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(
        
        portfolioApi.middleware
      ),
  });
  let persistor = persistStore(store);
  return { store, persistor };
};

export default persistReducerStore;

// import { combineReducers } from 'redux'
// import {  configureStore } from "@reduxjs/toolkit";
// import counterSlice from "./slice/counter.slice";
// import productsSlice from "./slice/products.slice";
// import categorySlice from "./slice/category.slice";
// import subCategorySlice from "./slice/subcategory.slice";
// import testimonialSlice from "./slice/testimonial.slice.js"
// import cartSlice from "./slice/cart.slice.js"
// import storage from 'redux-persist/lib/storage'
// import { persistReducer, persistStore } from 'redux-persist';

// const rootReducer = combineReducers({
//     counter: counterSlice,
//     product: productsSlice,
//     category: categorySlice,
//     subcategory: subCategorySlice,
//     testimonial:testimonialSlice,
//     cart:cartSlice
// });

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["cart"],
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer:persistedReducer
// });

// export const persistor = persistStore(store);
