import Desktop from './components/Desktop';
import Dock from './components/Dock';

const App = () => {
  return (
    <div className="window">
      <Desktop />
      <Dock />
    </div>
  );
};

export default App;
