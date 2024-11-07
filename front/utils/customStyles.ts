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
    backgroundColor: state.isSelected
      ? "#252529"
      : state.isFocused
      ? "#3b3b3d"
      : "transparent",
    color: "white",
    padding: "10px 0px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    // Adicionando arredondamento ao primeiro e último item ao passar o mouse
    borderTopLeftRadius: state.data.value === "1" ? "5px" : "0",
    borderTopRightRadius: state.data.value === "1" ? "5px" : "0",
    borderBottomLeftRadius: state.data.value === "3" ? "5px" : "0",
    borderBottomRightRadius: state.data.value === "3" ? "5px" : "0",
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: "rgba(23, 23, 26, 1)",
    marginTop: "4px",
    padding: "0",
  }),
  menuList: (provided: any) => ({
    ...provided,
    padding: "0",
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
    backgroundColor: state.isSelected
      ? "#252529"
      : state.isFocused
      && "#3b3b3d" ,
    color: "white",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    // Adicionando arredondamento ao primeiro e último item ao passar o mouse
    borderTopLeftRadius: state.data.value === "1" ? "5px" : "0",
    borderTopRightRadius: state.data.value === "1" ? "5px" : "0",
    borderBottomLeftRadius: state.data.value === "5" ? "5px" : "0",
    borderBottomRightRadius: state.data.value === "5" ? "5px" : "0",
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: "rgba(23, 23, 26, 1)",
    marginTop: "4px", // Remover qualquer margem superior
  }),
  menuList: (provided: any) => ({
    ...provided,
    padding: "0", // Remover padding extra
  }),
  singleValue: (provided: any, state: any) => ({
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