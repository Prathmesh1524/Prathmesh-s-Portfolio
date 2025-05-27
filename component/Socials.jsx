import Link from "next/link"
import {FaGithub,FaLinkedin,FaTwitter} from "react-icons/fa"


 const Social=[
        {icon:<FaGithub/> ,path:"https://github.com/Prathmesh1524"},
        {icon:<FaLinkedin/> ,path:"https://www.linkedin.com/in/prathmesh-deshpande-1aa7a0262/"},
        {icon:<FaTwitter/> ,path:"https://x.com/PrathmeshD22"}
       
    ]
const Socials = ({containerStyle,iconStyle}) => {
  return (
   <div className={containerStyle}>
        {Social.map((item,index)=>{
            return <Link key={index} href={item.path} className={iconStyle}>
                {item.icon}
            </Link>
        })}
     </div>
  )
}

export default Socials
