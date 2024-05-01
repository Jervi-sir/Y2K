import { useState } from 'react';
import { ProductCard } from '../components/ProductCard'
export const ItemDetailsWindow = () => {
  const [product, setProduct] = useState({
    title: "Vintage Camera",
    imageUrl: "https://example.com/vintage-camera.jpg",
    isFavorite: false
  });
  const handleAddToCart = () => {
    console.log("Add to Cart Clicked!");
  };

  const toggleFavorite = () => {
    setProduct(prev => ({ ...prev, isFavorite: !prev.isFavorite }));
    console.log("Toggle Favorite!");
  };

  return (
    <>
      <ProductCard
        product={product}
        onAddToCart={handleAddToCart}
        onToggleFavorite={toggleFavorite}
      />
    </>
  )
}