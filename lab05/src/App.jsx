import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from './components/Card';
import Table from './components/Table';
import { useState, useEffect } from 'react';
import { order } from './data/order';

function App() {
  const [overViewData, setOverViewData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://67f59cbe913986b16fa51f11.mockapi.io/overview');
        const data = await response.json();
        setOverViewData(data);
      } catch (error) {
        console.error('Error fetching overview data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="custom-container m-2">
      <div className="header border">HEADER</div>
      <div className="menu border">NAV</div>

      <div className="content">
        <div className="d-flex align-items-center mb-2">
          <img src="../imgs/Squares four 1.png" alt="" className="me-2" />
          <h4 className="fw-bold mb-0">Overview</h4>
        </div>
        <div className="row row-cols-3 p-0">
          {overViewData.map((data, index) => (
            <div className="col" key={index}>
              <Card overViewData={data} />
            </div>
          ))}
        </div>
      </div>

      <div className="table mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center mb-2">
            <img src="../imgs/File text 1.png" alt="" />
            <h5 className="fw-bold mb-0">Detailed report</h5>
          </div>
          <div>
            <button className="btn me-2" style={{ color: '#F44B87', borderColor: "#F44B87" }}><img src="../imgs/Download.png" alt="" />Import</button>
            <button className="btn" style={{ color: '#F44B87', borderColor: "#F44B87" }}><img src="../imgs/Move up.png" alt="" />Export</button>
          </div>
        </div>
        <Table data={order} />
      </div>
    </div>
  );
}

export default App;
