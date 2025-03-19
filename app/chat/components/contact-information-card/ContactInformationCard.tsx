import { useLoaderData, useNavigation, useParams } from 'react-router';
import { ContactInformation } from './ContactInformation';
import { ContactInformationSkeleton } from './ContactInformationSkeleton';
import { NoContactSelected } from './NoContactSelected';
import type { Client } from '~/chat/interfaces/chat.interface';
export const ContactInformationCard = () => {
  const { id } = useParams();
  const { clients = [] } = useLoaderData();
  const { state } = useNavigation();

  const isPending = state === 'loading';

  if (isPending) return <ContactInformationSkeleton />;

  if (!id) return <NoContactSelected />;

  const client = clients.find((client: Client) => client.id === id);

  if (!client) return <NoContactSelected />;

  return <ContactInformation client={client} />;
};
