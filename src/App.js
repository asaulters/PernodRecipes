import './App.css';
import Layout from './Components/Layout/Layout';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <div className="App">
        <Layout>
          <div>
            <AppRoutes /> 
          </div>
        </Layout>
    </div>
  );
}


export default App;
