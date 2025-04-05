"use client";
import { useState } from "react";
import formArr from "../../data";
import "./globals.css";
import DynamicForm from "./DynamicForm";
import { getMaxDepth } from "./utils";

export default function Page() {
  const [nextChild, setNextChild] = useState(null);
  const maxFormDepth = getMaxDepth(formArr);
  const [choiceArr, setChoiceArr] = useState(Array(maxFormDepth).fill(null));

  const handleChange = (index, formElement) => {
    setNextChild(formElement?.children[index]);
    setChoiceArr([index, null, null]); 
  }


  return (
    <form className="test-form">
      {formArr.map(formElement => (
        <div key={formElement?.ID}>
          <div  className="form-element">
          <p>{formElement?.label_val}{formElement.isRequired && <span className="required">*</span> }</p>
          <div className="d-flex">
            {formElement?.options.map((option, index) => (
              <div key={index} className="radio-options">
                <input
                  type={formElement?.type}
                  value={index}
                  name={formElement?.ID}
                  onChange={() => handleChange(index, formElement)}
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
          </div>
          {!formElement?.isLast && nextChild && (
            <DynamicForm
              childDetails={nextChild}
              updateChoiceArr={setChoiceArr}
              choiceArr={choiceArr}
            />
          )}
        </div>
      ))}
    </form>
  );
}
