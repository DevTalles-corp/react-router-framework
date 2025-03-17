import { Link } from 'react-router';

const TestingPage = () => {
  return (
    <>
      <div>TestingPage</div>
      <Link to="/auth/login" className="text-blue-500 underline">
        Go back
      </Link>
    </>
  );
};
export default TestingPage;
