"use client";
import React from "react";

const DynamicForm = React.memo(
  ({ childDetails, updateChoiceArr, choiceArr, level = 1 }) => {
    function handleChange(index) {
      const copyC = [...choiceArr];
      copyC[level] = index;
      for (let i = level + 1; i < copyC.length; i++) {
        copyC[i] = null;
      }
      updateChoiceArr(copyC);
    }

    const hasChildren =
      childDetails?.children && childDetails.children.length > 0;
    const selectedIndex = choiceArr[level];

    return (
      <>
        <div className="form-element">
          <p>
            {childDetails?.label_val}{" "}
            {childDetails?.isRequired && <span className="required">*</span>}
          </p>
          <div className="d-flex">
          {childDetails?.options?.map((option, index) => (
            <div key={index} className="radio-options">
              <input
                type={childDetails?.type}
                name={childDetails?.parentId}
                onChange={() => handleChange(index)}
                checked={selectedIndex === index}
              />
              <label>{option}</label>
            </div>
          ))}
          </div>
        </div>
        {hasChildren && selectedIndex !== null && (
          <DynamicForm
            childDetails={childDetails.children[selectedIndex]}
            updateChoiceArr={updateChoiceArr}
            choiceArr={choiceArr}
            level={level + 1}
          />
        )}
      </>
    );
  }
);

export default DynamicForm;
