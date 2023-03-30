import './Card.css'
import{FaStar,FaDownload} from "react-icons/fa" // fa bs
const Card = (props) => {
  return (
    
 <div className="most-popular-item">
    <div className="card-wrapper">
     <img className="most-popular-item-image" src={props.image} alt=""/>
     <div className="most-popular-item-content">
         <h4 className="most-popular-item-title">
             {props.title} <br/> Sandbox
             </h4>
            <ul>
             <li><span style={{color:"yellow"}}><FaStar/></span><span style={{marginLeft:"10px"}}>{props.rate}</span></li>
             <li><span style={{color:"#ec6090"}}><FaDownload/></span><span style={{marginLeft:"10px"}}>{props.downlod}</span></li>
             </ul> 
     </div>
    </div>
</div>
  )
}
export default Card
