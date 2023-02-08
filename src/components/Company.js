import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsChevronRight } from 'react-icons/bs';

import '../styles/company.css';

const Company = (props) => {
  const { companySymbol, companyName, companyHeadquarter } = props;
  return (
    <div className="company-container">
      <Link to={`/company/${companySymbol}`}>
        <BsChevronRight />
      </Link>
      <div className="company">
        <h4>{companySymbol}</h4>
        <h3 className="company">{companyName}</h3>
        <p>{companyHeadquarter}</p>
      </div>
    </div>
  );
};

Company.propTypes = {
  companyName: PropTypes.string,
  companyHeadquarter: PropTypes.string,
}.isRequired;

export default Company;
