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
    description,
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
            Company Name:
            {companyName}
          </p>
          <p className="data">
            {' '}
            Company Symbol:
            {symbol}
          </p>
          <p className="data">
            Sector:
            {sector}
          </p>
          <p className="data">
            Industry:
            {industry}
          </p>
          <p className="data">
            Country:
            {country}
          </p>
          <p className="data">
            City:
            {city}
          </p>
          <p className="data">
            Company CEO:
            {ceo}
          </p>
          <p className="data">
            Company Phone:
            {phone}
          </p>
          <p className="data">
            Company Address:
            {address}
          </p>
          <p className="data">
            Company Website:
            {website}
          </p>
          <p className="data">
            Company Description:
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCompany;
