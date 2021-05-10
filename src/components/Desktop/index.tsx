import classnames from 'classnames';
import desktopItems from '../../constants/desktop-items';

const Desktop = () => {
  return (
    <div className="desktop">
      {desktopItems.map((item) => (
        <div
          className={classnames({
            'desktop-icon': true,
            [item.name]: true,
          })}
          title={item.description}
        >
          <div className="icon">
            <img src={item.logo} alt="" />
          </div>
          <span className="title">{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Desktop;
