import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import store from './util/Store';
import { createBrowserRouter } from 'react-router-dom';
import Watchpage from './components/Watchpage';
import { VideoContainer } from './components/VideoContainer';
import { RouterProvider } from 'react-router';
const appRouter = createBrowserRouter([{
  path:'/',
  element:<Body/>,
  children:[
    {
      path:'/watch',
      element:<Watchpage/>,
    },
    {
      path:'/',
      element:<VideoContainer/>,
    },
  ],
}])

function App() {
  return (
    
    <Provider store={store}>
      <RouterProvider router={appRouter}/>
    </Provider>
    
  );
}

export default App;
