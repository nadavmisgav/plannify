import { Link } from 'react-router-dom';
import Logo from '../../assets/plannify.svg';

export default function Header() {
  return (
    <>
      <div className="flex items-center py-2">
        <Link to="/">
          <img src={Logo} alt="plannify logo" width="100%" height="auto" />
        </Link>
        <nav className="ml-auto">
          <ul className="flex justify-between p-4 px-8 items-center">
            <li>
              <Link
                className="uppercase tracking-widest font-bold"
                to="/project"
              >
                projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <hr className="border-[1px] my-2 border-cyan-200" />
    </>
  );
}
