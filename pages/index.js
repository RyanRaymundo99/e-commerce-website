import { FeaturedProduct, Carousel, LingerieBanner, Sidebar} from '../components';
import {client} from '../lib/client'
import { countries } from "../lib/Data";


function Home( { products, bannerData } ) {
  return (
      <div>
      <Sidebar/>
      <Carousel images={countries} />

      <div class="flex flex-col text-center w-full mb-20 mt-20">
        <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">MAIS VENDIDOS</h2>
        <h1 class="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900">Em Destaque nas Últimas 48 horas</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Variedades de produtos da catergoria Eletronicos</p>
      </div>

      <div className='products-container'>
        {products?.map((product) => <FeaturedProduct key={product._id} product={product} />)}
      </div>

      <LingerieBanner/>
      
      
      </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home