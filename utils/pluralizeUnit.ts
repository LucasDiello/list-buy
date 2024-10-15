const pluralizeUnit = (unit: string, quantity: number) => {
    const unitPlurals: { [key: string]: string } = {
      un: "unidades",
      Kg: "Kg",
      L: "Litros",
    };
    return quantity > 1 ? unitPlurals[unit] || unit : unit;
  };
  
  export default pluralizeUnit;