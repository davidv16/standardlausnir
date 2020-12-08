import React, { Component } from "react";

const PortfolioListContent = [
    {
        image: 'maul',
        category: 'portfolio.category1',
        title: 'Maul Reykjavík',
        description: 'portfolio.description1',
        link:'https://maul.is'
    },
    {
        image: 'vidgerdir',
        category: 'portfolio.category2',
        title: 'Ísprjón ehf.',
        description: 'portfolio.description2'
    },
    {
        image: 'friggz',
        category: 'portfolio.category3',
        title: 'Friggz sf.',
        description: 'portfolio.description3',
        link:'https://friggz.is'
    },
    {
        image: 'oba',
        category: 'portfolio.category4',
        title: 'Ottó B Arnar ehf.',
        description: 'portfolio.description4',
        link:'https://oba.is'
    },
    {
        image: 'code',
        category: 'portfolio.category5',
        title: 'SAT4N - Simple Administrative Tools for Networking.',
        description: 'portfolio.description5',
        link:'http://hdl.handle.net/1946/34047'
    },
    {
        image: 'standardlausnir',
        category: 'portfolio.category6',
        title: 'Standard lausnir',
        description: 'portfolio.description6',
        link:'standardlausnir.is'
    }
]

class PortfolioList extends Component{
    render(){
        const {column , styevariation, t } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {list.map((value , index) => (
                        <div className={`${column}`} key={index}>
                            <a target="_blank" rel="noopener noreferrer" href={value.link}>
                                <div className={`portfolio ${styevariation}`}>
                                    <div className="thumbnail-inner">
                                        <div className={`thumbnail ${value.image}`}></div>
                                        <div className={`bg-blr-image ${value.image}`}></div>
                                    </div>
                                    <div className="content">
                                            <div className="inner">
                                                <p>{t(value.category)}</p>
                                                <h4>{value.title}</h4>
                                                <h5>{t(value.description)}</h5>
                                            </div>                                
                                    </div>
                                </div>
                            </a>    
                        </div>                 
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;