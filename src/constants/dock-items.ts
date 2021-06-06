import { chrome, fileExplorer, vsCode, wifiFull, win10logo } from './icons';

export enum DockItemsLeftTitle {
  Start = 'Start',
  'FileExplorer' = 'File Explorer',
  'VisualStudioCode' = 'Visual Studio Code',
  Chrome = 'Chrome',
}

export const dockItemsLeft = [
  {
    id: 'dock-1',
    name: 'start',
    title: DockItemsLeftTitle.Start,
    icon: win10logo,
  },
  {
    id: 'dock-2',
    name: 'file-explorer',
    title: DockItemsLeftTitle.FileExplorer,
    icon: fileExplorer,
  },
  {
    id: 'dock-3',
    name: 'vs-code',
    title: DockItemsLeftTitle.VisualStudioCode,
    icon: vsCode,
  },
  {
    id: 'dock-4',
    name: 'chrome',
    title: DockItemsLeftTitle.Chrome,
    icon: chrome,
  },
];

export const dockItemsRight = [
  {
    id: 'dockr-1',
    name: 'internet',
    title: 'Internet access',
    icon: wifiFull,
  },
];
