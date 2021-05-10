import { useState, useEffect } from 'react';
import classnames from 'classnames';
import { dockItemsLeft, dockItemsRight } from '../../constants/dock-items';
import dayOfWeek from '../../constants/day-of-week';
import monthAsString from '../../constants/month-string';

const Dock = () => {
  const [time, setTime] = useState(new Date());

  const displayTime = () => {
    return `${time.getHours()}:${time.getMinutes()}`;
  };

  const displayDate = () => {
    return `${time.getMonth() + 1}/${time.getDate()}/${time.getFullYear()}`;
  };

  const displayDatetime = () => {
    return `${dayOfWeek[time.getDay()]}, ${
      monthAsString[time.getMonth()]
    } ${time.getDate()}, ${time.getFullYear()}`;
  };

  useEffect(() => {
    const timeId = setInterval(() => {
      setTime(new Date());
    }, 1);

    return () => {
      clearInterval(timeId);
    };
  }, []);

  return (
    <div className="dock">
      <div className="left">
        {dockItemsLeft.map((item) => (
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
        {dockItemsRight.map((item) => (
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

        <div
          className="dock-item language"
          title="To switch input methods, press&#013;Windows key + Space"
        >
          <span>ENG</span>
          <span>US</span>
        </div>
        <div className="dock-item time" title={displayDatetime()}>
          <span>{displayTime()}</span>
          <span>{displayDate()}</span>
        </div>
        <div className="show-desktop"></div>
      </div>
    </div>
  );
};

export default Dock;
