import React from 'react';
import CustomerList from "./CustomerList";

export default function CustomerArea(props) {
  const {t} = props;
  return (
    <div id="clients" className="fix">
      <div className="portfolio-area ptb--120 bg_color--1">
        <div className="portfolio-sacousel-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                  <h2 className="title">{t('customer.title')}</h2>
                  <p>{t('customer.description')}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <CustomerList t={t} styevariation="text-center mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}