import React from 'react'
import abclogo from "../assets/abclogo.svg";
import hrclogo from "../assets/hrclogo.svg";

export default function Headers() {
  return (
    <div>
      <img
        src={abclogo}
        alt={"company logo"}
        style={{
          position: "absolute",
          marginLeft: "0.04vw",
          height: "5.7vh",
          width: "19vw",
        }}
      />
      <div>
        <img
          src={hrclogo}
          alt={"hrc_logo"}
          style={{
            display: "block",
            marginTop: " 2.47vh",
            height: "5.7vh",
            width: "14.8vw",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </div>
      <div>
    <h2 style={{color:'#db4437',marginLeft: "1.04vw",}}>Invoice List</h2>
    </div>
    </div>
  )
}
