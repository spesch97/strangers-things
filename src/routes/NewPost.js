import { Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postNewPost } from "../api";

const NewPost = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("[On Request]");
  const [willDeliver, setWillDeliver] = useState(false);

  const navigate = useNavigate();
  const submitHandler = async (event) => {
    event.preventDefault();
    if (title && description && price) {
      const newPost = await postNewPost(
        token,
        title,
        description,
        price,
        location,
        willDeliver
      );
      navigate("/posts");
    } else {
      alert("Please fill out Title, Description, and Price");
    }
  };

  return (
    <form className="columnContainer" onSubmit={submitHandler}>
      <label className="textBlue">Title</label>
      <Input minLength={1} onChange={(e) => setTitle(e.target.value)} />
      <label className="textBlue">Description</label>
      <Input minLength={1} onChange={(e) => setDescription(e.target.value)} />
      <label className="textBlue">Price</label>
      <Input minLength={1} onChange={(e) => setPrice(e.target.value)} />
      <label className="textBlue">Location</label>
      <Input
        onChange={(e) => {
          if (e.target.value) {
            setLocation(e.target.value);
          }
        }}
      />
      <div className="checkbox">
        <label className="textBlue">Will Deliver</label>

        <Input
          className="checkbox"
          type="checkbox"
          onChange={(e) => setWillDeliver(e.target.checked)}
        />
      </div>
      <div className="creatingContainer">
        <button className="button">Submit</button>
      </div>
    </form>
  );
};

export default NewPost;
