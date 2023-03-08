import React from "react";

const Select = ({
  label,
  title,
  options,
  componentStyle,
  labelStyle,
  selectStyle,
  optionStyle,
  onChangeValue,
  stateValue
}) => {
  const select = {};
  const component = {
    display: "flex",
    flexDirection: "column",
  };

  const handleChange = (e) => {
    console.log(e.target.value)
    onChangeValue(e.target.value)
    console.log("state", stateValue)
  }
  return (
    <div className="App" style={Object.assign(component, componentStyle)}>
      <label for={label} style={labelStyle}>
        {title}
      </label>

      <select
        name={label}
        id={label}
        value={stateValue}
        onChange={handleChange}
        style={Object.assign(select, selectStyle)}
      >
        {options.map((item, index) => (
          <option value={item.value} style={optionStyle} key={index}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
