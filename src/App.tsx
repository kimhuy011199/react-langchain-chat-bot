import InputContainer from './components/InputContainer';
import IntroContainer from './components/IntroContainer';
import ToggleThemeMode from './components/ToggleThemeMode';

const App = () => {
  return (
    <div className="h-screen w-screen">
      <ToggleThemeMode />
      <IntroContainer />
      <InputContainer />
    </div>
  );
};

export default App;
