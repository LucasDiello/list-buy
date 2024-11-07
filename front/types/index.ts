export type Category = 'Fruta' | 'Legume' | 'Padaria' | 'Carne' | 'Bebida';

export type DataItems = {
    label: string;
    value: string;
  };
  
  export type Icons = {
    [key: string]: JSX.Element;
  };
  export type Item = {
    id: string;
    name: string;
    quantity: number;
    unit: string;
    category: string;
    completed: boolean;
  };
