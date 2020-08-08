import React from 'react';
import Topbar from './containerComponents/Topbar'
import Content from './containerComponents/Content'

const style = {
    width: "75%",
    position: "absolute",
    right: "5%"
};

function Container() {
  return (
    <div id="content-wrapper" className="d-flex flex-column" style={style}>
        <div id="content">
            <Topbar />
            <Content />
        </div>
    </div>
  );
}

export default Container;
