import React from 'react';
import PortfolioContent from './data/PortfolioContent';

export default function PortfolioList(props) {
  const { column, styevariation, t } = props;

  return (
    <React.Fragment>
      {PortfolioContent.map((item, i) => (
        <div className={`${column}`} key={i}>
          <a target="_blank" rel="noopener noreferrer" href={item.link}>
            <div className={`portfolio ${styevariation}`}>
              <div className="thumbnail-inner">
                <div className={`thumbnail ${item.image}`}></div>
                <div className={`bg-blr-image ${item.image}`}></div>
              </div>
              <div className="content">
                <div className="inner">
                  <p>{t(item.category)}</p>
                  <h4>{item.title}</h4>
                  <h5>{t(item.description)}</h5>
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}

    </React.Fragment>
  )
}