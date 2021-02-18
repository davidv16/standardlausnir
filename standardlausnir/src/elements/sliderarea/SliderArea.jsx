import React from 'react';
import TextLoop from "react-text-loop";
import SliderContent from './data/SliderContent'

export default function SliderArea (props) {
  const {t} = props;

  return (
    <div id="home" className="fix">
          <div className="slider-wrapper">
            {/* Start Single Slide */}
              <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image coverphoto">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className={`inner text-left`}>
                        <h1 className="title">{t('home.title')} <br />
                          <TextLoop>
                            {SliderContent.map((item, i) => (
                              <span key={i}>{t(item.job)}</span>
                            ))}
                          </TextLoop>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
            {/* End Single Slide */}
          </div>
        </div>
    
  )
}
