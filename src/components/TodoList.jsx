// import React, { useState, useEffect } from 'react';
// import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';
// import { db, serverTimestamp } from '../firebase';
// import TodoListDetails from './TodoListDetails';
// import './TodoList.css';

// const TodoList = ({ user }) => {
//   const [todoLists, setTodoLists] = useState([]);
//   const [newTodoListName, setNewTodoListName] = useState('');

//   useEffect(() => {
//     const fetchTodoLists = async () => {
//       if (user) {
//         const q = query(collection(db, 'todos'), where('userId', '==', user.uid));
//         const querySnapshot = await getDocs(q);
//         const fetchedTodoLists = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         setTodoLists(fetchedTodoLists);
//       }
//     };

//     fetchTodoLists();
//   }, [user]);

//   const addTodoList = async (e) => {
//     e.preventDefault();
//     const docRef = await addDoc(collection(db, 'todos'), {
//       name: newTodoListName,
//       userId: user.uid,
//       userEmail: user.email,
//       tasks: [],
//       createdAt: serverTimestamp(),
//       updatedAt: serverTimestamp(),
//     });
//     setTodoLists([...todoLists, { id: docRef.id, name: newTodoListName, tasks: [] }]);
//     setNewTodoListName('');
//   };

//   const updateTodoLists = (updatedTodoList) => {
//     setTodoLists((prevTodoLists) =>
//       prevTodoLists.map((todoList) =>
//         todoList.id === updatedTodoList.id ? updatedTodoList : todoList
//       )
//     );
//   };

//   return (
//     <div className="todo-list-container">
//       <h2>Todo Lists</h2>
//       <form onSubmit={addTodoList} className="add-todo-list-form">
//         <input
//           type="text"
//           placeholder="New Todo List"
//           value={newTodoListName}
//           onChange={(e) => setNewTodoListName(e.target.value)}
//           required
//         />
//         <button type="submit">Add Todo List</button>
//       </form>
//       <div className="todo-lists">
//         {todoLists.map((todoList) => (
//           <TodoListDetails
//             key={todoList.id}
//             todoList={todoList}
//             updateTodoLists={updateTodoLists}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TodoList;


import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { db, serverTimestamp } from '../firebase';
import TodoListDetails from './TodoListDetails';
import './TodoList.css';

const TodoList = ({ user }) => {
  const [todoLists, setTodoLists] = useState([]);
  const [newTodoListName, setNewTodoListName] = useState('');

  useEffect(() => {
    const fetchTodoLists = async () => {
      if (user) {
        const q = query(collection(db, 'todos'), where('userId', '==', user.uid));
        const querySnapshot = await getDocs(q);
        const fetchedTodoLists = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setTodoLists(fetchedTodoLists);
      }
    };

    fetchTodoLists();
  }, [user]);

  const addTodoList = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, 'todos'), {
      name: newTodoListName,
      userId: user.uid,
      userEmail: user.email, // Store user email
      tasks: [],
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    setTodoLists([...todoLists, { id: docRef.id, name: newTodoListName, userEmail: user.email, tasks: [] }]);
    setNewTodoListName('');
  };

  const updateTodoLists = (updatedTodoList) => {
    setTodoLists((prevTodoLists) =>
      prevTodoLists.map((todoList) =>
        todoList.id === updatedTodoList.id ? updatedTodoList : todoList
      )
    );
  };

  return (
    <div className="todo-list-container">
      <h2>Todo Lists</h2>
      <form onSubmit={addTodoList} className="add-todo-list-form">
        <input
          type="text"
          placeholder="New Todo List"
          value={newTodoListName}
          onChange={(e) => setNewTodoListName(e.target.value)}
          required
        />
        <button type="submit">Add Todo List</button>
      </form>
      <div className="todo-lists">
        {todoLists.map((todoList) => (
          <TodoListDetails
            key={todoList.id}
            todoList={todoList}
            updateTodoLists={updateTodoLists}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;

