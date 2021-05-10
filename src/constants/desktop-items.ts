import { thisPc, bin } from './icons';

const desktopItems = [
  {
    id: 'desk-1',
    title: 'This PC',
    name: 'this-pc',
    description:
      'Shows the disk drivers and hardware connected to this computer.',
    logo: thisPc,
  },
  {
    id: 'desk-2',
    title: 'Recycle Bin',
    name: 'bin',
    description: 'Contains the files and folders that you have deleted.',
    logo: bin,
  },
];

export default desktopItems;
