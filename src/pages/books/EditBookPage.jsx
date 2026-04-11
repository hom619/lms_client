import EditBookForm from "@components/forms/bookForms/EditBookForm";
import React from "react";

export const EditBookPage = () => {
  return (
    <div className="p-3">
      <h3>Edit Book</h3>

      <hr />
      <div>
        <EditBookForm />
      </div>
    </div>
  );
};
