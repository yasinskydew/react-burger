import { createSlice } from "@reduxjs/toolkit";

import { PayloadAction } from "@reduxjs/toolkit";
import { getTabs, ITab } from "../types";

const initialState = {
  tabs: getTabs(),
  activeTab: getTabs()[0],
}

const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    selectActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = state.tabs.find(tab => tab.id === action.payload) || state.tabs[0];
    },
  },
})

export const { selectActiveTab } = tabsSlice.actions;

export default tabsSlice.reducer;

