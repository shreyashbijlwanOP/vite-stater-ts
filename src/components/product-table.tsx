import Product from "../types/product";

interface PropsType {
  data: Product[];
}
export default function ProductTable(props: PropsType) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((x) => (
            <tr key={x.id}>
              <td>{x.id}</td>
              <td>{x.name}</td>
              <td>{x.price}</td>
              <td>{x.category}</td>
              <td>{x.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
