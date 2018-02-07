import React from 'react';
import Header from './Header';
import Produce from './Produce';
import Schedule from './Schedule';

function App() {
  return (
    <div>
      <style jsx global>{`
        body {
          font-family: Helvetica;
        },
        .scheduleBox {
          border: 2px solid #000000;
          display: block;
          margin: 40px;
        },

        .produceBox {
          border: 2px solid #000000;
          display: block;
          margin: 40px;
        }
      `}</style>
      <div className="jumbotron">
        <Header />
      </div>
      <div className = "col-lg-6">
        <div className = "scheduleBox">
          <h2>Our Schedule</h2>
          <hr />
          <Schedule />
        </div>
      </div>
      <div className = "col-lg-6">
        <div className = "produceBox">
          <h2>Our Produce</h2>
          <hr />
          <Produce />
        </div>
      </div>
    </div>
  );
}

export default App;
