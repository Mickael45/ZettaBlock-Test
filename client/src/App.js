import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { NEW_RECORD } from "./queries/createMutation";
import { getTextareaValueById } from "./utils/inputManager";

const TEXT_AREA_ID = "text-area";

const App = () => {
  const [createRecord] = useMutation(NEW_RECORD);

  const handleSubmit = (e) => {
    e.preventDefault();

    createRecord({
      variables: {
        message: getTextareaValueById(TEXT_AREA_ID),
      },
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea id={TEXT_AREA_ID} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
