import { useState, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";
import axios from "axios";
import { useParams } from "react-router-dom";
import { message } from "antd";

function FeedbackForm() {
  const [item, setItem] = useState([]);

  let { id } = useParams();
  id = Number(id);
  const { addFeedback } = useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [btnDisabled, SetBtnDisabled] = useState(true);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [rating, setRating] = useState(null);

  const getLaundryServiceName = (id) => {
    for (let i = 0; i < item.length; i++) {
      if (item[i].laundryService.id === id) {
        return item[i].laundryService.name;
      }
    }
    return null;
  };

  const handleTextChange = (e) => {
    if (text === "") {
      SetBtnDisabled(true);
      setFeedbackMessage("Hãy nhập đánh giá!");
    } else if (rating === null) {
      SetBtnDisabled(true);
      setFeedbackMessage("Hãy nhập sao");
    } else if (text !== "" && text.trim().length <= 10) {
      setFeedbackMessage("Đánh giá phải từ 10 ký tự trở lên!");
      SetBtnDisabled(true);
    } else if (rating !== null && text.trim().length > 10) {
      setFeedbackMessage(null);
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
      {
        addFeedback(newFeedback);
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
            message.success("Đánh giá thành công");
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
      setText("");
    }
  };

  return (
    <>
      <div className="feedback-form">
        <Card>
          <form onSubmit={handleSubmit}>
            <h2>Bạn nghĩ thế nào về dịch vụ này?</h2>
            <RatingSelect select={changeRating} />
            <div className="input-group">
              <input
                type="text"
                placeholder="Hãy nhập đánh giá"
                onChange={handleTextChange}
                value={text}
              />
              <Button type="submit" isDisabled={btnDisabled}>
                send
              </Button>
            </div>
            {feedbackMessage && (
              <div className="feedback-message">{feedbackMessage}</div>
            )}
          </form>
        </Card>
      </div>
    </>
  );
}

export default FeedbackForm;
