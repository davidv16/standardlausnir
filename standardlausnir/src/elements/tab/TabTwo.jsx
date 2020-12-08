import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        const { tabStyle } = this.props
        const { t } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{t('tab.tab1')}</Tab>
                                        <Tab>{t('tab.tab3')}</Tab>
                                        <Tab>{t('tab.tab4')}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a href="/service">{t('focuspanel.focus1')} <span> - Wordpress</span></a>
                                                    {t('focuspanel.description1')}
                                                </li>
                                                <li>
                                                    <a href="/service">{t('focuspanel.focus2')} <span> - React, Vue, .net, nodeJS ofl.</span></a>
                                                    {t('focuspanel.description2')}
                                                </li>
                                                <li>
                                                    <a href="/service">{t('focuspanel.focus3')} <span> - Amazon AWS.</span></a>
                                                    {t('focuspanel.description3')}
                                                </li>
                                                <li>
                                                    <a href="/service">{t('focuspanel.focus4')} <span> </span></a>
                                                    {t('focuspanel.description4')}
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">{t('experiencepanel.job1')}<span>{t('experiencepanel.company1')}</span></a>{t('experiencepanel.years1')}
                                               </li>
                                               <li>
                                                   <a href="/service">{t('experiencepanel.job2')}<span>{t('experiencepanel.company2')}</span></a>{t('experiencepanel.years2')}
                                               </li>
                                               <li>
                                                   <a href="/service">{t('experiencepanel.job3')}<span>{t('experiencepanel.company3')}</span></a> 2013 - 2014
                                               </li>
                                               <li>
                                                   <a href="/service">{t('experiencepanel.job4')}<span>{t('experiencepanel.company4')}</span></a> 2011 - 2013
                                               </li>
                                               <li>
                                                   <a href="/service">{t('experiencepanel.job5')}<span>{t('experiencepanel.company5')}</span></a> 2008 - 2011
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">{t('educationpanel.diploma1')}<span>{t('educationpanel.school1')}</span></a> 2020
                                               </li>
                                               <li>
                                                   <a href="/service">{t('educationpanel.diploma2')}<span>{t('educationpanel.school2')}</span></a> 2010
                                               </li>
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
}



export default TabsTwo;