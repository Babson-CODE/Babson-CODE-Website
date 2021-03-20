import React from "react";

export default function Headline(props) {
  return (
    <div>
      <h1
        style={{
          // fontSize: "2.5em",
          // lineHeight: "1.5em",
          textAlign: "center",
          paddingTop: "40px",
          paddingBottom: "10px",
        }}
        {...props}
      >
        {props.headline}
      </h1>

      <h4 style={{ textAlign: "center" }} {...props}>
        {props.subheadline}
      </h4>
      <hr
        style={{
          borderTop: "2.5px solid",
          margin: "20px 200px 50px 200px",
        }}
      />
    </div>
  );
}
