import React, { useState, useEffect } from "react";
import axios from "axios";

export interface CategoriaProp {
  id: number;
  nome: string;
}

const GetAllCategorias: React.FC = () => {
  const [categorias, setCategorias] = useState<CategoriaProp[]>([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await axios.get("/categorias");
        if (Array.isArray(response.data)) {
          setCategorias(response.data);
        } else {
          console.error("A resposta da API não é um array:", response.data);
        }
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    };
    fetchCategorias();
  }, []);

  return (
    <div>
      <h1>Categorias</h1>
      <p>Aqui vai todas as categorias de Remedio</p>
      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.id}>{categoria.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default GetAllCategorias;
