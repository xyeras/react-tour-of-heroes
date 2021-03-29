import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar'
import AppRouter from './routers/AppRouter'


const App = () => {
  return (
    <Router>

      <AppRouter />
        
    </Router>
  );
};

export default App;