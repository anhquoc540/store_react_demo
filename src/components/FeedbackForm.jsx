import { useState, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

//use of Context !!
import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";

function FeedbackForm() {
  let { id } = useParams();
  id = Number(id);
  const { userInfoDTO } = useSelector((state) => state.auth);
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  // -----------------------------------
  const [text, setText] = useState("");
  const [btnDisabled, SetBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  // use Effect !!
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      SetBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  // functions!!
  const handleTextChange = (e) => {
    if (text === "") {
      SetBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 character");
      SetBtnDisabled(true);
    } else {
      setMessage(null);
      SetBtnDisabled(false);
    }

    setText(e.target.value);
  };

  const changeRating = (rating) => {
    setRating(rating);
    console.log(rating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        content: text,
        star: rating,
        serviceId: id,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        axios
          .post(
            "https://magpie-aware-lark.ngrok-free.app/api/v1/user/feedback/create",
            newFeedback,
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
            console.log("Success:", response.data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
      setText("");
    }
  };

  return (
    <div className="feedback-form">
      <Card>
        <form onSubmit={handleSubmit}>
          <h2>How would you rate your service with us?</h2>
          <RatingSelect select={changeRating} />
          <div className="input-group">
            <input
              type="text"
              placeholder="write a review"
              onChange={handleTextChange}
              defaultValue={text}
            />
            <Button type="submit" isDisabled={btnDisabled}>
              send
            </Button>
          </div>
          {message && <div className="feedback-message">{message}</div>}
        </form>
      </Card>
    </div>
  );
}

export default FeedbackForm;
