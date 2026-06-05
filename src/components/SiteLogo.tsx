import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

type SiteLogoProps = {
  compact?: boolean;
};

export function SiteLogo({ compact = false }: SiteLogoProps) {
  return (
    <Link to="/" className="group inline-flex items-center gap-3" aria-label="Race Quimica - Home">
      <img
        src={logo}
        alt="Race Quimica"
        className={`${compact ? 'h-10 w-auto' : 'h-12 w-auto sm:h-14'} object-contain drop-shadow-[0_4px_14px_rgba(0,0,0,0.35)]`}
      />
    </Link>
  );
}
