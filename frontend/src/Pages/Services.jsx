import ServiceCard from '../Components/Services/ServiceCard';
import { services } from '../assets/data/services';


const Services = () => {
  return (
    <section>
     <div className="container" style={{ marginTop: '1px', marginBottom: '1px' }}>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-[20px]'>
           {services.map((item,index) => <ServiceCard item={item} index={index} key={index}/>)}
        </div>
      </div>

    </section>
  )
};

export default Services;