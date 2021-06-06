import { useContext, useEffect, useRef } from 'react';
import classnames from 'classnames';
import { AppContext } from '../../contexts/app.context';
import {
  arrowLight,
  quickAccess,
  folder,
  desktop,
  pin,
  thisPc,
  os,
  disk,
  videos,
} from '../../constants/icons';

const Program = () => {
  const programRef = useRef<HTMLDivElement>(null);
  const actionTopRef = useRef<HTMLDivElement>(null);

  const { closeFileExplorer, isFullScreenFileExplorer } = useContext(
    AppContext
  );

  useEffect(() => {
    const program = programRef.current;
    const actionTop = actionTopRef.current;

    if (program) {
      program.style.top = `50px`;
      program.style.left = `calc(50% - 500px)`;
    }

    let pos1 = 0;
    let pos2 = 0;
    let pos3 = 0;
    let pos4 = 0;

    const handleMouseDown = (event: globalThis.MouseEvent) => {
      pos3 = event.clientX;
      pos4 = event.clientY;

      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('mousemove', handleMouseMove);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };

    const handleMouseMove = (event: globalThis.MouseEvent) => {
      pos1 = pos3 - event.clientX;
      pos2 = pos4 - event.clientY;
      pos3 = event.clientX;
      pos4 = event.clientY;

      if (program) {
        program.style.top = `${program.offsetTop - pos2}px`;
        program.style.left = `${program.offsetLeft - pos1}px`;
      }
    };

    actionTop?.addEventListener('mousedown', handleMouseDown);

    return () => {
      actionTop?.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={classnames({
        program: true,
        'full-screen': isFullScreenFileExplorer,
      })}
      ref={programRef}
    >
      <div className="actions-top" ref={actionTopRef}>
        <div className="left"></div>
        <div className="right">
          <div className="minimize" title="Minimize">
            <div className="icon"></div>
          </div>
          <div className="maximize" title="Maximize">
            <div className="icon"></div>
          </div>
          <div className="close" title="Close" onClick={closeFileExplorer}>
            <div className="icon"></div>
          </div>
        </div>
      </div>
      <div className="actions-middle"></div>
      <div className="navigate">
        <div className="back">
          <img src={arrowLight} alt="" />
        </div>
        <div className="forward">
          <img src={arrowLight} alt="" />
        </div>
        <div className="recent-location"></div>
        <div className="upto-desktop"></div>
        <div className="access-url"></div>
        <div className="search-box">
          <div className="icon"></div>
          <input type="text" className="input" placeholder="Search This PC" />
        </div>
      </div>
      <div className="main">
        <div className="sidebar">
          <div className="quick-access">
            <h3 className="title">
              <img src={quickAccess} alt="" />
              Quick Access
            </h3>
            <ul className="list">
              <li className="item">
                <img src={folder} alt="" />
                <span>Downloads</span>
                <img src={pin} alt="" />
              </li>
              <li className="item">
                <img src={folder} alt="" />
                <span>Documents</span>
                <img src={pin} alt="" />
              </li>
              <li className="item">
                <img src={desktop} alt="" />
                <span>Desktop</span>
              </li>
            </ul>
          </div>

          <div className="quick-access this-pc">
            <h3 className="title">
              <img src={thisPc} alt="" />
              This PC
            </h3>
            <ul className="list">
              <li className="item">
                <img src={desktop} alt="" />
                <span>Desktop</span>
              </li>
              <li className="item">
                <img src={videos} alt="" />
                <span>Videos</span>
              </li>
              <li className="item">
                <img src={os} alt="" />
                <span>OS (C:)</span>
              </li>
              <li className="item">
                <img src={disk} alt="" />
                <span>Local Disk (D:)</span>
              </li>
              <li className="item">
                <img src={disk} alt="" />
                <span>Local Disk (E:)</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="content"></div>
      </div>
    </div>
  );
};

export default Program;
