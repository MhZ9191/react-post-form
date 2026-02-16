import axios from "axios";
import { useState } from "react";

const initFormData = {
  author: "",
  title: "",
  body: "",
  public: false,
};

export default function Main() {
  return (
    <main>
      <section className="sec-main">
        <div className="div-main">
          <fieldset className="field-main">
            <legend>Hello Blog</legend>
            <form>
              <div>
                <label htmlFor="author-input">Name</label>
                <input type="text" id="author-input" />
              </div>
              <div>
                <label htmlFor="title-input">Title</label>
                <input type="text" id="title-input" />
              </div>
              <div>
                <label htmlFor="area-input">Body</label>
                <textarea id="area-input" />
              </div>
              <div>
                <label htmlFor="radio-input">Visibility</label>
                <input type="radio" name="radioinput" />
                <input type="radio" name="radioinput" />
              </div>
              <button>SEND</button>
            </form>
          </fieldset>
        </div>
      </section>
    </main>
  );
}
