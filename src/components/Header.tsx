import AppLogo from './AppLogo';
import ToggleThemeMode from './ToggleThemeMode';

const Header = () => {
  return (
    <div className="py-4 fixed top-0 w-full h-16 flex justify-center items-center">
      <ToggleThemeMode />
      <AppLogo />
    </div>
  );
};

export default Header;
