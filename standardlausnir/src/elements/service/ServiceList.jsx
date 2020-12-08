import React ,{ Component }from "react";
import { FiCode , FiUsers, FiCloud } from "react-icons/fi";

const ServiceList = [
  {
      icon: <FiCode />,
      title: 'service.service1',
      description: 'service.servicedescription1'
  },
  {
      icon: <FiCloud />,
      title: 'service.service2',
      description: 'service.servicedescription2'
  },
  {
      icon: <FiUsers />,
      title: 'service.service3',
      description: 'service.servicedescription3'
  }
]


class ServiceThree extends Component{
  
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        const { t } = this.props
        
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
}
export default ServiceThree;
