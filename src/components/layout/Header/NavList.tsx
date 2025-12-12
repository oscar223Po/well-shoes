import { useActiveLink } from '@/hooks/useActiveLink'
import cn from "classnames"
import { Link } from 'react-router-dom'

interface Props {
  items: { path: string; label: string }[];
  className?: string;
  linkClassName?: string;
  activeClass?: string;
  onItemClick?: () => void;
}

export const NavList: React.FC<Props> = ({
  items,
  className,
  linkClassName,
  activeClass,
  onItemClick
}) => {
  const isActive = useActiveLink();

  return (
    <nav className={className}>
      {items.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          onClick={onItemClick}
          className={cn(linkClassName, {
            [activeClass ?? ""]: isActive(path)
          })}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};
export default NavList