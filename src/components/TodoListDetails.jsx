


// import React, { useState } from 'react';
// import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
// import { db } from '../firebase';

// const TodoListDetails = ({ todoList, updateTodoLists }) => {
//   const [tasks, setTasks] = useState(todoList.tasks || []);
//   const [newTask, setNewTask] = useState({
//     title: '',
//     description: '',
//     dueDate: '',
//     priority: '',
//   });

//   const addTask = async (e) => {
//     e.preventDefault();

//     const newTaskData = {
//       ...newTask,
//       createdAt: new Date().toISOString(), // Use client-side timestamp for initial task creation
//       userEmail: todoList.userEmail, // Store user email
//     };

//     const todoRef = doc(db, 'todos', todoList.id);

//     await updateDoc(todoRef, {
//       tasks: arrayUnion(newTaskData),
//     });

//     const updatedTasks = [...tasks, newTaskData];
//     setTasks(updatedTasks);

//     setNewTask({ title: '', description: '', dueDate: '', priority: '' });
//     updateTodoLists({
//       ...todoList,
//       tasks: updatedTasks,
//     });
//   };

//   const handleDragStart = (e, task) => {
//     e.dataTransfer.setData('task', JSON.stringify(task));
//     e.dataTransfer.setData('sourceListId', todoList.id);
//   };

//   const handleDropOnPriority = async (e, newPriority) => {
//     e.preventDefault();
//     const task = JSON.parse(e.dataTransfer.getData('task'));
//     const sourceListId = e.dataTransfer.getData('sourceListId');

//     const updatedTask = { ...task, priority: newPriority };
//     const sourceTodoRef = doc(db, 'todos', sourceListId);

//     await updateDoc(sourceTodoRef, {
//       tasks: arrayRemove(task),
//     });

//     await updateDoc(sourceTodoRef, {
//       tasks: arrayUnion(updatedTask),
//     });

//     if (todoList.id === sourceListId) {
//       const updatedTasks = tasks.map((t) =>
//         t.title === task.title ? updatedTask : t
//       );
//       setTasks(updatedTasks);
//       updateTodoLists({
//         ...todoList,
//         tasks: updatedTasks,
//       });
//     }
//   };

//   const allowDrop = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div className="todo-list">
//       <h3>{todoList.name}</h3>
//       <form onSubmit={addTask} className="add-task-form">
//         <input
//           type="text"
//           placeholder="Title"
//           value={newTask.title}
//           onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Description"
//           value={newTask.description}
//           onChange={(e) =>
//             setNewTask({ ...newTask, description: e.target.value })
//           }
//           required
//         />
//         <input
//           type="date"
//           value={newTask.dueDate}
//           onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
//           required
//         />
//         <select
//           value={newTask.priority}
//           onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
//           required
//         >
//           <option value="">Priority</option>
//           <option value="low">Low</option>
//           <option value="medium">Medium</option>
//           <option value="high">High</option>
//         </select>
//         <button type="submit">Add Task</button>
//       </form>
//       <div className="tasks">
//         <div
//           className="priority-section low-priority"
//           onDragOver={allowDrop}
//           onDrop={(e) => handleDropOnPriority(e, 'low')}
//         >
//           <h4>Low Priority</h4>
//           {tasks
//             .filter((task) => task.priority === 'low')
//             .map((task, index) => (
//               <div
//                 key={index}
//                 draggable
//                 onDragStart={(e) => handleDragStart(e, task)}
//               >
//                 <h5>{task.title}</h5>
//                 <p>{task.description}</p>
//                 <p>{task.dueDate}</p>
//               </div>
//             ))}
//         </div>
//         <div
//           className="priority-section medium-priority"
//           onDragOver={allowDrop}
//           onDrop={(e) => handleDropOnPriority(e, 'medium')}
//         >
//           <h4>Medium Priority</h4>
//           {tasks
//             .filter((task) => task.priority === 'medium')
//             .map((task, index) => (
//               <div
//                 key={index}
//                 draggable
//                 onDragStart={(e) => handleDragStart(e, task)}
//               >
//                 <h5>{task.title}</h5>
//                 <p>{task.description}</p>
//                 <p>{task.dueDate}</p>
//               </div>
//             ))}
//         </div>
//         <div
//           className="priority-section high-priority"
//           onDragOver={allowDrop}
//           onDrop={(e) => handleDropOnPriority(e, 'high')}
//         >
//           <h4>High Priority</h4>
//           {tasks
//             .filter((task) => task.priority === 'high')
//             .map((task, index) => (
//               <div
//                 key={index}
//                 draggable
//                 onDragStart={(e) => handleDragStart(e, task)}
//               >
//                 <h5>{task.title}</h5>
//                 <p>{task.description}</p>
//                 <p>{task.dueDate}</p>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TodoListDetails;



// import React, { useState } from 'react';
// import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
// import { db } from '../firebase';

// const TodoListDetails = ({ todoList, updateTodoLists, todoLists }) => {
//   const [tasks, setTasks] = useState(todoList.tasks || []);
//   const [newTask, setNewTask] = useState({
//     title: '',
//     description: '',
//     dueDate: '',
//     priority: '',
//   });

//   const addTask = async (e) => {
//     e.preventDefault();

//     const newTaskData = {
//       ...newTask,
//       createdAt: new Date().toISOString(), // Use client-side timestamp for initial task creation
//       userEmail: todoList.userEmail, // Store user email
//     };

//     const todoRef = doc(db, 'todos', todoList.id);

//     await updateDoc(todoRef, {
//       tasks: arrayUnion(newTaskData),
//     });

//     const updatedTasks = [...tasks, newTaskData];
//     setTasks(updatedTasks);

//     setNewTask({ title: '', description: '', dueDate: '', priority: '' });
//     updateTodoLists({
//       ...todoList,
//       tasks: updatedTasks,
//     });
//   };

//   const handleDragStart = (e, task) => {
//     e.dataTransfer.setData('task', JSON.stringify(task));
//     e.dataTransfer.setData('sourceListId', todoList.id);
//   };

//   const handleDropOnPriority = async (e, newPriority) => {
//     e.preventDefault();
//     const task = JSON.parse(e.dataTransfer.getData('task'));
//     const sourceListId = e.dataTransfer.getData('sourceListId');

//     const updatedTask = { ...task, priority: newPriority };
//     const sourceTodoRef = doc(db, 'todos', sourceListId);

//     await updateDoc(sourceTodoRef, {
//       tasks: arrayRemove(task),
//     });

//     await updateDoc(sourceTodoRef, {
//       tasks: arrayUnion(updatedTask),
//     });

//     if (todoList.id === sourceListId) {
//       const updatedTasks = tasks.map((t) =>
//         t.title === task.title ? updatedTask : t
//       );
//       setTasks(updatedTasks);
//       updateTodoLists({
//         ...todoList,
//         tasks: updatedTasks,
//       });
//     }
//   };

//   const handleDropOnList = async (e, targetListId) => {
//     e.preventDefault();
//     const task = JSON.parse(e.dataTransfer.getData('task'));
//     const sourceListId = e.dataTransfer.getData('sourceListId');

//     if (sourceListId === targetListId) return;

//     const sourceTodoRef = doc(db, 'todos', sourceListId);
//     const targetTodoRef = doc(db, 'todos', targetListId);

//     // Remove the task from the source list in Firebase
//     await updateDoc(sourceTodoRef, {
//       tasks: arrayRemove(task),
//     });

//     // Add the task to the target list in Firebase
//     await updateDoc(targetTodoRef, {
//       tasks: arrayUnion(task),
//     });

//     // Update the local state for source list
//     const sourceList = todoLists.find((list) => list.id === sourceListId);
//     const updatedSourceTasks = sourceList.tasks.filter((t) => t.title !== task.title);
//     updateTodoLists({
//       ...sourceList,
//       tasks: updatedSourceTasks,
//     });

//     // Update the local state for target list
//     const updatedTargetTasks = [...tasks, task];
//     setTasks(updatedTargetTasks);
//     updateTodoLists({
//       ...todoList,
//       tasks: updatedTargetTasks,
//     });
//   };

//   const allowDrop = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div
//       className="todo-list"
//       onDragOver={allowDrop}
//       onDrop={(e) => handleDropOnList(e, todoList.id)}
//     >
//       <h3>{todoList.name}</h3>
//       <form onSubmit={addTask} className="add-task-form">
//         <input
//           type="text"
//           placeholder="Title"
//           value={newTask.title}
//           onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Description"
//           value={newTask.description}
//           onChange={(e) =>
//             setNewTask({ ...newTask, description: e.target.value })
//           }
//           required
//         />
//         <input
//           type="date"
//           value={newTask.dueDate}
//           onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
//           required
//         />
//         <select
//           value={newTask.priority}
//           onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
//           required
//         >
//           <option value="">Priority</option>
//           <option value="low">Low</option>
//           <option value="medium">Medium</option>
//           <option value="high">High</option>
//         </select>
//         <button type="submit">Add Task</button>
//       </form>
//       <div className="tasks">
//         <div
//           className="priority-section low-priority"
//           onDragOver={allowDrop}
//           onDrop={(e) => handleDropOnPriority(e, 'low')}
//         >
//           <h4>Low Priority</h4>
//           {tasks
//             .filter((task) => task.priority === 'low')
//             .map((task, index) => (
//               <div
//                 key={index}
//                 draggable
//                 onDragStart={(e) => handleDragStart(e, task)}
//               >
//                 <h5>{task.title}</h5>
//                 <p>{task.description}</p>
//                 <p>{task.dueDate}</p>
//               </div>
//             ))}
//         </div>
//         <div
//           className="priority-section medium-priority"
//           onDragOver={allowDrop}
//           onDrop={(e) => handleDropOnPriority(e, 'medium')}
//         >
//           <h4>Medium Priority</h4>
//           {tasks
//             .filter((task) => task.priority === 'medium')
//             .map((task, index) => (
//               <div
//                 key={index}
//                 draggable
//                 onDragStart={(e) => handleDragStart(e, task)}
//               >
//                 <h5>{task.title}</h5>
//                 <p>{task.description}</p>
//                 <p>{task.dueDate}</p>
//               </div>
//             ))}
//         </div>
//         <div
//           className="priority-section high-priority"
//           onDragOver={allowDrop}
//           onDrop={(e) => handleDropOnPriority(e, 'high')}
//         >
//           <h4>High Priority</h4>
//           {tasks
//             .filter((task) => task.priority === 'high')
//             .map((task, index) => (
//               <div
//                 key={index}
//                 draggable
//                 onDragStart={(e) => handleDragStart(e, task)}
//               >
//                 <h5>{task.title}</h5>
//                 <p>{task.description}</p>
//                 <p>{task.dueDate}</p>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TodoListDetails;


// //1

// import React, { useState } from 'react';
// import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
// import { db } from '../firebase';

// const TodoListDetails = ({ todoList, updateTodoLists, todoLists }) => {
//   const [tasks, setTasks] = useState(todoList.tasks || []);
//   const [newTask, setNewTask] = useState({
//     title: '',
//     description: '',
//     dueDate: '',
//     priority: '',
//   });

//   const addTask = async (e) => {
//     e.preventDefault();

//     const newTaskData = {
//       ...newTask,
//       createdAt: new Date().toISOString(), // Use client-side timestamp for initial task creation
//       userEmail: todoList.userEmail, // Store user email
//     };

//     const todoRef = doc(db, 'todos', todoList.id);

//     await updateDoc(todoRef, {
//       tasks: arrayUnion(newTaskData),
//     });

//     const updatedTasks = [...tasks, newTaskData];
//     setTasks(updatedTasks);

//     setNewTask({ title: '', description: '', dueDate: '', priority: '' });
//     updateTodoLists({
//       ...todoList,
//       tasks: updatedTasks,
//     });
//   };

//   const handleDragStart = (e, task) => {
//     e.dataTransfer.setData('task', JSON.stringify(task));
//     e.dataTransfer.setData('sourceListId', todoList.id);
//   };

//   const handleDropOnPriority = async (e, newPriority) => {
//     e.preventDefault();
//     const task = JSON.parse(e.dataTransfer.getData('task'));
//     const sourceListId = e.dataTransfer.getData('sourceListId');

//     const updatedTask = { ...task, priority: newPriority };
//     const sourceTodoRef = doc(db, 'todos', sourceListId);

//     await updateDoc(sourceTodoRef, {
//       tasks: arrayRemove(task),
//     });

//     await updateDoc(sourceTodoRef, {
//       tasks: arrayUnion(updatedTask),
//     });

//     if (todoList.id === sourceListId) {
//       const updatedTasks = tasks.map((t) =>
//         t.title === task.title ? updatedTask : t
//       );
//       setTasks(updatedTasks);
//       updateTodoLists({
//         ...todoList,
//         tasks: updatedTasks,
//       });
//     }
//   };

//   const handleDropOnList = async (e, targetListId) => {
//     e.preventDefault();
//     const task = JSON.parse(e.dataTransfer.getData('task'));
//     const sourceListId = e.dataTransfer.getData('sourceListId');

//     if (sourceListId === targetListId) return;

//     const sourceTodoRef = doc(db, 'todos', sourceListId);
//     const targetTodoRef = doc(db, 'todos', targetListId);

//     // Remove the task from the source list in Firebase
//     await updateDoc(sourceTodoRef, {
//       tasks: arrayRemove(task),
//     });

//     // Add the task to the target list in Firebase
//     await updateDoc(targetTodoRef, {
//       tasks: arrayUnion(task),
//     });

//     // Update the local state for source list
//     const sourceList = todoLists.find((list) => list.id === sourceListId);
//     const updatedSourceTasks = sourceList.tasks.filter((t) => t.title !== task.title);
//     updateTodoLists({
//       ...sourceList,
//       tasks: updatedSourceTasks,
//     });

//     // Update the local state for target list
//     const updatedTargetTasks = [...tasks, task];
//     setTasks(updatedTargetTasks);
//     updateTodoLists({
//       ...todoList,
//       tasks: updatedTargetTasks,
//     });
//   };

//   const allowDrop = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div
//       className="todo-list"
//       onDragOver={allowDrop}
//       onDrop={(e) => handleDropOnList(e, todoList.id)}
//     >
//       <h3>{todoList.name}</h3>
//       <form onSubmit={addTask} className="add-task-form">
//         <input
//           type="text"
//           placeholder="Title"
//           value={newTask.title}
//           onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Description"
//           value={newTask.description}
//           onChange={(e) =>
//             setNewTask({ ...newTask, description: e.target.value })
//           }
//           required
//         />
//         <input
//           type="date"
//           value={newTask.dueDate}
//           onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
//           required
//         />
//         <select
//           value={newTask.priority}
//           onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
//           required
//         >
//           <option value="">Priority</option>
//           <option value="low">Low</option>
//           <option value="medium">Medium</option>
//           <option value="high">High</option>
//         </select>
//         <button type="submit">Add Task</button>
//       </form>
//       <div className="tasks">
//         <div
//           className="priority-section low-priority"
//           onDragOver={allowDrop}
//           onDrop={(e) => handleDropOnPriority(e, 'low')}
//         >
//           <h4>Low Priority</h4>
//           {tasks
//             .filter((task) => task.priority === 'low')
//             .map((task, index) => (
//               <div
//                 key={index}
//                 draggable
//                 onDragStart={(e) => handleDragStart(e, task)}
//               >
//                 <h5>{task.title}</h5>
//                 <p>{task.description}</p>
//                 <p>{task.dueDate}</p>
//               </div>
//             ))}
//         </div>
//         <div
//           className="priority-section medium-priority"
//           onDragOver={allowDrop}
//           onDrop={(e) => handleDropOnPriority(e, 'medium')}
//         >
//           <h4>Medium Priority</h4>
//           {tasks
//             .filter((task) => task.priority === 'medium')
//             .map((task, index) => (
//               <div
//                 key={index}
//                 draggable
//                 onDragStart={(e) => handleDragStart(e, task)}
//               >
//                 <h5>{task.title}</h5>
//                 <p>{task.description}</p>
//                 <p>{task.dueDate}</p>
//               </div>
//             ))}
//         </div>
//         <div
//           className="priority-section high-priority"
//           onDragOver={allowDrop}
//           onDrop={(e) => handleDropOnPriority(e, 'high')}
//         >
//           <h4>High Priority</h4>
//           {tasks
//             .filter((task) => task.priority === 'high')
//             .map((task, index) => (
//               <div
//                 key={index}
//                 draggable
//                 onDragStart={(e) => handleDragStart(e, task)}
//               >
//                 <h5>{task.title}</h5>
//                 <p>{task.description}</p>
//                 <p>{task.dueDate}</p>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TodoListDetails;
// //1

//2
// import React, { useState } from 'react';
// import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
// import { db } from '../firebase';

// const TodoListDetails = ({ todoList, updateTodoLists, todoLists }) => {
//   const [tasks, setTasks] = useState(todoList.tasks || []);
//   const [newTask, setNewTask] = useState({
//     title: '',
//     description: '',
//     dueDate: '',
//     priority: '',
//   });

//   const addTask = async (e) => {
//     e.preventDefault();

//     const newTaskData = {
//       ...newTask,
//       createdAt: new Date().toISOString(), // Use client-side timestamp for initial task creation
//       userEmail: todoList.userEmail, // Store user email
//     };

//     const todoRef = doc(db, 'todos', todoList.id);

//     await updateDoc(todoRef, {
//       tasks: arrayUnion(newTaskData),
//     });

//     const updatedTasks = [...tasks, newTaskData];
//     setTasks(updatedTasks);

//     setNewTask({ title: '', description: '', dueDate: '', priority: '' });
//     updateTodoLists({
//       ...todoList,
//       tasks: updatedTasks,
//     });
//   };

//   const handleDragStart = (e, task) => {
//     e.dataTransfer.setData('task', JSON.stringify(task));
//     e.dataTransfer.setData('sourceListId', todoList.id);
//   };

//   const handleDropOnPriority = async (e, newPriority) => {
//     e.preventDefault();
//     const task = JSON.parse(e.dataTransfer.getData('task'));
//     const sourceListId = e.dataTransfer.getData('sourceListId');

//     const updatedTask = { ...task, priority: newPriority };
//     const sourceTodoRef = doc(db, 'todos', sourceListId);

//     await updateDoc(sourceTodoRef, {
//       tasks: arrayRemove(task),
//     });

//     await updateDoc(sourceTodoRef, {
//       tasks: arrayUnion(updatedTask),
//     });

//     if (todoList.id === sourceListId) {
//       const updatedTasks = tasks.map((t) =>
//         t.title === task.title ? updatedTask : t
//       );
//       setTasks(updatedTasks);
//       updateTodoLists({
//         ...todoList,
//         tasks: updatedTasks,
//       });
//     }
//   };

//   const handleDropOnList = async (e, targetListId) => {
//     e.preventDefault();
//     const task = JSON.parse(e.dataTransfer.getData('task'));
//     const sourceListId = e.dataTransfer.getData('sourceListId');

//     if (sourceListId === targetListId) return;

//     const sourceTodoRef = doc(db, 'todos', sourceListId);
//     const targetTodoRef = doc(db, 'todos', targetListId);

//     // Remove the task from the source list in Firebase
//     await updateDoc(sourceTodoRef, {
//       tasks: arrayRemove(task),
//     });

//     // Add the task to the target list in Firebase
//     await updateDoc(targetTodoRef, {
//       tasks: arrayUnion(task),
//     });

//     // Update the local state for source list
//     const sourceList = todoLists.find((list) => list.id === sourceListId);
//     const updatedSourceTasks = sourceList.tasks.filter((t) => t.title !== task.title);
//     updateTodoLists({
//       ...sourceList,
//       tasks: updatedSourceTasks,
//     });

//     // Update the local state for target list
//     if (todoList.id === targetListId) {
//       const updatedTargetTasks = [...tasks, task];
//       setTasks(updatedTargetTasks);
//       updateTodoLists({
//         ...todoList,
//         tasks: updatedTargetTasks,
//       });
//     }
//   };

 
  
//   const allowDrop = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div
//       className="todo-list"
//       onDragOver={allowDrop}
//       onDrop={(e) => handleDropOnList(e, todoList.id)}
//     >
//       <h3>{todoList.name}</h3>
//       <form onSubmit={addTask} className="add-task-form">
//         <input
//           type="text"
//           placeholder="Title"
//           value={newTask.title}
//           onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Description"
//           value={newTask.description}
//           onChange={(e) =>
//             setNewTask({ ...newTask, description: e.target.value })
//           }
//           required
//         />
//         <input
//           type="date"
//           value={newTask.dueDate}
//           onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
//           required
//         />
//         <select
//           value={newTask.priority}
//           onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
//           required
//         >
//           <option value="">Priority</option>
//           <option value="low">Low</option>
//           <option value="medium">Medium</option>
//           <option value="high">High</option>
//         </select>
//         <button type="submit">Add Task</button>
//       </form>
//       <div className="tasks">
//         <div
//           className="priority-section low-priority"
//           onDragOver={allowDrop}
//           onDrop={(e) => handleDropOnPriority(e, 'low')}
//         >
//           <h4>Low Priority</h4>
//           {tasks
//             .filter((task) => task.priority === 'low')
//             .map((task, index) => (
//               <div
//                 key={index}
//                 draggable
//                 onDragStart={(e) => handleDragStart(e, task)}
//               >
//                 <h5>{task.title}</h5>
//                 <p>{task.description}</p>
//                 <p>{task.dueDate}</p>
//               </div>
//             ))}
//         </div>
//         <div
//           className="priority-section medium-priority"
//           onDragOver={allowDrop}
//           onDrop={(e) => handleDropOnPriority(e, 'medium')}
//         >
//           <h4>Medium Priority</h4>
//           {tasks
//             .filter((task) => task.priority === 'medium')
//             .map((task, index) => (
//               <div
//                 key={index}
//                 draggable
//                 onDragStart={(e) => handleDragStart(e, task)}
//               >
//                 <h5>{task.title}</h5>
//                 <p>{task.description}</p>
//                 <p>{task.dueDate}</p>
//               </div>
//             ))}
//         </div>
//         <div
//           className="priority-section high-priority"
//           onDragOver={allowDrop}
//           onDrop={(e) => handleDropOnPriority(e, 'high')}
//         >
//           <h4>High Priority</h4>
//           {tasks
//             .filter((task) => task.priority === 'high')
//             .map((task, index) => (
//               <div
//                 key={index}
//                 draggable
//                 onDragStart={(e) => handleDragStart(e, task)}
//               >
//                 <h5>{task.title}</h5>
//                 <p>{task.description}</p>
//                 <p>{task.dueDate}</p>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TodoListDetails;



//3

// import React, { useState } from 'react';
// import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
// import { db } from '../firebase';

// const TodoListDetails = ({ todoList, updateTodoLists, todoLists }) => {
//   const [tasks, setTasks] = useState(todoList.tasks || []);
//   const [newTask, setNewTask] = useState({
//     title: '',
//     description: '',
//     dueDate: '',
//     priority: '',
//   });

//   const addTask = async (e) => {
//     e.preventDefault();

//     const newTaskData = {
//       ...newTask,
//       createdAt: new Date().toISOString(), // Use client-side timestamp for initial task creation
//       userEmail: todoList.userEmail, // Store user email
//     };

//     const todoRef = doc(db, 'todos', todoList.id);

//     await updateDoc(todoRef, {
//       tasks: arrayUnion(newTaskData),
//     });

//     const updatedTasks = [...tasks, newTaskData];
//     setTasks(updatedTasks);

//     setNewTask({ title: '', description: '', dueDate: '', priority: '' });
//     updateTodoLists({
//       ...todoList,
//       tasks: updatedTasks,
//     });
//   };

//   const handleDragStart = (e, task) => {
//     e.dataTransfer.setData('task', JSON.stringify(task));
//     e.dataTransfer.setData('sourceListId', todoList.id);
//   };

//   const handleDropOnPriority = async (e, newPriority) => {
//     e.preventDefault();
//     const task = JSON.parse(e.dataTransfer.getData('task'));
//     const sourceListId = e.dataTransfer.getData('sourceListId');

//     const updatedTask = { ...task, priority: newPriority };
//     const sourceTodoRef = doc(db, 'todos', sourceListId);

//     await updateDoc(sourceTodoRef, {
//       tasks: arrayRemove(task),
//     });

//     await updateDoc(sourceTodoRef, {
//       tasks: arrayUnion(updatedTask),
//     });

//     if (todoList.id === sourceListId) {
//       const updatedTasks = tasks.map((t) =>
//         t.title === task.title ? updatedTask : t
//       );
//       setTasks(updatedTasks);
//       updateTodoLists({
//         ...todoList,
//         tasks: updatedTasks,
//       });
//     }
//   };

//   const handleDropOnList = async (e, targetListId) => {
//     e.preventDefault();
//     const task = JSON.parse(e.dataTransfer.getData('task'));
//     const sourceListId = e.dataTransfer.getData('sourceListId');

//     if (sourceListId === targetListId) return;

//     const sourceTodoRef = doc(db, 'todos', sourceListId);
//     const targetTodoRef = doc(db, 'todos', targetListId);

//     // Remove the task from the source list in Firebase
//     await updateDoc(sourceTodoRef, {
//       tasks: arrayRemove(task),
//     });

//     // Immediately update local state for source list
//     const updatedSourceTasks = tasks.filter((t) => t.title !== task.title);
//     if (todoList.id === sourceListId) {
//       setTasks(updatedSourceTasks);
//     } else {
//       updateTodoLists((prevTodoLists) => 
//         prevTodoLists.map((list) =>
//           list.id === sourceListId
//             ? { ...list, tasks: list.tasks.filter((t) => t.title !== task.title) }
//             : list
//         )
//       );
//     }

//     // Add the task to the target list in Firebase
//     await updateDoc(targetTodoRef, {
//       tasks: arrayUnion(task),
//     });

//     // Immediately update local state for target list
//     if (todoList.id === targetListId) {
//       const updatedTargetTasks = [...tasks, task];
//       setTasks(updatedTargetTasks);
//     } else {
//       updateTodoLists((prevTodoLists) => 
//         prevTodoLists.map((list) =>
//           list.id === targetListId
//             ? { ...list, tasks: [...list.tasks, task] }
//             : list
//         )
//       );
//     }
//   };

//   const allowDrop = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div
//       className="todo-list"
//       onDragOver={allowDrop}
//       onDrop={(e) => handleDropOnList(e, todoList.id)}
//     >
//       <h3>{todoList.name}</h3>
//       <form onSubmit={addTask} className="add-task-form">
//         <input
//           type="text"
//           placeholder="Title"
//           value={newTask.title}
//           onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Description"
//           value={newTask.description}
//           onChange={(e) =>
//             setNewTask({ ...newTask, description: e.target.value })
//           }
//           required
//         />
//         <input
//           type="date"
//           value={newTask.dueDate}
//           onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
//           required
//         />
//         <select
//           value={newTask.priority}
//           onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
//           required
//         >
//           <option value="">Priority</option>
//           <option value="low">Low</option>
//           <option value="medium">Medium</option>
//           <option value="high">High</option>
//         </select>
//         <button type="submit">Add Task</button>
//       </form>
//       <div className="tasks">
//         <div
//           className="priority-section low-priority"
//           onDragOver={allowDrop}
//           onDrop={(e) => handleDropOnPriority(e, 'low')}
//         >
//           <h4>Low Priority</h4>
//           {tasks
//             .filter((task) => task.priority === 'low')
//             .map((task, index) => (
//               <div
//                 key={index}
//                 draggable
//                 onDragStart={(e) => handleDragStart(e, task)}
//               >
//                 <h5>{task.title}</h5>
//                 <p>{task.description}</p>
//                 <p>{task.dueDate}</p>
//               </div>
//             ))}
//         </div>
//         <div
//           className="priority-section medium-priority"
//           onDragOver={allowDrop}
//           onDrop={(e) => handleDropOnPriority(e, 'medium')}
//         >
//           <h4>Medium Priority</h4>
//           {tasks
//             .filter((task) => task.priority === 'medium')
//             .map((task, index) => (
//               <div
//                 key={index}
//                 draggable
//                 onDragStart={(e) => handleDragStart(e, task)}
//               >
//                 <h5>{task.title}</h5>
//                 <p>{task.description}</p>
//                 <p>{task.dueDate}</p>
//               </div>
//             ))}
//         </div>
//         <div
//           className="priority-section high-priority"
//           onDragOver={allowDrop}
//           onDrop={(e) => handleDropOnPriority(e, 'high')}
//         >
//           <h4>High Priority</h4>
//           {tasks
//             .filter((task) => task.priority === 'high')
//             .map((task, index) => (
//               <div
//                 key={index}
//                 draggable
//                 onDragStart={(e) => handleDragStart(e, task)}
//               >
//                 <h5>{task.title}</h5>
//                 <p>{task.description}</p>
//                 <p>{task.dueDate}</p>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TodoListDetails;

//4

import React, { useState } from 'react';
import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { db } from '../firebase';

const TodoListDetails = ({ todoList, updateTodoLists, todoLists }) => {
  const [tasks, setTasks] = useState(todoList.tasks || []);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: '',
  });

  const addTask = async (e) => {
    e.preventDefault();

    const newTaskData = {
      ...newTask,
      createdAt: new Date().toISOString(), // Use client-side timestamp for initial task creation
      userEmail: todoList.userEmail, // Store user email
    };

    const todoRef = doc(db, 'todos', todoList.id);

    await updateDoc(todoRef, {
      tasks: arrayUnion(newTaskData),
    });

    const updatedTasks = [...tasks, newTaskData];
    setTasks(updatedTasks);

    setNewTask({ title: '', description: '', dueDate: '', priority: '' });
    updateTodoLists({
      ...todoList,
      tasks: updatedTasks,
    });
  };

  const handleDragStart = (e, task) => {
    e.dataTransfer.setData('task', JSON.stringify(task));
    e.dataTransfer.setData('sourceListId', todoList.id);
  };

  const handleDropOnPriority = async (e, newPriority) => {
    e.preventDefault();
    const task = JSON.parse(e.dataTransfer.getData('task'));
    const sourceListId = e.dataTransfer.getData('sourceListId');

    const updatedTask = { ...task, priority: newPriority };
    const sourceTodoRef = doc(db, 'todos', sourceListId);

    await updateDoc(sourceTodoRef, {
      tasks: arrayRemove(task),
    });

    await updateDoc(sourceTodoRef, {
      tasks: arrayUnion(updatedTask),
    });

    if (todoList.id === sourceListId) {
      const updatedTasks = tasks.map((t) =>
        t.title === task.title ? updatedTask : t
      );
      setTasks(updatedTasks);
      updateTodoLists({
        ...todoList,
        tasks: updatedTasks,
      });
    }
  };

  const handleDropOnList = async (e, targetListId) => {
    e.preventDefault();
    const task = JSON.parse(e.dataTransfer.getData('task'));
    const sourceListId = e.dataTransfer.getData('sourceListId');

    if (sourceListId === targetListId) return;

    const sourceTodoRef = doc(db, 'todos', sourceListId);
    const targetTodoRef = doc(db, 'todos', targetListId);

    // Remove the task from the source list in Firebase
    await updateDoc(sourceTodoRef, {
      tasks: arrayRemove(task),
    });

    // Add the task to the target list in Firebase
    await updateDoc(targetTodoRef, {
      tasks: arrayUnion(task),
    });

    // Update the local state for source list
    const updatedSourceTasks = tasks.filter((t) => t.title !== task.title);
    if (todoList.id === sourceListId) {
      setTasks(updatedSourceTasks);
    } else {
      updateTodoLists((prevTodoLists) => 
        prevTodoLists.map((list) =>
          list.id === sourceListId
            ? { ...list, tasks: list.tasks.filter((t) => t.title !== task.title) }
            : list
        )
      );
    }

    // Update the local state for target list
    if (todoList.id === targetListId) {
      const updatedTargetTasks = [...tasks, task];
      setTasks(updatedTargetTasks);
    } else {
      updateTodoLists((prevTodoLists) => 
        prevTodoLists.map((list) =>
          list.id === targetListId
            ? { ...list, tasks: [...list.tasks, task] }
            : list
        )
      );
    }
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="todo-list"
      onDragOver={allowDrop}
      onDrop={(e) => handleDropOnList(e, todoList.id)}
    >
      <h3>{todoList.name}</h3>
      <form onSubmit={addTask} className="add-task-form">
        <input
          type="text"
          placeholder="Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
          required
        />
        <input
          type="date"
          value={newTask.dueDate}
          onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
          required
        />
        <select
          value={newTask.priority}
          onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
          required
        >
          <option value="">Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
      <div className="tasks">
        <div
          className="priority-section low-priority"
          onDragOver={allowDrop}
          onDrop={(e) => handleDropOnPriority(e, 'low')}
        >
          <h4>Low Priority</h4>
          {tasks
            .filter((task) => task.priority === 'low')
            .map((task, index) => (
              <div
                key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, task)}
              >
                <h5>{task.title}</h5>
                <p>{task.description}</p>
                <p>{task.dueDate}</p>
              </div>
            ))}
        </div>
        <div
          className="priority-section medium-priority"
          onDragOver={allowDrop}
          onDrop={(e) => handleDropOnPriority(e, 'medium')}
        >
          <h4>Medium Priority</h4>
          {tasks
            .filter((task) => task.priority === 'medium')
            .map((task, index) => (
              <div
                key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, task)}
              >
                <h5>{task.title}</h5>
                <p>{task.description}</p>
                <p>{task.dueDate}</p>
              </div>
            ))}
        </div>
        <div
          className="priority-section high-priority"
          onDragOver={allowDrop}
          onDrop={(e) => handleDropOnPriority(e, 'high')}
        >
          <h4>High Priority</h4>
          {tasks
            .filter((task) => task.priority === 'high')
            .map((task, index) => (
              <div
                key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, task)}
              >
                <h5>{task.title}</h5>
                <p>{task.description}</p>
                <p>{task.dueDate}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TodoListDetails;





























