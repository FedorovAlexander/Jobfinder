import React from 'react';
import './ChartPageFooter.css';
import Link from '../Link/Link';

const ChartPageFooter = ({ text }) => {

  return (
    <footer className="page-footer">
      <div className="page-footer__container">
        <p className="page-footer__text"></p>
        <Link />
      </div>
    </footer>
  );
}

export default ChartPageFooter;
