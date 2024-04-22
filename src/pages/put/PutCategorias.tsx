import React, { useState, useEffect } from "react";
import axios from "axios";
import { buscar } from "../../services/Services";
interface PutCategoriaProps {
  id?: number;
}
const PutCategoria: React.FC<PutCategoriaProps> = ({ id }) => {
  const [nome, setNome] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoria = async () => {
      try {
        await buscar(
          `/categorias/${id}`,
          (data: any) => {
            setNome(data.nome);
            setLoading(false);
          },
          {}
        ); // Usando a função buscar do serviço para obter os dados da categoria
      } catch (error) {
        console.error("Erro ao buscar categoria:", error);
      }
    };
    fetchCategoria();
  }, [id]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.put(`/categorias/${id}`, { nome });
      alert("Categoria atualizada!");
    } catch (error) {
      console.error("Erro ao atualizar categoria:", error);
    }
  };

  if (loading) return <div>Carregando...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Atualizar Categoria</h1>

      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Atualizar  Categoria"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        <button className="ml-3 rounded bg-blue-800 text-white py-2 px-4 hover:bg-orange-600 hover:text-white">
          Atualizar Categoria
        </button>
      </form>
    </div>
  );
};

export default PutCategoria;
