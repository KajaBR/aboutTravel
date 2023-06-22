import React from "react";

export const SubscribtionBar = () => {
  return (
    <article>
      <div
        style={{
          textAlign: "center",
          paddingTop: "40px",
        }}
      >
        <form action="">
          <p style={{ color: "rgb(58,57,57)", fontWeight: "900" }}>
            Join our newsletter
          </p>
          <br></br>
          <p>
            <input
              placeholder="Name"
              style={{
                height: "30px",
                borderRadius: "20px",
                textAlign: "center",
              }}
            />
          </p>
          <p style={{ paddingTop: "5px" }}>
            <input
              placeholder="Email"
              style={{
                height: "30px",
                borderRadius: "20px",
                textAlign: "center",
              }}
            />
          </p>
          <button>Submit</button>
        </form>
      </div>
    </article>
  );
};
