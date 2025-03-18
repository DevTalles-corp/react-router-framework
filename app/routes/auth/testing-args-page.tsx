import { data, Link } from 'react-router';
import type { Route } from './+types/testing-args-page';
import { sleep } from '~/lib/sleep';

export function meta() {
  return [
    { title: 'Support Chat' },
    {
      property: 'og:title',
      content: 'Support Chat',
    },
    {
      name: 'description',
      content: 'Support Chat for the app',
    },
  ];
}

export function headers() {
  return {
    'X-Stretchy-Pants': 'its for fun',
    'Cache-Control': 'max-age=300, s-maxage=3600',
  };
}

export function links() {
  return [
    // {
    //   rel: 'icon',
    //   href: '/favicon.png',
    //   type: 'image/png',
    // },
    // {
    //   rel: 'stylesheet',
    //   href: 'https://example.com/some/styles.css',
    // },
    // {
    //   rel: 'preload',
    //   href: '/images/banner.jpg',
    //   as: 'image',
    // },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  console.log({ params });
  return { hola: 'mundo' };
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  console.log({ params });

  await sleep(1500);
  return { hola: 'mundo' };
}

export function HydrateFallback() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="mx-auto mb-4 h-16 w-16 animate-spin rounded-full border-t-4 border-blue-500"></div>
        <p className="text-xl text-gray-600">Cargando...</p>
      </div>
    </div>
  );
}

clientLoader.hydrate = true as const;

export default function MyRouteComponent({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  const { id, name, age } = params;

  console.log({ id, name, age });
  console.log('Componente creado');

  return (
    <div>
      <h1 className="font-bold text-2xl">Testing Args Page</h1>
      <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <p>Action Data: {JSON.stringify(actionData)}</p>
      <p>Route Parameters: {JSON.stringify(params)}</p>
      <p>Matched Routes: {JSON.stringify(matches)}</p>

      <Link to="/auth/testing" className="text-blue-500 underline text-2xl">
        Testing Args
      </Link>
    </div>
  );
}
