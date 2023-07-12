import "../SubscribtionBar/style.css";

// const ComponentToRemove = ({ handleRemove }) => {
//   return (
//     <div className="popUpNewsletterBar">
//       <form className="formNewsletter">
//         <p className="popUpJoinText">Join our newsletter</p>
//         <br></br>
//         <p>
//           <input className="input" placeholder="Name*" />
//         </p>
//         <p style={{ paddingTop: "5px", paddingBottom: "10px" }}>
//           <input className="input" placeholder="Email*" />
//         </p>
//         <p className="button">
//           <button className="submitButton">Submit</button>
//         </p>
//       </form>
//       <button className="close" onClick={handleRemove}>
//         X
//       </button>
//     </div>
//   );
// };

// const App = () => {
//   const [showComponent, setShowComponent] = useState(true);

//   const handleRemoveComponent = () => {
//     setShowComponent(false);
//   };

//   return (
//     <div>
//       {showComponent && (
//         <ComponentToRemove handleRemove={handleRemoveComponent} />
//       )}
//     </div>
//   );
// };

import React from "react";

function PopUp(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner joinText">
        Join to our newsletter
        <button
          style={{
            position: "absolute",
            right: "30px",
            backgroundColor: "rgb(58,57,57)",
            color: "#f4ecd9",
            borderRadius: "5px",
            padding: "3px",
            cursor: "pointer",
          }}
          claseName="close-btn"
          onClick={() => props.setTrigger(false)}
        >
          X
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopUp;
