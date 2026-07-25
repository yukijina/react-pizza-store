import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  // it is coming from App menuLoader = function below
  const menu = useLoaderData();
  // console.log(menu);
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

// as soon as it is routed to /menu, it loads
// export and import in App
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
