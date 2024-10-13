import * as React from "react";

export const EmailTemplate = ({
  user_name,
  user_email,
  phone,
  qualification,
  score,
  requestType,
  cv,
}) => {
  return (
    <div>
      <h2>
        You just recieved a new job application <br />
        From Yaseer website!
      </h2>
      <p>
        <strong>Name: </strong>
        <span>{user_name}</span>
      </p>
      <p>
        <strong>Email: </strong>
        <span>{user_email}</span>
      </p>
      <p>
        <strong>Phone: </strong>
        <span>{phone}</span>
      </p>
      <p>
        <strong>Qualification: </strong>
        <span>{qualification}</span>
      </p>
      <p>
        <strong>Score: </strong>
        <span>{score}</span>
      </p>
      <p>
        <strong>RequestType: </strong>
        <span>{requestType}</span>
      </p>
      <p>
        <strong>CV: </strong>
        <span>{cv}</span>
      </p>
    </div>
  );
};
