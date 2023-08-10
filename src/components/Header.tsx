import { Link } from 'react-router-dom';
import Logo from '../../assets/plannify.svg';

export default function Header() {
  return (
    <div>
      <nav className="flex justify-center items-center">
        <Link className="max-w-md" to="/">
          <img src={Logo} alt="plannify logo" width="30%" />
        </Link>
        <ul>
          <li>
            <Link to="/project">Project</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  );
}
