import './Products.css';
import { AddToCartIcon } from '../Icons';

const Products = ({ products }) => {
  return (
    <main className='products'>
      <ul>
        {products.slice(0, 12).map(product => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong>
            </div>
            <div style={{ color: '#646cff' }}>
              <strong>${product.price}</strong>
            </div>
            <div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Products;