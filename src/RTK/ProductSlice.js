import { createSlice } from "@reduxjs/toolkit";
import Data from "../Component/flashDeals/Data";

const { productItems } = Data;

export const flashSlice = createSlice({
  name: "flashProduct",
  initialState: productItems,
  reducers: {},
});

export default flashSlice.reducer;
