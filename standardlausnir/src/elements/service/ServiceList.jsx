import React ,{ Component }from "react";
import { FiCode , FiUsers, FiCloud } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCode />,
        title: 'Hugbúnaðargerð',
        description: 'Smíða vefsíður, vefþjónustur og annan hugbúnað frá grunni eftir þörfum.'
    },
    {
        icon: <FiCloud />,
        title: 'Vefsíðugerð',
        description: 'Smíða wordpress vefsíður fyrir lítil og miðlungs fyrirtæki. Vefverslanir og einfaldar upplýsingasíður.'
    },
    {
        icon: <FiUsers />,
        title: 'Tölvu/tækniaðstoð og ráðgjöf',
        description: 'Aðstoða með helstu tölvuvandamál, uppsetning hugbúnaðar, vélbúnaðar og viðgerðir.'
    }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
