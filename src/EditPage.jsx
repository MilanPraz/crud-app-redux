import { useNavigate, useParams } from "react-router-dom";
import { useUpdatePostMutation } from "./features/apiSlice";
import { useEffect, useState } from "react";
import { useGetPostByIdQuery } from "./features/apiSlice";

function EditPage() {
  const { id } = useParams();
  console.log(id);
  const { data, error, isLoading } = useGetPostByIdQuery(id);
  const navigate = useNavigate();
  const [input, setInput] = useState(""); //if you called usestate beloow it will error useState called unconditionally so useStatae should always be on top
  const [updateUser] = useUpdatePostMutation();
  useEffect(() => {
    if (data) {
      setInput(data.name);
    }
  }, [data]);

  if (isLoading) return <h2>Loading...</h2>;
  console.log(data);

  const updatedData = {
    id: id,
    name: input,
    completed: data.completed,
  };
  function editButton() {
    updateUser(updatedData);
    navigate("/");
  }
  return (
    <div>
      <h1>Edit Page</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Edit user"
      ></input>
      <button onClick={() => editButton()} type="submit">
        Update
      </button>
    </div>
  );
}

export default EditPage;
