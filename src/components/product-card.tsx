import Product from "../types/product";

interface PropsType {
  data: Product[];
}
export default function ProductCard(props: PropsType) {
  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {props.data.map((x) => (
        <div
          key={x.id}
          style={{
            width: "400px",
            border: "2px solid black",
            padding: "1rem",
          }}
        >
          <h2>{x.name}</h2>
          <div>
            MRP:{x.price} {x.category}
          </div>
          <div> {x.rating} </div>
        </div>
      ))}
    </div>
  );
}
