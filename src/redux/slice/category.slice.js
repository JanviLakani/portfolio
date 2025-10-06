import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_USR } from "../../constant/url";

const initialState = {
  isloding: false,
  category: [],
  error: null,
};

export const getproData = createAsyncThunk("category/getproData", async () => {
  try {
    const response = await fetch(`${BASE_USR}/category`);
    console.log("responseresponseresponseresponse => ", response);

    const pData = await response.json();
    return pData;
  } catch (error) {
    console.log(error);
  }
});
export const addproData = createAsyncThunk(
  "category/addproData",
  async (data) => {
    try {
      //   console.log("add data", data);
      //   console.log("add data", data.description);
      //   console.log("add data", data.name);
      //   console.log("add data", data.image.name);

      console.log("add data", { ...data, image: data.image.name });
      const response = await fetch(`${BASE_USR}/category`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, image: data.image.name }),
      });
      const rData = await response.json();
      return rData;
    } catch (error) {
      console.log(error);
    }
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getproData.fulfilled, (state, action) => {
      state.category = action.payload;
    });
    builder.addCase(addproData.fulfilled, (state, action) => {
      console.log("action", action);

      state.category.push(action.payload);
    });
  },
});

export default categorySlice.reducer;
