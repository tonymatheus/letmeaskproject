import {Route, BrowserRouter} from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { NewRoom } from './pages/NewRoom/NewRoom';
import {AuthContextProvider} from './Contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider >
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
   
  );
}

export default App;
