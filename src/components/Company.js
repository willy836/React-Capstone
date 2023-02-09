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
        <BsChevronRight className="chev-right" />
      </Link>
      <div className="company">
        <h5>{companySymbol}</h5>
        <h3>{companyName}</h3>
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
