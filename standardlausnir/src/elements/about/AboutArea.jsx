import React from 'react';
import TabsArea from "./tab/TabsArea";

export default function AboutArea(props) {
  const { t } = props;
  
  return (
    <div id="about" className="fix">
      <div className="about-area ptb--120  bg_color--1">
        <div className="about-wrapper">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-5">
                <div className="thumbnail">
                  <img className="w-100" src="/assets/images/about/DSC_1142.png" alt="About Images" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title">{t('about.title')}</h2>
                    <p className="description">{t('about.description')}</p>
                  </div>
                  <div className="row mt--30">
                    <TabsArea t={t} tabStyle="tab-style--1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
