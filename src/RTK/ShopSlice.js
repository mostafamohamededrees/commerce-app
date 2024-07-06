import { createSlice } from "@reduxjs/toolkit";
import Sdata from "../Component/shops/shopData";

const { shopItems } = Sdata;

export const shopSlice = createSlice({
  name: "shopProduct",
  initialState: shopItems,
  reducers: {},
});
export default shopSlice.reducer;
