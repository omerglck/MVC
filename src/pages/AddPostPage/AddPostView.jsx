import React from "react";

const AddPostView = ({ handleSubmit, onInputChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Yeni Gönderi Ekle</h2>
      <fieldset>
        <label htmlFor="user_name">Kullanıcı Adı:</label>
        <input
          onChange={(e) => onInputChange("user", e)}
          type="text"
          id="user_name"
          placeholder="Kullanıcı adı giriniz"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="title">Başlık:</label>
        <input
          onChange={(e) => onInputChange("title", e)}
          type="text"
          id="title"
          placeholder="Başlık giriniz"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="description">Açıklama:</label>
        <textarea
          onChange={(e) => onInputChange("text", e)}
          type="text"
          placeholder="Açıklama giriniz"
          id="description"
        ></textarea>
      </fieldset>
      <button>Gönder</button>
    </form>
  );
};

export default AddPostView;
