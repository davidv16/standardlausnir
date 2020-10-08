import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Megin áherslur",
        tab3 = "Reynsla",
        tab4 = "Menntun";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a href="/service">Vefsíðugerð <span> - Wordpress</span></a>
                                                    Smíði fallegra og snyrtilegra heimasíðna eftir þörfum.
                                                </li>
                                                <li>
                                                    <a href="/service">Vefþjónustuþróun <span> - React, Vue, .net, nodeJS ofl.</span></a>
                                                    Vefþjónustusmíði, vefforritun, breytingar og bætur.
                                                </li>
                                                <li>
                                                    <a href="/service">Skýjalausnir <span> - Amazon AWS.</span></a>
                                                    Hýsing vefja, tölvupósts og gagnagrunna í skýi.
                                                </li>
                                                <li>
                                                    <a href="/service">Tölvuráðgjöf og viðgerðir <span> </span></a>
                                                    Ráðgjöf, tölvuaðstoð og viðgerðir á rafeindabúnaði
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Forritari<span> - Standard lausnir</span></a> 2019 - núverandi
                                               </li>
                                               <li>
                                                   <a href="/service">Þjónustustjóri<span> - OBA</span></a> 2014 - núverandi
                                               </li>
                                               <li>
                                                   <a href="/service">Tæknimaður<span> - Optima </span></a> 2013 - 2014
                                               </li>
                                               <li>
                                                   <a href="/service">Umsjónarmaður hljóð og mynd verkstæðis<span> - Nýherji </span></a> 2011 - 2013
                                               </li>
                                               <li>
                                                   <a href="/service">Rafeindavirki<span> - Marel </span></a> 2008 - 2011
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Diplóma í Tölvunarfræði<span> - Háskólinn í Reykjavík</span></a> 2020
                                               </li>
                                               <li>
                                                   <a href="/service">Sveinspróf í Rafeindavirkjun<span> - Tækniskólinn í Reykjavík</span></a> 2010
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