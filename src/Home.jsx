import { useState } from "react";
import {
  useGetAllPostsQuery,
  useAddNewPostMutation,
  useDeletePostMutation,
} from "./features/apiSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Checkbox from "./Checkbox";
function Home() {
  const [input, setInput] = useState("");

  const [addNewPost, { error }] = useAddNewPostMutation();
  const { data, isLoading } = useGetAllPostsQuery();
  const [deletePost] = useDeletePostMutation();
  const navigate = useNavigate();

  console.log(data);

  if (isLoading) return <h2>Loading...</h2>;
  const mydata = {
    name: input,
    completed: false,
  };
  function adduser(e) {
    e.preventDefault();
    addNewPost(mydata);
    setInput("");
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button type="submit" onClick={adduser}>
          Add
        </button>
      </div>
      <div>
        {data.map((post) => (
          <div style={{ display: "flex", gap: "1rem" }} key={post.id}>
            <p
              style={{
                textDecoration: `${post.completed ? "line-through" : "none"}`,
              }}
            >
              {post.name}
            </p>
            <Checkbox id={post.id} />
            <button onClick={() => deletePost(post.id)}>DEL</button>
            <Link to={`/edit/${post.id}`}>Edit</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
