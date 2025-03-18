import { Form, Link, NavLink } from 'react-router';
import type { Route } from './+types/testing-page';
import { sleep } from '~/lib/sleep';

export async function action({ request }: Route.ActionArgs) {
  await sleep(1000);

  const data = await request.formData();
  const name = data.get('name');
  const allData = Object.fromEntries(data);
  // data.get("title"),

  console.log('Server Side - Action');
  console.log({ name, allData });

  return { ok: true, message: 'Todo bien desde el serverAction' };
}

export async function clientAction({
  serverAction,
  request,
}: Route.ClientActionArgs) {
  await sleep(1000);

  const formData = await request.clone().formData();
  const allData = Object.fromEntries(formData);
  // data.get("title"),

  // can still call the server action if needed
  const data = await serverAction();
  // return data;
  return {
    message: 'Hola Mundo desde el clientAction - Client',
    data,
    allData,
  };
}

export async function loader() {
  console.log('Hola Mundo desde el loader - Server');
  return { message: 'Hola Mundo desde el loader - Server' };
}

export async function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
  console.log('Hola Mundo desde el clientLoader - Client');

  // call the server loader
  const serverData = await serverLoader();

  return {
    message: 'Hola Mundo desde el clientLoader - Client',
    serverData: serverData,
  };
}

export default function MyRouteComponent({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  return (
    <div>
      <h1 className="font-bold text-2xl">Testing Page</h1>
      <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <p>Action Data: {JSON.stringify(actionData)}</p>
      <p>Route Parameters: {JSON.stringify(params)}</p>
      <p>Matched Routes: {JSON.stringify(matches)}</p>

      <NavLink
        to="/auth/testing-args/ABC-123/Juan/25"
        className={({ isPending }) =>
          isPending
            ? 'text-red-500 underline text-2xl'
            : 'text-blue-500 underline text-2xl'
        }
      >
        Testing Args
      </NavLink>

      {/* action="/auth/testing" */}
      <Form className="mt-2 flex gap-2" method="post">
        <input
          className="border-2 border-gray-300 rounded-md p-2"
          type="text"
          name="name"
        />
        <input
          className="border-2 border-gray-300 rounded-md p-2"
          type="text"
          name="age"
        />
        <button className="bg-blue-500 text-white rounded-md p-2" type="submit">
          Submit
        </button>
      </Form>
    </div>
  );
}
