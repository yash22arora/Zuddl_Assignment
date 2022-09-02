import { v4 as uuidv4 } from "uuid";
import { useReducer, useState } from "react";
import Modal from "../Modal";
import { NewTask } from "./Index";

interface AddTaskProps {
  setAddFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addTaskHandler: (newTask: NewTask) => void;
  sectionIndex: number;
}

const AddTaskForm: React.FC<AddTaskProps> = ({
  setAddFormOpen,
  addTaskHandler,
  sectionIndex,
}) => {
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

  const onClick = (e: any) => {
    e.preventDefault();
    addTaskHandler({
      sectionIndex: sectionIndex,
      task: {
        id: uuidv4(),
        title: formdata.title,
        description: formdata.description,
        deadline: formdata.deadline,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
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
          name="description"
          onChange={(e) => handleChange(e)}
          required
        />

        <button
          onClick={(e) => onClick(e)}
          className="bg-slate-500 hover:bg-slate-600 p-3 px-24 mx-auto  text-white items-center rounded-md text-xl font-semibold"
        >
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default AddTaskForm;
