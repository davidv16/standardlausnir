import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import SliderArea from "../elements/sliderarea/SliderArea"
import PortfolioArea from "../elements/portfolioarea/PortfolioArea"
import AboutArea from '../elements/about/AboutArea';
import ServiceArea from '../elements/servicearea/ServiceArea'
import ContactArea from '../elements/contact/ContactArea';
import PropTypes from 'prop-types';

// Translation Higher Order Component
import {
  setTranslations,
  setDefaultLanguage,
  setLanguageCookie,
  setLanguage,
  translate,
} from 'react-switch-lang';
import en from '../component/translate/en.json';
import is from '../component/translate/is.json';

// Do this two lines only when setting up the application
setTranslations({ en, is });
setDefaultLanguage('is');

// If you want to remember selected language
setLanguageCookie();


function handleSetLanguage(key) {
  setLanguage(key);
}

function Home(props) {
  const { t } = props;

  return (
    <div className="active-dark">
      <Helmet />
      <Header t={t} handleSetLanguage={handleSetLanguage} homeLink="/" logo="symbol-dark" color="color-black" />
      <SliderArea t={t} />
      <AboutArea t={t} />
      <ServiceArea t={t} />
      <PortfolioArea t={t} />
      <ContactArea t={t} />
      <Footer t={t} />

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

    </div>
  )
}


Home.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate(Home);
