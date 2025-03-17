import { UserCircle } from 'lucide-react';

export const NoContactSelected = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-4 text-center text-muted-foreground">
      <div className="mb-4">
        <UserCircle className="h-12 w-12" />
      </div>
      <p className="text-lg font-medium mb-2">No hay contacto seleccionado</p>
      <p className="text-sm">
        Por favor selecciona un contacto para ver su información detallada
      </p>
    </div>
  );
};
