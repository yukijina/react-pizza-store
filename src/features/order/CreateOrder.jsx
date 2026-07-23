// import { useState } from 'react';

import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { craeteOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";

// https://uibakery.io/regex-library/phone-number

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // we use navagation to check loading status.
  // Status change to 'submitting' when it fetch data
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  // from react-router. It is connected to action. If there is an error in actin, it immediately come here.
  const formErrors = useActionData();

  //const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      {/* this Form is from react-router-dom. actio function at the bottom. no need to set up on change state */}
      <Form method="POST">
        <div>
          <label>First Name</label>
          <input className="input" type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input className="input" type="tel" name="phone" required />
          </div>
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <input className="input" type="text" name="address" required />
        </div>

        <div>
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />

          <label htmlFor="priority">Want to give your order priority?</label>
        </div>

        <div>
          {/* This is invisible. Added this because we want to send data when the form is submitted */}
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />

          <Button disabled={isSubmitting}>
            {isSubmitting ? "Placing order..." : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  // formData is provided by browser
  const formData = await request.formData();
  // console.log(formData);
  const data = Object.fromEntries(formData);
  // console.log(data);

  // reformat the data
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };
  // console.log(order);

  // Error handling
  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please give us your correct number. We might need it to contact you.";

  if (Object.keys(errors).length > 0) return errors;

  // If everything is okay, create new order and redirect
  //const newOrder = await craeteOrder(order);
  // console.log(newOrder);

  // redirect is from react-router. We can't call Hooks (useNavigate) inside the function
  //return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
