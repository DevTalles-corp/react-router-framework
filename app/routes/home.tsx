import type { Route } from './+types/home';
import { Navigate, redirect } from 'react-router';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Bienvenido a React Router!!!!' },
    { name: 'description', content: 'Bienvenido a React Router!!!!' },
  ];
}

export async function loader() {
  return redirect('/chat');
}

export default function Home() {
  return <Navigate to="/chat" />;

  // return (
  //   <div>
  //     <h1 className="text-4xl font-thin">Bienvenido a React Router!</h1>
  //     <p className="text-lg">
  //       Este es un proyecto de React Router creado con el comando de Vite.
  //     </p>
  //   </div>
  // );
}
