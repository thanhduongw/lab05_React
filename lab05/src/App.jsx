
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Card from './components/Card';
import { useState, useEffect } from 'react';

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
      <div className="header border">
        HEADER
      </div>

      <div className="menu border">
        NAV
      </div>

      <div className="content">
        <div className="d-flex align-items-center mb-2">
          <img src="../imgs/Squares four 1.png" alt="" className="me-2" style={{ width: '40px', height: '40px' }} />
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

      <div className="table border">
        TABLE DATA
      </div>
    </div>
  );
}

export default App
