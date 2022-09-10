import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FeaturedProduct = ({ product: { image, name, slug, price, shipment, secondPrice } }) => {
  return (
<body>
    <div class="w-72 bg-white drop-shadow-md rounded-lg">
        <img 
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="pl-10 pt-5 max-h-48"
          />
        <div class="px-5 py-3 space-y-2">
            <h3 class="text-lg">{name}</h3>
            <div class="space-x-2">
                <span class="px-3 py-0.5 border border-blue-500 text-[11px] text-blue-500">Frete grátis</span>
                <span class="px-3 py-0.5 border border-blue-500 text-[11px] text-blue-500">Oferta em atacado</span>
            </div>
            <p class="space-x-2">
                <span class="text-2xl font-semibold">R${price}</span>
                <span class="text-sm line-through text-gray-500">R${secondPrice}</span>
                <span class="text-sm text-green-700">40% off</span>
            </p>
            <div class="flex justify-between items-center pt-3 pb-2">
                <a href="#"
                    class="px-4 py-2 bg-sky-500 hover:bg-sky-600 text-center text-sm text-white rounded duration-300">
                    Add to Cart</a>

                <a href="#" title="Add to Favorites"
                    class="text-2xl text-gray-300 hover:text-red-500 duration-300">&hearts;</a>
            </div>
        </div>
    </div>

</body>
  )
}

export default FeaturedProduct