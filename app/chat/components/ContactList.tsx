import { NavLink, useParams } from 'react-router';
import { Button } from '~/components/ui/button';
import { ScrollArea } from '~/components/ui/scroll-area';

import type { Client } from '../interfaces/chat.interface';

interface Props {
  clients: Client[];
}

export const ContactList = ({ clients }: Props) => {
  const { id } = useParams();

  return (
    <ScrollArea className="h-[calc(100vh-120px)]">
      <div className="space-y-4 p-4">
        <div className="space-y-1">
          <h3 className="px-2 text-sm font-semibold">Contacts</h3>
          <div className="space-y-1">
            {clients.map((client) => (
              <NavLink
                key={client.id}
                to={`/chat/client/${client.id}`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? 'w-full my-2 justify-start flex items-center gap-2 bg-black transition-colors duration-200 rounded-2xl text-primary font-semibold'
                    : isPending
                    ? 'w-full my-2 justify-start flex items-center gap-2 bg-primary/10 transition-colors duration-200 rounded-2xl text-primary font-semibold'
                    : 'w-full my-2 justify-start flex items-center gap-2 text-muted-foreground'
                }
              >
                <div
                  className={
                    id === client.id
                      ? '"h-6 w-6 rounded-full bg-black mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs"'
                      : '"h-6 w-6 rounded-full bg-gray-300 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs"'
                  }
                >
                  {client.name.charAt(0) + client.name.charAt(1)}
                </div>
                <span
                  className={
                    id === client.id ? 'text-white' : 'text-muted-foreground'
                  }
                >
                  {client.name}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="pt-4 border-t mt-4">
          <h3 className="px-2 text-sm font-semibold mb-1">Recent</h3>
          <Button variant="ghost" className="w-full justify-start">
            <div className="h-6 w-6 rounded-full bg-gray-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
              TM
            </div>
            Thomas Miller
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <div className="h-6 w-6 rounded-full bg-red-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
              SB
            </div>
            Sarah Brown
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
};
