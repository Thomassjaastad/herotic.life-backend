export const Item = (props) => {
  const { image, title, price, currency } = props.item;
  return (
    <article className="item">
      <img src={image} alt="" />
      <h1>
        {title}
      </h1>
      <h4>
        {currency} {price}
      </h4>
     </article>
  );
};