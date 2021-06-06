import { createContext, FC, useState } from 'react';

const defaultValue = {
  isOpenFileExplorer: true,
  isActiveFileExplorer: true,
  isFullScreenFileExplorer: true,
  openFileExplorer: () => {},
  closeFileExplorer: () => {},
  activeFileExplorer: () => {},
  deactiveFileExplorer: () => {},
  fullScreenFileExplorer: () => {},
  unfullScreenFileExplorer: () => {},
};

export const AppContext = createContext(defaultValue);

const AppProvider: FC = ({ children }) => {
  const [isOpenFileExplorer, setOpenFileExplorer] = useState(true);
  const [isActiveFileExplorer, setActiveFileExplorer] = useState(true);
  const [isFullScreenFileExplorer, setFullScreenFileExplorer] = useState(true);

  const openFileExplorer = () => setOpenFileExplorer(true);
  const closeFileExplorer = () => setOpenFileExplorer(false);

  const activeFileExplorer = () => setActiveFileExplorer(true);
  const deactiveFileExplorer = () => setActiveFileExplorer(false);

  const fullScreenFileExplorer = () => setFullScreenFileExplorer(true);
  const unfullScreenFileExplorer = () => setFullScreenFileExplorer(false);

  const value = {
    isOpenFileExplorer,
    isActiveFileExplorer,
    isFullScreenFileExplorer,
    openFileExplorer,
    closeFileExplorer,
    activeFileExplorer,
    deactiveFileExplorer,
    fullScreenFileExplorer,
    unfullScreenFileExplorer,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
