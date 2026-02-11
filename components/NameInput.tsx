import React, { useState } from 'react';
import { HeartCrack, Heart } from 'lucide-react';
import Swal from 'sweetalert2';

interface NameInputProps {
  onNameConfirmed: () => void;
}

export const NameInput: React.FC<NameInputProps> = ({ onNameConfirmed }) => {
  const [name, setName] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = name.trim().toLowerCase();
    
    if (cleanName === 'aranxita') {
      onNameConfirmed();
    } else {
      Swal.fire({
        title: 'Oops… ¿Quién eres?',
        html: '<b>Ese no es el nombre correcto</b><br/>Solo la verdadera <span style=\"color:#e11d48\">Aranxita</span> puede continuar 💘',
        icon: 'info',
        background: '#ffe4e6',
        color: '#9f1239',
        confirmButtonText: 'Vale, lo intentaré otra vez',
        confirmButtonColor: '#fb7185',
        showCloseButton: true
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-valentine-50 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border-2 border-valentine-100">
        <div className="flex justify-center mb-6">
          <div className="bg-valentine-100 p-4 rounded-full">
            <Heart className="text-valentine-500 w-8 h-8" />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-center text-gray-800 font-sans mb-2">
          Identifícate, viajera
        </h2>
        <p className="text-center text-gray-500 mb-8 font-sans">
          Para acceder a esta historia, necesito saber quién eres.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 relative">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full px-4 py-3 rounded-xl border-gray-300 bg-gray-50 focus:bg-white focus:border-valentine-400 focus:ring-valentine-400 transition-colors outline-none text-center text-lg shadow-inner"
              placeholder="Aranxita"
              autoComplete="off"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-valentine-500 text-white py-3 rounded-xl font-bold hover:bg-valentine-600 transition-colors shadow-md hover:shadow-lg transform active:scale-95 duration-100"
          >
            Confirmar
          </button>

        </form>
      </div>
    </div>
  );
};
