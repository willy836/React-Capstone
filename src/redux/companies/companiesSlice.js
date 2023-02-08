import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apikey = 'b6fcb46946487d0314a7c68982f4501a';
const URL = `https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=${apikey}`;

export const fetchCompaniesData = createAsyncThunk(
  'companies/fetchCompaniesData',
  async () => {
    const response = await axios.get(URL);
    if (response.data) {
      return response.data;
    }
    return [];
  },
);

export const fetchCompanyData = createAsyncThunk(
  'company/fetchCompanyData',
  async (companySymbol) => {
    const response = await axios.get(
      `https://financialmodelingprep.com/api/v3/profile/${companySymbol}?apikey=${apikey}`,
    );
    if (response.data) {
      return response.data;
    }
    return [];
  },
);

const initialState = {
  loading: false,
  companiesArr: [],
  company: {},
  error: '',
};

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCompaniesData.pending, (state) => {
      const newState = state;
      newState.loading = true;
    });
    builder.addCase(fetchCompaniesData.fulfilled, (state, action) => {
      const newState = state;
      newState.loading = false;
      newState.companiesArr = action.payload;
    });
    builder.addCase(fetchCompaniesData.rejected, (state, action) => {
      const newState = state;
      newState.loading = false;
      newState.companiesArr = [];
      newState.error = action.error.message;
    });

    builder.addCase(fetchCompanyData.fulfilled, (state, action) => {
      const newState = state;
      newState.loading = false;
      // eslint-disable-next-line
      newState.company = action.payload[0];
      newState.error = '';
    });
  },
});

export default companiesSlice.reducer;
