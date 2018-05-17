import React from "react";

export default function ErrorList(props) {
  const { errors } = props;
  return (
    <div className="container">
    
        {errors.map((error, i) => {
          return (
            <li key={i} className="toast toast-error">
              {error.stack}
            </li>
          );
        })}
    </div>
  );
}
