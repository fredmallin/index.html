function ProductCard({ name, price, description, imageUrl, hidePrice }) {
  const handleOrderNow = () => {
    const message = encodeURIComponent(
      `Hello Mini Mingle, I would like to order ${name}${price ? ` (KSh ${price})` : ""}. ${description}`
    );
    window.open(`https://wa.me/254700000000?text=${message}`, "_blank");
  };

  return (
    <div className="product-card">

      {/* IMAGE */}
      <div className="product-image">
        {imageUrl ? (
          <img src={imageUrl} alt={name} />
        ) : (
          <div className="placeholder">👶</div>
        )}
      </div>

      {/* CONTENT */}
      <div className="product-content">
        <h3>{name}</h3>

        {!hidePrice && price && (
          <p className="price">KSh {price.toLocaleString()}</p>
        )}

        <p className="desc">{description}</p>

        <button onClick={handleOrderNow} className="order-btn">
          Order Now
        </button>
      </div>

    </div>
  );
}

export default ProductCard;