import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FocusContent from './data/FocusContent';
import ExperienceContent from './data/ExperienceContent';
import EducationalContent from './data/EducationalContent';

export default function TabsArea(props) {
  const { tabStyle, t } = props
  
  return (
    <div>
      {/* Start Tabs Area */}
      <div className="tabs-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Tabs>
                <TabList className={`${tabStyle}`}>
                  <Tab>{t('tab.focusTab')}</Tab>
                  <Tab>{t('tab.expTab')}</Tab>
                  <Tab>{t('tab.eduTab')}</Tab>
                </TabList>

                <TabPanel>
                  <div className="single-tab-content">
                    <ul>
                      {FocusContent.map((item, i) => (
                        <li key={i}>
                          <a href="/service">{t(item.focus)} 
                          <span>{item.type}</span></a>
                          {t(item.descripton)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="single-tab-content">
                    <ul>
                      {ExperienceContent.map((item, i) => (
                        <li key={i}>
                          <a href="/service">{t(item.job)}<span>
                            {t(item.company)}</span></a>{t(item.years)}
                        </li>
                      ))}  
                    </ul>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="single-tab-content">
                    <ul>
                      {EducationalContent.map((item, i) => (
                      <li key={i}>
                        <a href="/service">{t(item.diploma)}<span>
                          {t(item.school)}{item.year}</span></a>
                      </li>
                      ))}
                    </ul>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      {/* End Tabs Area */}
    </div>
  )
}