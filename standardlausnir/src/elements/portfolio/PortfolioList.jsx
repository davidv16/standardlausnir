import React, { Component } from "react";

const PortfolioListContent = [
    {
        image: 'image-1',
        category: 'Hugbúnaðargerð',
        title: 'Maul Reykjavík'
    },
    {
        image: 'image-2',
        category: 'Tölvuþjónusta',
        title: 'Ísprjón ehf.'
    },
    {
        image: 'image-3',
        category: 'Vefsíðugerð',
        title: 'Friggz sf.'
    },
    {
        image: 'image-4',
        category: 'Vefsíðugerð',
        title: 'Ottó B Arnar ehf.'
    },
    {
        image: 'image-3',
        category: 'Hugbúnaðargerð',
        title: 'SAT4N - Simple administrative tools for networking.'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: 'Getting tickets to the big show'
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
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${value.image}`}></div>
                                <div className={`bg-blr-image ${value.image}`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p>{value.category}</p>
                                    <h4><a href="/portfolio-details">{value.title}</a></h4>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;