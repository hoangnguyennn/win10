import classnames from 'classnames';
import dockItems from '../../constants/dock-items';

const Dock = () => {
  return (
    <div className="dock">
      <div className="left">
        {dockItems.map((item) => (
          <div
            key={item.id}
            className={classnames({
              'dock-item': true,
              [item.name]: true,
            })}
            title={item.title}
          >
            <img src={item.icon} alt="" />
          </div>
        ))}
      </div>

      <div className="right">
        {/* <div className="dock-item internet" title="Internet access">
          <img src={wifiFull} alt="" />
        </div> */}
        <div
          className="dock-item language"
          title="To switch input methods, press&#013;Windows key + Space"
        >
          <span>ENG</span>
          <span>US</span>
        </div>
        <div className="dock-item time" title="Monday, May 10, 2021">
          <span>4:28 PM</span>
          <span>5/10/2021</span>
        </div>
        <div className="show-desktop"></div>
      </div>
    </div>
  );
};

export default Dock;
