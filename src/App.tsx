import { useContext } from 'react';
import Desktop from './components/Desktop';
import Dock from './components/Dock';
import FileExplorer from './components/FileExplorer';
import { AppContext } from './contexts/app.context';

const App = () => {
  const { isOpenFileExplorer } = useContext(AppContext);

  return (
    <div className="window">
      <Desktop />
      <Dock />
      {isOpenFileExplorer ? <FileExplorer /> : null}
    </div>
  );
};

export default App;
