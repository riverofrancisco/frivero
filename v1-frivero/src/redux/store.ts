import { configureStore } from "@reduxjs/toolkit";
import { global } from "./portfolio/slice"

export const store = configureStore({
    reducer: {
      global: global.reducer,
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;