import { MessageCircle } from 'lucide-react';

const NoChatSelectedPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="h-24 w-24 rounded-full bg-muted/20 flex items-center justify-center mb-4">
        <MessageCircle className="h-12 w-12 text-muted-foreground" />
      </div>
      <h2 className="text-xl font-medium text-muted-foreground">
        No hay chat seleccionado
      </h2>
      <p className="text-sm text-muted-foreground mt-1">
        Selecciona un chat para comenzar una conversación
      </p>
    </div>
  );
};
export default NoChatSelectedPage;
