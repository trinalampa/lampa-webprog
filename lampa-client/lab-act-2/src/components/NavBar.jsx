import { NavLink } from 'react-router-dom';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Articles', to: '/articles' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
    isActive
      ? 'border-zinc-900 bg-zinc-900 text-zinc-50'
      : 'border-transparent text-zinc-500 hover:border-zinc-900 hover:bg-zinc-900 hover:text-zinc-50',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-zinc-100/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <NavLink to="/">
          <div className="flex items-center gap-2">
            <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="55" r="38" fill="black"/>
              <polygon points="28,30 22,10 38,25" fill="black"/>
              <polygon points="72,30 78,10 62,25" fill="black"/>
              <ellipse cx="50" cy="55" rx="28" ry="26" fill="black"/>
              <ellipse cx="40" cy="50" rx="5" ry="6" fill="white"/>
              <ellipse cx="60" cy="50" rx="5" ry="6" fill="white"/>
              <ellipse cx="40" cy="51" rx="2" ry="4" fill="black"/>
              <ellipse cx="60" cy="51" rx="2" ry="4" fill="black"/>
              <polygon points="50,57 47,61 53,61" fill="white"/>
              <line x1="20" y1="60" x2="40" y2="62" stroke="white" strokeWidth="1.5"/>
              <line x1="20" y1="65" x2="40" y2="64" stroke="white" strokeWidth="1.5"/>
              <line x1="60" y1="62" x2="80" y2="60" stroke="white" strokeWidth="1.5"/>
              <line x1="60" y1="64" x2="80" y2="65" stroke="white" strokeWidth="1.5"/>
              <path d="M25 85 C10 75 5 90 20 88" stroke="black" strokeWidth="6" fill="none" strokeLinecap="round"/>
            </svg>
            <span className="text-xl font-bold text-zinc-900">BREAKING MEWS</span>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClassName}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;