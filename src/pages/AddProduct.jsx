import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleAddProduct = (data) => {
    console.log(data);
    const product = {
      email: "alamin931761@gmail.com",
      title: data.title,
      stock: parseInt(data.stock),
      price: parseFloat(data.price),
      discount: parseFloat(data.discount),
    };

    fetch(`https://react-interview.1putym.easypanel.host/api/product`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    reset();
  };

  return (
    <div className="flex justify-center w-full mt-5">
      <form
        onSubmit={handleSubmit(handleAddProduct)}
        className="flex flex-col gap-3 w-full max-w-md"
      >
        {/* title */}
        <input
          type="text"
          placeholder="Title"
          className="input input-bordered w-full max-w-md"
          {...register("title")}
        />

        {/* stock */}
        <input
          type="text"
          placeholder="Stock"
          className="input input-bordered w-full max-w-md"
          {...register("stock")}
        />

        {/* price */}
        <input
          type="text"
          placeholder="Price"
          className="input input-bordered w-full max-w-md"
          {...register("price")}
        />

        {/* stock */}
        <input
          type="text"
          placeholder="stock"
          className="input input-bordered w-full max-w-md"
          {...register("stock")}
        />

        {/* discount */}
        <input
          type="text"
          placeholder="Discount"
          className="input input-bordered w-full max-w-md"
          {...register("discount")}
        />

        {/* submit button */}
        <input
          type="submit"
          value="Submit"
          className="btn btn-outline block w-full max-w-md"
        />
      </form>
    </div>
  );
};

export default AddProduct;
