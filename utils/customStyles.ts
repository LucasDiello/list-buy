export const customStylesUnit = {
  control: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: "rgba(23, 23, 26, 1)",
    borderColor: state.isFocused ? "rgba(168, 129, 230, 1)" : "#252529",
    color: "white",
    boxShadow: "none",
    "&:hover": {
      borderColor: "rgba(168, 129, 230, 1)",
    },
    borderRadius: "0 8px 8px 0",
    height: "40px",
    cursor: "pointer",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#252529"
      : state.isFocused
      ? "#3b3b3d"
      : "transparent",
    color: "white",
    padding: "10px 0px",
    display: "flex",
    alignItems: "center",
    borderRadius: "4px",
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: "rgba(23, 23, 26, 1)",
    borderRadius: "8px",
  }),
  singleValue: (provided: any) => ({
    color: "white",
    position: "absolute" as "absolute",
}),
  indicatorSeparator: () => ({
    display: "none",
  }),
  placeholder: (base: any) => ({
    ...base,
  }),
};

export const customStylesCategory = {
  control: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: "rgba(23, 23, 26, 1)",
    borderColor: state.isFocused ? "rgba(168, 129, 230, 1)" : "#252529",
    color: "white",
    boxShadow: "none",
    "&:hover": {
      borderColor: "rgba(168, 129, 230, 1)",
    },
    height: "40px",
    cursor: "pointer",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#252529"
      : state.isFocused
      ? "#3b3b3d"
      : "transparent",
    color: "white",
    padding: "10px",
    display: "flex",
    alignItems: "center",
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: "rgba(23, 23, 26, 1)",
    borderRadius: "8px",
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "white",
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "rgba(175, 171, 182, 1)",
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: "rgba(175, 171, 182, 1)",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};
