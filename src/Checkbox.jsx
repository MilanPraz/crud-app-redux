import {
  useGetPostByIdQuery,
  useChangeToggleMutation,
} from "./features/apiSlice";

function Checkbox({ id }) {
  const { data, isLoading } = useGetPostByIdQuery(id);
  const [changeToggle] = useChangeToggleMutation();

  if (isLoading) return <h2>Loading...</h2>;
  const updatedData = {
    ...data,
    completed: !data.completed,
  };
  function changeToggleBtn() {
    changeToggle(updatedData);
  }
  return (
    <div>
      <input
        onClick={() => changeToggleBtn()}
        // defaultChecked={data.completed ? true : false}
        type="checkbox"
      ></input>
    </div>
  );
}

export default Checkbox;
