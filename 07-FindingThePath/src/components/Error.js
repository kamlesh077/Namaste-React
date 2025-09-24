import { useRouteError } from "react-router-dom";

// useRouteError this hook gives more info about error 

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>OOP's !!!</h1>
      <h2>Something Went Wrong !!</h2>
        <h3>{err.status} : {err.statusText}</h3>
    </div>
  );
};

export default Error;
