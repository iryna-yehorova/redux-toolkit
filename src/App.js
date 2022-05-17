import PetList from "./components/PetList"
import OwnerList from './components/OwnerList'
import { store } from './state/store'
import { Provider } from 'react-redux'

function App() {
  return (  
    <div className="App">
      <Provider store={store}>
        <PetList />
        <OwnerList />
      </Provider>
    </div>
  );
}

export default App;
