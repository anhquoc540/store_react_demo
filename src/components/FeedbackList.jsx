import { motion, AnimatePresence } from "framer-motion";
import React, { useContext, useState } from "react";
import FeedbackItem from "./FeedbackItem";
import { useEffect } from "react";
import axios from "axios";
import FeedbackContext from "./context/FeedbackContext";
function FeedbackList() {
  const [feedback, setFeedback] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get(
          "https://magpie-aware-lark.ngrok-free.app/api/v1/user/feedback/all",
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(
                localStorage.getItem("access_token")
              )}`,
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
              "ngrok-skip-browser-warning": "69420",
            },
          }
        )
        .then((response) => {
          setFeedback(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  if (!feedback || feedback.length === 0) {
    return <p>Chưa có đánh giá nào </p>;
  }
  return (
    <div className="feedback-List">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} Item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
