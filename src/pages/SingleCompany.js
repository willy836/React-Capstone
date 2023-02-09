import React, { useEffect, useRef } from 'react';
import { BsChevronLeft, BsGear, BsMic } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchCompanyData } from '../redux/companies/companiesSlice';
import '../styles/details.css';

const SingleCompany = () => {
  const { companySymbol } = useParams();
  const dispatch = useDispatch();
  const shouldFetchCompany = useRef(true);
  useEffect(() => {
    if (shouldFetchCompany.current) {
      shouldFetchCompany.current = false;
      dispatch(fetchCompanyData(companySymbol));
    }
    // eslint-disable-next-line
  }, []);
  const { company } = useSelector((state) => state.companies);

  const {
    companyName,
    symbol,
    country,
    city,
    sector,
    industry,
    ceo,
    website,
    address,
    phone,
    image,
  } = company;
  return (
    <div className="about-company">
      <div className="nav">
        <Link to="/">
          <BsChevronLeft className="nav-icons" />
        </Link>
        <h2 className="company-info">Company Info</h2>
        <div className="nav-icons-right">
          <BsMic className="nav-icons" />
          <BsGear className="nav-icons" />
        </div>
      </div>
      <div className="company-details">
        <div className="company-image">
          <img src={image} alt="" className="img" />
        </div>
        <div className="company-info">
          <p className="data">
            <span>Name</span>
            <span>{companyName}</span>
          </p>
          <p className="data">
            <span>Symbol</span>
            <span>{symbol}</span>
          </p>
          <p className="data">
            <span>Sector</span>
            <span>{sector}</span>
          </p>
          <p className="data">
            <span>Industry</span>
            <span>{industry}</span>
          </p>
          <p className="data">
            <span>Country</span>
            <span>{country}</span>
          </p>
          <p className="data">
            <span>City</span>
            <span>{city}</span>
          </p>
          <p className="data">
            <span>CEO</span>
            <span>{ceo}</span>
          </p>
          <p className="data">
            <span>Phone</span>
            <span>{phone}</span>
          </p>
          <p className="data">
            <span>Address</span>
            <span>{address}</span>
          </p>
          <p className="data">
            <span>Website</span>
            <span>{website}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCompany;
