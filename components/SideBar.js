import {
    BsFillLightningFill,
    BsDiamondFill,
    BsPeopleFill,
  } from "react-icons/bs";
import { HiSquares2X2, HiSparkles } from "react-icons/hi2";
import {IoPlanet} from "react-icons/io5"
import {BiNews} from "react-icons/bi"
const SideBar = () => {
    return ( 
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-secondary shadow-lg">
            <SideBarIcon icon={<BsDiamondFill size="28" />} text="Home" />
            <SideBarIcon icon={<HiSquares2X2 size="32" />} text="Projects" />
            <SideBarIcon icon={<IoPlanet size="20" />} text="The 'Verse" />
            <SideBarIcon icon={<BiNews size="23" />} text="The Dimaverse Newsletter" />
        </div>
     );
}
const SideBarIcon = ({icon, text = "default tooltip"}) => {
    return ( 
        <div className="sidebar-icon group">
            {icon}
            <span className="sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
     );
}
 
export default SideBar;