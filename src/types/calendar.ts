export interface Atividade {
    mes: string;
    data: string;
    atividade: string;
    tipo: string;
    paraquem: string;
    local: string;
    secao: string;
  }
  
  export interface FiltersState {
    tipo: string[];
    paraquem: string[];
    local: string[];
    secao: string[];
    searchTerm: string;
  }