import React from "react";
import ServiceContent from './data/ServiceContent';

export default function ServiceThree(props) {
  const { column, t } = props;

  return (
    <React.Fragment>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div className={`${column}`} key={i}>
            <div className="service service__style--2">
              <div className="icon">
                {val.icon}
              </div>
              <div className="content">
                <h3 className="title">{t(val.title)}</h3>
                <p>{t(val.description)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}
