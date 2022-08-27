import { useRef, useState } from "react";
import "./styles/Input.css";

const Input = ({
  error,
  disabled,
  helperText = "",
  icon,
  value = "",
  size,
  fullWidth,
  multiline,
  row = 0
}) => {
  // STATE
  const [inputFocused, setInputFocused] = useState(false),
    [inputVal, setInputValue] = useState(value),
    [isDisabled, setIsDisabled] = useState(disabled),
    [visibleHelpTxt, setVisibleHelpTxt] = useState(helperText ? true : false),
    [startIcon, setStartIcon] = useState(true),
    [isFullWidth, setIsFullWidth] = useState(fullWidth);

  const inputElement = useRef(null);

  const startIconCondition = icon && startIcon,
    endIconCondition = icon && !startIcon;


  // HANDLERS
  const changeHandler = (e) => !isDisabled && setInputValue(e.target.value);

  const focusHandler = () => setInputFocused(true);

  const blurHandler = () => setInputFocused(false);

  const doubleClickHandler = () => {
    if (disabled) setIsDisabled(!isDisabled);

    if (helperText) setVisibleHelpTxt(!visibleHelpTxt);

    if (icon) setStartIcon(!startIcon);

    if (fullWidth) setIsFullWidth(!isFullWidth);
  };

  const inputCntnrHandler = () => {
    setInputFocused(true);
    if (inputElement) inputElement.current.focus();
  };


  return (
    <div className="cntnr">
      <p>
        {`<Input ${visibleHelpTxt ? `helperText=”${helperText}”` : ""} ${error ? "error" : ""} ${isDisabled ? "disabled" : ""} ${startIconCondition ? "startIcon" : endIconCondition ? "endIcon" : ""} ${value ? `value=”${inputVal}”` : ""} ${size ? `size=”${size}”` : ""} ${isFullWidth ? "fullWidth" : ""} ${multiline ? "multiline" : ""} ${row ? `row=”${row}”` : ""} />`}
      </p>

      <div className={`cmpnnt-cntnr${isFullWidth ? " cmpnnt-cntnr-full" : ""}`}>
        {visibleHelpTxt && <span className={`helper-text ${error ? "error-helper-text" : ""}`}>{helperText}</span>}
        <div
          className={`input-cntnr${inputFocused ? " input-cntnr-focused" : ""}${error ? " input-cntnr-error" : ""}${isDisabled ? " input-cntnr-disabled" : ""}${size === "sm" ? " input-size-sm" : ""}`}
          onClick={inputCntnrHandler}
          onDoubleClick={doubleClickHandler}>

          {startIconCondition && <i className="left-icon fa-solid fa-phone"></i>}
          {!multiline ? (
            <input
              type="text"
              placeholder="Placeholder"
              value={inputVal}
              className="input"
              ref={inputElement}
              onChange={changeHandler}
              onFocus={focusHandler}
              onBlur={blurHandler}
              onDoubleClick={doubleClickHandler} />
          ) : (
            <textarea
              className="multiline-input"
              ref={inputElement}
              rows={row}
              placeholder="Placeholder"
              onFocus={focusHandler}
              onBlur={blurHandler}></textarea>
          )}
          {endIconCondition && <i className="right-icon fa-solid fa-lock"></i>}

        </div>
        <label>Label</label>
      </div>
    </div>
  );
}

export default Input;