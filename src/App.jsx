// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import TodoList from './components/TodoList';
// import BackOfficePanel from './components/BackOfficePanel';
// import './App.css';

// const App = () => {
//   const [user, setUser] = useState(null);
//   console.log(user)

//   return (
//     <Router>
//       <div className="app">
//         <Routes>
//           <Route path="/" element={<Signup />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login onLogin={setUser} />} />
//           <Route path="/todolist" element={<TodoList user={user} />} />
//           <Route path="/backoffice" element={<BackOfficePanel />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import TodoList from './components/TodoList';
import BackOfficePanel from './components/BackOfficePanel';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="app">
        <header>
          <nav>
            <ul>
              <li><Link to="/signup">Signup</Link></li>
              <li><Link to="/login">Login</Link></li>
              {/* <li><Link to="/todolist">Todo List</Link></li> */}
              {user && <li><Link to="/todolist">Todo List</Link></li>}
              {user && <li><Link to="/backoffice">Back Office</Link></li>}
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route path="/todolist" element={<TodoList user={user} />} />
          <Route path="/backoffice" element={<BackOfficePanel />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

