import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const apikey = 'b6fcb46946487d0314a7c68982f4501a';
const URL = `https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=${apikey}`;

export const fetchCompaniesData = createAsyncThunk(
  'companies/fetchCompaniesData',
  async () => {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  },
);

export const fetchCompanyData = createAsyncThunk(
  'company/fetchCompanyData',
  async (companySymbol) => {
    const response = await fetch(
      `https://financialmodelingprep.com/api/v3/profile/${companySymbol}?apikey=${apikey}`,
    );
    const data = await response.json();
    return data;
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
