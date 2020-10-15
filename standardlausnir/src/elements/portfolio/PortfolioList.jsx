import React, { Component } from "react";

const PortfolioListContent = [
    {
        image: 'maul',
        category: 'Hugbúnaðargerð',
        title: 'Maul Reykjavík',
        description: 'Forritun og gagnavinnsla í Amazon AWS.',
        link:'https://maul.is'
    },
    {
        image: 'vidgerdir',
        category: 'Tölvuþjónusta',
        title: 'Ísprjón ehf.',
        description: 'Tækniþjónusta og viðgerðir.'
    },
    {
        image: 'friggz',
        category: 'Vefsíðugerð',
        title: 'Friggz sf.',
        description: 'Vefsíða Friggz sf. smíðuð í Wordpress af Standard lausnum ',
        link:'https://friggz.is'
    },
    {
        image: 'oba',
        category: 'Vefsíðugerð',
        title: 'Ottó B Arnar ehf.',
        description: 'Vefsíða Ottó B Arnar ehf. í Wordpress af Standard lausnum',
        link:'https://oba.is'
    },
    {
        image: 'code',
        category: 'Hugbúnaðargerð',
        title: 'SAT4N - Simple Administrative Tools for Networking.',
        description: 'Lokaverkefni í tölvunarfræði í HR. Vefþjónusta á local neti sem stýrir netbúnaði frá cisco.',
        link:'http://hdl.handle.net/1946/34047'
    },
    {
        image: 'standardlausnir',
        category: 'Vefsíðugerð',
        title: 'Standard lausnir',
        description: 'Vefsíða standardlausnir.is skrifuð í react.js og node.js api í AWS lambda fyrir contact form. Lén og vefur hýstur á Amazon AWS.',
        link:'standardlausnir.is'
    }
]

class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {list.map((value , index) => (
                        <div className={`${column}`} key={index}>
                            <a target="_blank" href={value.link}>
                                <div className={`portfolio ${styevariation}`}>
                                    <div className="thumbnail-inner">
                                        <div className={`thumbnail ${value.image}`}></div>
                                        <div className={`bg-blr-image ${value.image}`}></div>
                                    </div>
                                    <div className="content">
                                            <div className="inner">
                                                <p>{value.category}</p>
                                                <h4>{value.title}</h4>
                                                <h5>{value.description}</h5>
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