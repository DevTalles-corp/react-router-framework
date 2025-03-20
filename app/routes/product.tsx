import type { Route } from './+types/product';

export async function loader({ params }: Route.LoaderArgs) {
  const { name } = params;

  return {
    name: name.toUpperCase(),
  };
}

const ProductPage = ({ loaderData }: Route.ComponentProps) => {
  const { name } = loaderData;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Detalles del Producto</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-lg">
          <span className="font-semibold">Nombre del producto:</span> {name}
        </p>
      </div>
    </div>
  );
};
export default ProductPage;
