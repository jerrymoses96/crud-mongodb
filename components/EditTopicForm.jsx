"use client";
import React, { useState } from "react";

const EditTopicForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const handleSubmit =(e)=>{
    e.preventDefault();

  }
  return (
    <form  onSubmit={handleSubmit} className="flex flex-col gap-3 ">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Add Topic"
      />
      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Add Description"
      />
      <button className="bg-green-600 text-white py-3 px-6 w-fit">
        Update Topic
      </button>
    </form>
  );
};

export default EditTopicForm;
