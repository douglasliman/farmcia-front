import React, { useState } from "react";

import { cadastrar } from "../../services/Services";

const PostCategoria: React.FC = () => {
  const [nome, setNome] = useState("");

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await cadastrar("/categorias", { nome }, () => {}, {});
      console.log("Nova categoria criada!");
      setNome("");
    } catch (error) {
      console.error("Erro ao criar categoria:", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Criar Nova Categoria</h1>

      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome da Nova Categoria"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        <button className="ml-3 rounded bg-blue-800 text-white py-2 px-4 hover:bg-orange-600 hover:text-white">
          Criar Categorias
        </button>
      </form>
    </div>
  );
};

export default PostCategoria;
