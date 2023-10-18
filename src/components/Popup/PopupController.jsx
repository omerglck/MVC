import React, { useEffect, useState } from "react";
import PopupView from "./PopupView";
import axios from "axios";

const PopupController = ({ setShowPopup, userName }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts?user=${userName}`)
      .then((res) => setData(res.data));
  }, [userName]);
  return (
    <PopupView data={data} setShowPopup={setShowPopup} userName={userName} />
  );
};

export default PopupController;
