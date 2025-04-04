import { Link, useLocation } from 'react-router-dom';
import path from '../../constants/path';
import dashboardImg from '../../img/Squares four 1.png';
import projectImg from '../../img/Folder.png';
import teamImg from '../../img/Groups.png';
import analyticImg from '../../img/Pie chart.png';
import messImg from '../../img/Chat.png';
import intergrationImg from '../../img/Code.png';
import '../LeftMenu/DashBoard.css';

function DashBoard() {
    const location = useLocation();

    return (
        <div className="menu">
            <nav>
                <ul>
                    <li className={location.pathname === path.dashboard ? 'active' : ''}>
                        <img src={dashboardImg} alt="Dashboard" />
                        <Link to={path.dashboard}>Dashboard</Link>
                    </li>
                    <li className={location.pathname === path.project ? 'active' : ''}>
                        <img src={projectImg} alt="Projects" />
                        <Link to={path.project}>Projects</Link>
                    </li>
                    <li className={location.pathname === path.team ? 'active' : ''}>
                        <img src={teamImg} alt="Teams" />
                        <Link to={path.team}>Teams</Link>
                    </li>
                    <li className={location.pathname === path.analystic ? 'active' : ''}>
                        <img src={analyticImg} alt="Analytics" />
                        <Link to={path.analystic}>Analytics</Link>
                    </li>
                    <li className={location.pathname === path.messages ? 'active' : ''}>
                        <img src={messImg} alt="Messages" />
                        <Link to={path.messages}>Messages</Link>
                    </li>
                    <li className={location.pathname === path.intergration ? 'active' : ''}>
                        <img src={intergrationImg} alt="Integrations" />
                        <Link to={path.intergration}>Integrations</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default DashBoard;
