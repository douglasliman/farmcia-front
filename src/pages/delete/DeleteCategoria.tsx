import React from "react";
import { deletar } from "../../services/Services";

interface DeleteCategoriaProps {
  id?: number;
  name?: string;
}

const DeleteCategoria: React.FC<DeleteCategoriaProps> = ({ id, name }) => {
  const handleDelete = async () => {
    try {
      await deletar(`/categorias/${id}`, {});
      console.log("Categoria deletada:", name);
    } catch (error) {
      console.error("Erro ao deletar categoria:", error);
    }
  };

  return (
    <div>
      <h3>{name}</h3>
      <button onClick={handleDelete}>Deletar</button>
    </div>
  );
};

export default DeleteCategoria;
