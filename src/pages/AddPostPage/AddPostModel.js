import { v4 } from "uuid";

// nasıl bir veri olacağına karar verdik.
class AddPostModel {
  state = {
    id: v4(),
    date: new Date(),
    user: "",
    title: "",
    text: "",
  };
}

export default AddPostModel;
