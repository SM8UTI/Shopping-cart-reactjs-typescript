import { ItemCard } from "../../Components";
import data from "../../Data/data.json";

const Store = () => {
  return (
    <div className="my-12">
      <h1 className="text-3xl font-bold my-12 underline">Store</h1>
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.StoreItems.map((item) => (
          <ItemCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Store;
