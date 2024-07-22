import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc, deleteDoc, doc, updateDoc, increment } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import './task.css';

const Task = ({ task }) => {
  const [user, setUser] = useState(null);
  const [newTaskData, setNewTaskData] = useState({ title: "", description: "", dueDate: "", priority: "" });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleTaskChange = (field, value) => {
    setNewTaskData({ ...newTaskData, [field]: value });
  };

  const addTask = async (listId) => {
    if (newTaskData.title.trim()) {
      await addDoc(collection(db, "tasks"), {
        ...newTaskData,
        userId: user.uid,
        userEmail: user.email,
        listId,
        createdAt: new Date(),
        updatedAt: new Date()
      });

      // Update the task count and last updated time for the list
      const listDocRef = doc(db, "lists", listId);
      await updateDoc(listDocRef, {
        numberOfTasks: increment(1),
        updatedAt: new Date()
      });

      setNewTaskData({ title: "", description: "", dueDate: "", priority: "" });
    }
  };

//   const deleteTask = async (taskId, listId) => {
//     await deleteDoc(doc(db, "tasks", taskId));
    
//     // Update the task count and last updated time for the list
//     const listDocRef = doc(db, "lists", listId);
//     await updateDoc(listDocRef, {
//       numberOfTasks: increment(-1),
//       updatedAt: new Date()
//     });
//   };

  return (
    <div className="task">
      <h4 className="task-title">{task.title}</h4>
      <p className="task-description">{task.description}</p>
      <p className="task-due-date">Due: {task.dueDate}</p>
      {/* <button onClick={() => deleteTask(task.id, task.listId)} className="task-delete-button">Delete Task</button> */}
    </div>
  );
};

export default Task;

