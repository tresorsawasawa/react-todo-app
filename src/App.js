import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
// import About from './pages/About';
// import NotMatch from './functionBased/pages/NotMatch';
// import SinglePage from './functionBased/pages/SinglePage';
// import DynamicPage from './functionBased/pages/DynamicPage';
// import User from './functionBased/pages/User';

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route index element={<TodoContainer />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
