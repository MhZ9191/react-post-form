import axios from "axios";
import { useState } from "react";

const urlPostAPI = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";
const initFormData = {
  author: "",
  title: "",
  body: "",
  public: "public",
};

export default function Main() {
  const [formData, setFormData] = useState(initFormData);

  const formChanges = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (!formData.author || !formData.title || !formData.body) {
      alert("Compila tutti i campi");
    } else {
      axios.post(urlPostAPI, formData).then((res) => {
        console.log(res.data);
        alert("Send succesfully!");
      });
    }
  };

  return (
    <main>
      <section className="sec-main">
        <div className="div-main">
          <fieldset className="field-main">
            <legend>Hello Blog</legend>
            <form onSubmit={formSubmit} className="form-main">
              <div>
                <label htmlFor="author-input">Name</label>
                <input
                  value={formData.author}
                  onChange={formChanges}
                  name="author"
                  type="text"
                  id="author-input"
                />
              </div>
              <div>
                <label htmlFor="title-input">Title</label>
                <input
                  name="title"
                  onChange={formChanges}
                  value={formData.title}
                  type="text"
                  id="title-input"
                />
              </div>
              <div>
                <label htmlFor="area-input">Body</label>
                <textarea
                  id="area-input"
                  name="body"
                  value={formData.body}
                  onChange={formChanges}
                  placeholder="Type here"
                />
              </div>
              <div className="div-radio">
                <div>
                  <input
                    onChange={formChanges}
                    type="radio"
                    name="public"
                    id="public-radio"
                    value="public"
                    checked={formData.public === "public"}
                    className="radio-in"
                  />
                  <label htmlFor="public-radio">Public</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="public"
                    id="private-radio"
                    value="private"
                    onChange={formChanges}
                    checked={formData.public === "private"}
                    className="radio-in"
                  />
                  <label htmlFor="private-radio">Private</label>
                </div>
              </div>
              <div className="btn">
                <button>SEND</button>
              </div>
            </form>
          </fieldset>
        </div>
      </section>
    </main>
  );
}
