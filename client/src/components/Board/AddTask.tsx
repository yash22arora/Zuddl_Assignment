import { useReducer, useState } from "react";
import Modal from "../Modal";

interface AddTaskProps {
  setAddFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddTaskForm: React.FC<AddTaskProps> = ({ setAddFormOpen }) => {
  const formReducer = (state: any, event: any) => {
    return {
      ...state,
      [event.name]: event.value,
    };
  };
  const [formdata, setformdata] = useReducer(formReducer, {});

  const handleChange = async (e: any) => {
    setformdata({
      name: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <Modal setModalOpen={setAddFormOpen}>
      <form className="flex flex-col justify-center items-start p-4 px-6 ">
        <input
          type={"text"}
          name="title"
          placeholder="Title"
          onChange={(e) => handleChange(e)}
          className="px-4 py-2 w-full mb-6 bg-slate-700 placeholder:text-3xl text-3xl outline-none border-b border-slate-500"
          required
        />

        <textarea
          className="px-4 py-2 w-full mb-6 bg-slate-700 placeholder:text-xl text-xl outline-none"
          placeholder="Description"
          rows={5}
          name="message"
          onChange={(e) => handleChange(e)}
          required
        />

        <button className="bg-slate-500 hover:bg-slate-600 p-3 px-24 mx-auto  text-white items-center rounded-md text-xl font-semibold">
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default AddTaskForm;
