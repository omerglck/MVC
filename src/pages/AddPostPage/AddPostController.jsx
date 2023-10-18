import React, { useState } from "react";
import AddPostView from "./AddPostView";
import AddPostModel from "./AddPostModel";
import axiosInstance from "../../constants";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddPostController = () => {
  const formModel = new AddPostModel();
  const [form, setForm] = useState(formModel.state);
  const navigate = useNavigate();
  // key: hangi inputa yazıldığının bilgisi
  // value: inputun içerisindeki değer
  const onInputChange = (key, e) => {
    setForm({ ...form, [key]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.user || !form.text || !form.title) {
      toast.info("Lütfen tüm alanları doldurunuz...", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    } else {
      toast.success("Gönderi başarıyla eklendi.", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    axiosInstance
      .post("posts", form)
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));
  };
  return (
    <AddPostView handleSubmit={handleSubmit} onInputChange={onInputChange} />
  );
};

export default AddPostController;
