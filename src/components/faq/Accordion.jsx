import { useState } from "react";

function Accordion({ title, content }) {
  const [isCheck, setCheck] = useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          boxSizing: "border-box",
          backgroundColor: "black",
          opacity:'0.8',
          height: "50px",
          color: "#fff",
          borderRadius:'5px',
        }}
      >

        <h3 style={{ fontSize: "20px" }}>{title}</h3>
        <button
          onClick={() => {
            setCheck((e) => !e);
          }}
          style={{
            borderRadius:'3px',
            backgroundColor:'white',
            borderColor:'white',
            width:'30px'
          }}
        >
          {isCheck ? "-" : "+"}
        </button>
      </div>

      {isCheck && (
        <p
          style={{
            margin: "0",
            backgroundColor: "#EEEEEE",
            color: "#000",
            padding: "10px",
            borderRadius:'5px',
          }}
        >
          {content}
        </p>
      )}
    </>
  );
}

export default Accordion;