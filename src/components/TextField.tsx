import React from "react";

type Props = {
  id: string;
  label: string;
  variant: "outlined" | "filled" | "standard";
  setData : React.Dispatch<React.SetStateAction<string>>
};

const TextField2 = ({ id, label, variant , setData }: Props) => {
  const standardStyle: object = {
    width: 300,
    height: 60,
    border: "1px solid gray",
    borderRadius: 5,
    paddingLeft: 15,
    fontSize: 15,
  };

  const outlineStyle: object = {
    width: 300,
    height: 60,
    border: "none",
    borderBottom: "1px solid blue",
    paddingLeft: 15,
    fontSize: 15,
  };

  const filledStyle: object = {
    width: 300,
    height: 60,
    border: "none",
    borderBottom: "1px solid #1567eb",
    paddingLeft: 15,
    fontSize: 15,
  };

  return (
    <input
      className={variant}
      id={id}
      onChange={(e)=>{
        const newvalue = e.target.value
        setData(newvalue)
      }}
      placeholder={label}
      style={
        variant === "standard"
          ? standardStyle
          : variant === "outlined"
          ? outlineStyle
          : filledStyle
      }
      type="text"
    />
  );
};

export default TextField2;
