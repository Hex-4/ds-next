import {
    BsFillLightningFill,
    BsDiamondFill,
    BsPeopleFill,
  } from "react-icons/bs";
import { HiSquares2X2, HiSparkles } from "react-icons/hi2";
import {IoPlanet} from "react-icons/io5"
import {BiNews} from "react-icons/bi"
import {CgGames} from "react-icons/cg"

const SideBar = () => {
    return ( 
        <div className="fixed top-0 left-0 h-screen w-16 m-0  flex-none flex flex-col bg-primary text-secondary shadow-lg font-sans">
            <SideBarIcon icon={<BsDiamondFill size="28" />} text="Home" />
            <SideBarIcon icon={<HiSquares2X2 size="32" />} text="Projects" />
            <SideBarIcon icon={<IoPlanet size="20" />} text="The 'Verse" />
            <SideBarIcon icon={<BiNews size="23" />} text="The Dimaverse Newsletter" />
            <a href="https://freemcserver.net/server/977807" target="_blank" rel="noopener noreferrer" className="sidebar-icon group">
            <SideBarIcon icon={<CgGames size="23" />} text="Minecraft Server" />
            </a>
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