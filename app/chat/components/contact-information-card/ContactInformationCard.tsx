import { useLoaderData, useNavigation, useParams } from 'react-router';
import { ContactInformation } from './ContactInformation';
import { ContactInformationSkeleton } from './ContactInformationSkeleton';
import { NoContactSelected } from './NoContactSelected';
import type { Client } from '~/chat/interfaces/chat.interface';

interface Props {
  client?: Client;
}

export const ContactInformationCard = () => {
  const { id } = useParams();
  const { clients = [], client } = useLoaderData();
  const { state } = useNavigation();

  const isPending = state === 'loading';

  if (client) return <ContactInformation client={client} />;

  if (isPending) return <ContactInformationSkeleton />;

  if (!id) return <NoContactSelected />;

  if (!client) return <NoContactSelected />;
  // const client = clients.find((client: Client) => client.id === id);

  return <ContactInformation client={client} />;
};
