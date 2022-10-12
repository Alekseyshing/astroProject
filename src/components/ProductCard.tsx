import { IProducts } from "../types"
import { useState } from 'preact/hooks'

interface IProductCard {
  product: IProducts
}


export default function ProductCard({ product }: IProductCard) {
  const [details, setDetails] = useState(false);
  const toggle = () => setDetails((prev) => !prev)
  return (
    <div className='flex flex-col gap-5 items-center justify-center border rounded mb-2 p-3 '>
      <h2 className='text-lg'>{product.title}</h2>
      <p className='font-bold'>{product.price}</p>
      <a href={`/product/${product.id}`}>Open product</a>
      <button onClick={toggle} className='border py-2 px-4 bg-cyan-400 active:bg-cyan-900 rounded-lg hover:shadow-lg hover:bg-cyan-600 transition duration-300 ease-in-out text-white'>Toggle description</button>
      {details && <p>{product.description}</p>}
    </div>
  )
}