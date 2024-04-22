import React from "react";
import { Link } from "react-router-dom"; // Importe o componente Link

interface NavbarProps {
  className?: string;
  onChangePage?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div
      className={`w-full bg-indigo-900 text-white flex justify-center py-4 ${className}`}
    >
      <div className="container flex justify-between text-lg">
        <div className="text-2xl font-bold uppercase">Blog Pessoal</div>

        <div className="flex gap-4">
          <Link to="/" className="hover:underline">
            Inicio
          </Link>
          <Link to="/getAll" className="hover:underline">
            Catregorias
          </Link>
          <Link to="/post" className="hover:underline">
            Cadastrar Catregorias
          </Link>
          <Link to="/put" className="hover:underline">
            Editar Categorias
          </Link>
          <Link to="/delete" className="hover:underline">
            Excluir Categorias
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
