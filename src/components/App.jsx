import React from 'react';
import Header from './Header';
import ProduceList from './ProduceList';
import ScheduleList from './ScheduleList';

function App() {
  return (
    <div>
      <div className = "container-fluid">
        <div className="jumbotron">
          <Header />
        </div>
        <div className="col-md-3">
          <ScheduleList />
        </div>
        <div className = "col-md-3">
          <ProduceList />
        </div>
      </div>
    </div>
  );
}

export default App;
