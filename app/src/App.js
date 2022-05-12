import {BrowserRouter , Routes , Route} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { HomePage, Checkoutpage, Loginpage, Detail, CategoryPage } from "./pages";
import {Provider} from 'react-redux'
import store from "./store";

import './assets/css/global.scss'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/checkout' element={<Checkoutpage />} />
            <Route path='/detail' element={<Detail />} />
            <Route path='category' element={<CategoryPage />}/>
          </Route>
          <Route path='/login' element = {<Loginpage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}


export default App;
