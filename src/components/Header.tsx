import AboutProject from './AboutProject';
import AppLogo from './AppLogo';
import ToggleThemeMode from './ToggleThemeMode';

const Header = () => {
  return (
    <div className="p-4 fixed top-0 w-full h-16 flex justify-between items-center">
      <AboutProject />
      <AppLogo />
      <ToggleThemeMode />
    </div>
  );
};

export default Header;
