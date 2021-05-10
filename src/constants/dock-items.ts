import { chrome, fileExplorer, vsCode, win10logo } from './icons';

const dockItems = [
  {
    id: 'dock-1',
    name: 'start',
    title: 'Start',
    icon: win10logo,
  },
  {
    id: 'dock-2',
    name: 'file-explorer',
    title: 'File Explorer',
    icon: fileExplorer,
  },
  {
    id: 'dock-3',
    name: 'vs-code',
    title: 'Visual Studio Code',
    icon: vsCode,
  },
  {
    id: 'dock-4',
    name: 'chrome',
    title: 'Chrome',
    icon: chrome,
  },
];

export default dockItems;
