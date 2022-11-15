import './App.css';
import Sidebar from './components/Sitebar';
import DashboardContent from './components/DashboardContent';
import Counter from './components/Counter';

function App() {
  
  return (
    <div className='container'>
      <div className='counter'>
        <Counter />
      </div>
      
      <div className='row'>
        
        <div className='col-3'>
          <Sidebar />
        </div>


        <div className='col-9'>
          <DashboardContent />
        </div>


      </div>
    </div>
  );
}

export default App;
