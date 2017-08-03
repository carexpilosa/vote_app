import React from 'react';

export default function Layout({children, title}) {
  console.log(children);
  return  (
    <div className="Background">
      <div className="Header">
        <div className="Title">{title}
          Vote as a Service
        </div>
      </div>

      <div className="Main">
        <div className="Container">
          {children}
        </div>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children:   React.PropTypes.element.isRequired
};
