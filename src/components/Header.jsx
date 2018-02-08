import React from 'react';

function Header() {
  var headerStyles = {
    textAlign: 'center',
    fontFamily: 'Trebuchet MS',
    imgSrc: '../img/Avery.jpg'
  };
  return(
    <div style={headerStyles}>
      <div className="well">
        <h1>Avery's Organics</h1>
      </div>
    </div>
  );
}

export default Header;
