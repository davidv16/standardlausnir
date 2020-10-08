import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Hugbúnaðargerð',
        description: 'Smíða vefsíður, vefþjónustur og annan hugbúnað frá grunni eftir þörfum.'
    },
    {
        icon: <FiLayers />,
        title: 'Vefsíðugerð',
        description: 'Smíða wordpress vefsíður fyrir lítil og miðlungs fyrirtæki, vefverslanir, upplýsingasíður og einfaldari síður.'
    },
    {
        icon: <FiUsers />,
        title: 'Tölvuaðstoð og ráðgjöf',
        description: 'Aðstoða með helstu tölvuvandamál, uppsetning hugbúnaðar og vélbúnaðar.'
    },
    { 
        icon: <FiMonitor />,
        title: 'Skýjalausnir',
        description: 'Aðstoða við hýsingu á vefsíðum, tölvupóstum og geymslu á gögnum í skýjalausnum.'
    },
    {
        icon: <FiUsers />,
        title: 'Marketing & Reporting',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    { 
        icon: <FiMonitor />,
        title: 'Mobile App Development',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
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
