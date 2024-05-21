import EditTopicForm from "@/components/EditTopicForm";
import React from "react";

// Function to fetch topic by ID
const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch Topic");
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Main component to display the EditTopicForm
const Topics = async ({ params }) => {
  const { topics } = params;
  console.log(topics);

  const Topic = await getTopicById(topics);

  if (!Topic || !Topic.topic) {
    return <div>Error loading topic.</div>;
  }

  const { title, description } = Topic.topic;

  return <EditTopicForm id={topics} title={title} description={description} />;
};

export default Topics;
