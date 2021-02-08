import React from "react";

export const JsxHtmlExample = ({ something = "workspace" }) => {
  return (
    <div>
      <h1>Welcome to your {something}</h1>
    </div>
  );
};

const hello = (name = "world") => `Hello ${name} !`;

export default hello;
