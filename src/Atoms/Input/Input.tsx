import {useState} from "react";

interface IControlledInput {
  fieldName: string;
  handleFormDataChange: () => void;
  type: "text" | "number" | "email";
  required?: boolean;
}

const ControlledInput = ({fieldName, handleFormDataChange, type}: IControlledInput, required = false) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
    const {name, value} = event.target;
    handleFormDataChange({name, value});
  };

  return (
    <label>
      {fieldName}:
      <input
        required={required}
        type={type}
        id={fieldName}
        name={fieldName}
        value={inputValue}
        onChange={handleChange}
      />
    </label>
  );
};

export default ControlledInput;
