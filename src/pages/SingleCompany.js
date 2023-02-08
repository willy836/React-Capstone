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
    <div className="company">
      <nav>
        <Link to="/">
          <BsChevronLeft className="nav-icons" />
        </Link>
        <h2>Company Info</h2>
        <div>
          <BsMic className="nav-icons" />
          <BsGear className="nav-icons" />
        </div>
      </nav>
      <div className="company-details">
        <div className="company-image">
          <img src={image} alt="" />
        </div>
        <div className="company-info">
          <h3 className="name">{companyName}</h3>
          <p className="data">{symbol}</p>
          <p className="data">{sector}</p>
          <p className="data">{industry}</p>
          <p className="data">{country}</p>
          <p className="data">{city}</p>
          <p className="data">{ceo}</p>
          <p className="data">{phone}</p>
          <p className="data">{address}</p>
          <p className="data">{website}</p>
          <p className="data">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCompany;
