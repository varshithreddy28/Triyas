import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  altairEvents: [],
  ptcEvents: [],
};

export const eventsSlice = createSlice({
  name: "event", // it is just a name
  initialState,
  reducers: {
    addAltairEvents: (state, action) => {
      // Adding an event
      const event = {
        name: action.payload.name,
        imgSrc: action.payload.imgSrc,
        url: action.payload.url,
        company: action.payload.company,
      };
      console.log(event);
      state.altairEvents.push(event);
    },
    addPTCEvents: (state, action) => {
      // Adding an event
      const event = {
        name: action.payload.name,
        imgSrc: action.payload.imgSrc,
        url: action.payload.url,
        company: action.payload.company,
      };
      state.ptcEvents.push(event);
    },
  },
});

// Exporting the Actions
export const { addAltairEvents, addPTCEvents } = eventsSlice.actions;

// We need to wire this Reducer with the Store which we have Specified
export default eventsSlice.reducer;
