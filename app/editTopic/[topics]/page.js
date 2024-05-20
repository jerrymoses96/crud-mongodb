import EditTopicForm from "@/components/EditTopicForm";
import React from "react";

const getTopicById = async (id) => {
  try {
    const res = fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch Topic");
    }
    return (await res).json();
  } catch (error) {
    console.log(error);
  }
};

const Topics = async ({ params }) => {
  const { topics } = params;
  console.log(topics);
  const { topic } = await getTopicById(topics);
  const { title, description } = topic;
  return <EditTopicForm id={topics} title={title} description={description} />;
};

export default Topics;
