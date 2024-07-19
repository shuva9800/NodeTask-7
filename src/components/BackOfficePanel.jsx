// import React, { useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../firebase';

// const BackOfficePanel = () => {
//   const [users, setUsers] = useState([]);
//   const [tasks, setTasks] = useState([]);
//   const [taskLists, setTaskLists] = useState([]);

//   const fetchUsers = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, 'users'));
//       const userList = querySnapshot.docs.map(doc => {
//         const data = doc.data();
//         return {
//           email: data.email,
//           password: data.password,
//           ipAddress: data.ipAddress,
//           signupTime: data.signupTime ? data.signupTime.toDate().toLocaleString() : 'N/A',
//         };
//       });
//       setUsers(userList);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const fetchTasks = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, 'todos'));
//       const taskList = querySnapshot.docs.map(doc => {
//         const { name,  tasks, createdAt, updatedAt,userEmail} = doc.data();
//         return {
//           taskListTitle: name,
//           createdBy: userEmail,
//           numberOfTasks: tasks.length,
//           creationTime: createdAt ? createdAt.toDate().toLocaleString() : 'N/A',
//           lastUpdateTime: updatedAt ? updatedAt.toDate().toLocaleString() : 'N/A',
//         };
//       });
//       setTaskLists(taskList);
//     } catch (error) {
//       console.error('Error fetching task lists:', error);
//     }
//   };

//   const fetchAllTasks = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, 'todos'));
//       const allTasks = querySnapshot.docs.reduce((tasksAcc, doc) => {
//         const { tasks, userEmail } = doc.data();
//         return tasksAcc.concat(tasks.map(task => ({
//           taskTitle: task.title,
//           taskDescription: task.description,
//           dueDate: task.dueDate,
//           createdBy: userEmail,
//           creationTime: task.createdAt ? new Date(task.createdAt).toLocaleString() : 'N/A',
//         })));
//       }, []);
//       setTasks(allTasks);
//     } catch (error) {
//       console.error('Error fetching all tasks:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>BackOffice Panel</h2>
//       <nav>
//         <ul>
//           <li><button onClick={fetchUsers}>Users</button></li>
//           <li><button onClick={fetchTasks}>Task Lists</button></li>
//           <li><button onClick={fetchAllTasks}>Tasks</button></li>
//         </ul>
//       </nav>

//       {users.length > 0 && (
//         <div>
//           <h3>Users</h3>
//           <table>
//             <thead>
//               <tr>
//                 <th>Email</th>
//                 <th>Password</th>
//                 <th>IP Address</th>
//                 <th>Signup Time</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user, index) => (
//                 <tr key={index}>
//                   <td>{user.email}</td>
//                   <td>{user.password}</td>
//                   <td>{user.ipAddress}</td>
//                   <td>{user.signupTime}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {taskLists.length > 0 && (
//         <div>
//           <h3>Task Lists</h3>
//           <table>
//             <thead>
//               <tr>
//                 <th>Task List Title</th>
//                 <th>Created By</th>
//                 <th>Number of Tasks</th>
//                 <th>Creation Time</th>
//                 <th>Last Update Time</th>
//               </tr>
//             </thead>
//             <tbody>
//               {taskLists.map((taskList, index) => (
//                 <tr key={index}>
//                   <td>{taskList.taskListTitle}</td>
//                   <td>{taskList.createdBy}</td>
//                   <td>{taskList.numberOfTasks}</td>
//                   <td>{taskList.creationTime}</td>
//                   <td>{taskList.lastUpdateTime}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {tasks.length > 0 && (
//         <div>
//           <h3>Tasks</h3>
//           <table>
//             <thead>
//               <tr>
//                 <th>Task Title</th>
//                 <th>Task Description</th>
//                 <th>Due Date</th>
//                 <th>Created By</th>
//                 <th>Creation Time</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tasks.map((task, index) => (
//                 <tr key={index}>
//                   <td>{task.taskTitle}</td>
//                   <td>{task.taskDescription}</td>
//                   <td>{task.dueDate}</td>
//                   <td>{task.createdBy}</td>
//                   <td>{task.creationTime}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BackOfficePanel;




import React, { useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import './BackOfficePanel.css'; // Import the CSS file

const BackOfficePanel = () => {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [taskLists, setTaskLists] = useState([]);
  const [currentView, setCurrentView] = useState(''); // State to manage current view

  const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const userList = querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          email: data.email,
          password: data.password,
          ipAddress: data.ipAddress,
          signupTime: data.signupTime ? data.signupTime.toDate().toLocaleString() : 'N/A',
        };
      });
      setUsers(userList);
      setCurrentView('users'); // Set the current view to 'users'
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchTasks = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'todos'));
      const taskList = querySnapshot.docs.map(doc => {
        const { name, tasks, createdAt, updatedAt, userEmail } = doc.data();
        return {
          taskListTitle: name,
          createdBy: userEmail,
          numberOfTasks: tasks.length,
          creationTime: createdAt ? createdAt.toDate().toLocaleString() : 'N/A',
          lastUpdateTime: updatedAt ? updatedAt.toDate().toLocaleString() : 'N/A',
        };
      });
      setTaskLists(taskList);
      setCurrentView('taskLists'); // Set the current view to 'taskLists'
    } catch (error) {
      console.error('Error fetching task lists:', error);
    }
  };

  const fetchAllTasks = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'todos'));
      const allTasks = querySnapshot.docs.reduce((tasksAcc, doc) => {
        const { tasks, userEmail } = doc.data();
        return tasksAcc.concat(tasks.map(task => ({
          taskTitle: task.title,
          taskDescription: task.description,
          dueDate: task.dueDate,
          createdBy: userEmail,
          creationTime: task.createdAt ? new Date(task.createdAt).toLocaleString() : 'N/A',
        })));
      }, []);
      setTasks(allTasks);
      setCurrentView('tasks'); // Set the current view to 'tasks'
    } catch (error) {
      console.error('Error fetching all tasks:', error);
    }
  };

  return (
    <div>
      <h2>BackOffice Panel</h2>
      <nav>
        <ul>
          <li><button onClick={fetchUsers}>Users</button></li>
          <li><button onClick={fetchTasks}>Task Lists</button></li>
          <li><button onClick={fetchAllTasks}>Tasks</button></li>
        </ul>
      </nav>

      {currentView === 'users' && users.length > 0 && (
        <div>
          <h3>Users</h3>
          <table>
            <thead>
              <tr>
                <th>Email</th>
                <th>Password</th>
                <th>IP Address</th>
                <th>Signup Time</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.ipAddress}</td>
                  <td>{user.signupTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {currentView === 'taskLists' && taskLists.length > 0 && (
        <div>
          <h3>Task Lists</h3>
          <table>
            <thead>
              <tr>
                <th>Task List Title</th>
                <th>Created By</th>
                <th>Number of Tasks</th>
                <th>Creation Time</th>
                <th>Last Update Time</th>
              </tr>
            </thead>
            <tbody>
              {taskLists.map((taskList, index) => (
                <tr key={index}>
                  <td>{taskList.taskListTitle}</td>
                  <td>{taskList.createdBy}</td>
                  <td>{taskList.numberOfTasks}</td>
                  <td>{taskList.creationTime}</td>
                  <td>{taskList.lastUpdateTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {currentView === 'tasks' && tasks.length > 0 && (
        <div>
          <h3>Tasks</h3>
          <table>
            <thead>
              <tr>
                <th>Task Title</th>
                <th>Task Description</th>
                <th>Due Date</th>
                <th>Created By</th>
                <th>Creation Time</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index}>
                  <td>{task.taskTitle}</td>
                  <td>{task.taskDescription}</td>
                  <td>{task.dueDate}</td>
                  <td>{task.createdBy}</td>
                  <td>{task.creationTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BackOfficePanel;

