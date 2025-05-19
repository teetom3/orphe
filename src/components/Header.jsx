import Img_Equestre from '../assets/equestre.jpg';


export default function Header() 
{
    return(
<>
 <div>
        <img src={Img_Equestre} alt="" />
    </div>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
        </ul>
    </nav>
</>
   )
   
}