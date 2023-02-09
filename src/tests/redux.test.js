import companiesReducer, {
  fetchCompaniesData,
} from '../redux/companies/companiesSlice';

const mockCompaniesData = [
  {
    symbol: 'ATVI',
    name: 'Activision Blizzard, Inc',
    city: 'Santa Monica',
  },
  {
    symbol: 'ADBE',
    name: 'Adobe Inc',
    city: 'San Jose',
  },
  {
    symbol: 'AAPL',
    name: 'Apple Inc',
    city: 'Cupertino',
  },
  {
    symbol: 'ATVI',
    name: 'Airbnb',
    city: 'San Francisco',
  },
];

describe('Test redux function', () => {
  it('Renders initial state correctly', () => {
    expect(companiesReducer(undefined, {})).toEqual({
      loading: false,
      companiesArr: [],
      company: {},
      error: '',
    });
  });

  it('Renders state with fetched companies data', () => {
    expect(
      companiesReducer(
        {
          loading: false,
          companiesArr: mockCompaniesData,
          company: {},
          error: '',
        },
        fetchCompaniesData(),
      ),
    ).toEqual({
      loading: false,
      companiesArr: mockCompaniesData,
      company: {},
      error: '',
    });
  });
});
