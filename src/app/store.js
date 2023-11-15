import { configureStore } from "@reduxjs/toolkit";
import eventsSlice from "../features/eventFeatures";

export const store = configureStore({
  reducer: {
    eventsSlice,
  },
});
