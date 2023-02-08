import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsSearch } from 'react-icons/bs';
import Company from '../components/Company';
import { fetchCompaniesData } from '../redux/companies/companiesSlice';
import Header from '../components/Header';
import '../styles/companies.css';

const Companies = () => {
  const { companiesArr, loading } = useSelector((state) => state.companies);

  const shouldFetchCompaniesData = useRef(true);
  const dispatch = useDispatch();
  useEffect(() => {
    if (shouldFetchCompaniesData.current) {
      shouldFetchCompaniesData.current = false;

      dispatch(fetchCompaniesData());
    }
    // eslint-disable-next-line
  }, []);

  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <Header />
      {loading ? (
        <div className="loading">
          <h2>Loading...</h2>
        </div>
      ) : (
        <div className="search-companies">
          <div className="search">
            <h2>Search Company</h2>
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Search Company"
              className="search-input"
            />
            <BsSearch className="search-icon" />
          </div>
          <div className="display-companies">
            <h1>Companies</h1>
            <div className="companies">
              {companiesArr
                .filter((company) => {
                  if (search === '') {
                    return company;
                  }
                  if (
                    company.name.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return company;
                  }
                  return null;
                })
                .map((company) => (
                  <Company
                    key={company.symbol}
                    companySymbol={company.symbol}
                    companyName={company.name}
                    companyHeadquarter={company.headQuarter}
                  />
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Companies;
