const pluralizeUnit = (unit: string, quantity: number) => {
    const unitPlurals: { [key: string]: string } = {
      Unidade: "unidades",
      Kg: "Kg",
      L: "Litros",
    };
    return Number(quantity) > 1 ? unitPlurals[unit] || unit : unit;
  };
  
  export default pluralizeUnit;