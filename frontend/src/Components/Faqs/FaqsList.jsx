import { faqs } from '../../assets/data/faqs'
import FaqsCard from './FaqsCard';


const FaqsList = () => {
  return (
    <ul className='mt-[38px]'>
    {faqs.map((item,index) => <FaqsCard item={item} index={index} key={index}/>)}
   </ul>
  )
}

export default FaqsList;