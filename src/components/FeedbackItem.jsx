// import {FaTimes , FaEdit} from 'react-icons/fa'
// import Card from './shared/Card'
// // use of Context !!
// import {useContext} from 'react'
// import FeedbackContext from './context/FeedbackContext'
// function FeedbackItem({Item}) {

//     const {deleteFeedback , editFeedback} = useContext(FeedbackContext)

//     return (
//         <>
//              <Card>
//                 <div className="name">{Item.user?.email}</div>
//                 <div className="num-display">{Item?.star}</div>
//                 {/* <button1 onClick={ () => deleteFeedback(Item.id)} className='close'>
//                     <FaTimes color= 'purple'/>
//                 </button1>
//                 <button1 onClick ={() => editFeedback(Item)} className="edit">
//                     <FaEdit color='blue'/>
//                 </button1> */}
                
//                 <div className="text-display">{Item.content}</div>
                
//             </Card>
//         </>
       
//     )
// }
 
// Card.defaultProps = {
//     reverse :false,
// }

// export default FeedbackItem
import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./shared/Card";

// use of Context !!
import { useContext, useEffect } from "react";
import FeedbackContext from "./context/FeedbackContext";
import { Popconfirm, message } from "antd";

function FeedbackItem({ Item }) {
  const { deleteFeedback } = useContext(FeedbackContext);
  const confirm = (e) => {
    message.success("Xoá đơn thành công");
    deleteFeedback(Item.id);
  };

  return (
    <>
      <div className="feedback-form">
        <Card>
          <div className="num-display">{Item.star}</div>
          <div className="name">
            <h3>Gửi đến: {Item.laundryService?.name}</h3>
          </div>
          <Popconfirm
            title="Bạn có muốn xoá đánh giá này?"
            onConfirm={confirm}
            okText="có"
            cancelText="không"
          >
            <button className="close">
              <FaTimes color="purple" />
            </button>
          </Popconfirm>
          <div className="text-display">{Item.content}</div>
        </Card>
      </div>
    </>
  );
}

Card.defaultProps = {
  reverse: false,
};

export default FeedbackItem;
