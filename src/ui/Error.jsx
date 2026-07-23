import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  // const navigate = useNavigate();
  const error = useRouteError();

  // console.log(error);
  // console.log(error.message);
  return (
    <div>
      <h1>Something went wrong 🥲</h1>
      {/* error.data for invalid ulr, error.message for api error */}
      <p>{error.data || error.message}</p>
      {/* -1 go back to the previous url */}
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
