import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";
import FeedbackData from "../../data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    Edit: false,
  });

  // functions !!

  // Delete feedback.
  const deleteFeedback = (id) => {
    if (window.confirm("are you sure you want delete?")) {
      setFeedback(feedback.filter((item) => item.id != id));
    }
  };

  // Add feedback.
  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback]);
  };

  // Update feedback item .
  const updateFeedback = (id, upItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...upItem } : item))
    );
  };

  // Set item to be Updated !
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,

        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
