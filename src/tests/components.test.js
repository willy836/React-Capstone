import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import Company from '../components/Company';

describe('Test react components', () => {
  it('Header component renders correctly', () => {
    const header = renderer
      .create(
        <Router>
          <Header />
        </Router>,
      )
      .toJSON();
    expect(header).toMatchSnapshot();
  });

  it('Company component renders correctly', () => {
    const company = renderer
      .create(
        <Router>
          <Company />
        </Router>,
      )
      .toJSON();
    expect(company).toMatchSnapshot();
  });

  it('Companies component renders correctly', () => {
    const Companies = () => {
      <div className="companies-homepage">
        <div className="loading">
          <h2 className="loading">Loading...</h2>
        </div>
        <div className="search-companies">
          <div className="search">
            <h4 className="search-company">Search:</h4>
            <div className="input-icon">
              <input
                type="text"
                value="search"
                onChange="handleSearch"
                placeholder="Search Company"
                className="search-input"
              />
            </div>
          </div>
          <div className="display-companies">
            <h1 className="companies-h1">Companies</h1>
            <div className="companies">Companies Array data</div>
          </div>
        </div>
      </div>;
    };
    const companies = renderer
      .create(
        <Router>
          <Companies />
        </Router>,
      )
      .toJSON();
    expect(companies).toMatchSnapshot();
  });

  it('SingleCompany component renders correctly', () => {
    const SingleCompany = () => {
      <div className="about-company">
        <div className="nav">
          ChevronLeft icon
          <h2 className="company-info">Company Info</h2>
          <div className="nav-icons-right">Mic icon Gear icon</div>
        </div>
        <div className="company-details">
          <div className="company-image">
            <img src="url" alt="" className="img" />
          </div>
          <div className="company-info">
            <p className="data">Company Name</p>
            <p className="data">Company Symbol</p>
            <p className="data">Sector</p>
            <p className="data">Industry</p>
            <p className="data">Country</p>
            <p className="data">City</p>
            <p className="data">Company CEO</p>
            <p className="data">Company Phone</p>
            <p className="data">Company Address</p>
            <p className="data">Company Website</p>
            <p className="data">Company Description</p>
          </div>
        </div>
      </div>;
    };
    const singleCompany = renderer
      .create(
        <Router>
          <SingleCompany />
        </Router>,
      )
      .toJSON();
    expect(singleCompany).toMatchSnapshot();
  });
});
