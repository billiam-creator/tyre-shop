import Image from 'next/image'
import Link from 'next/link'

const TyreCard = ({ brand, model, price, image, tag }) => {
  return (
    <div className='bg-white/5 border border-white/10 rounded-2xl p-4 transition-all hover:border-orange-500 hover:scale-[1.02] group'>

      {/* Tyre Image */}
      <div className='relative h-36 w-full mb-3'>
        <Image src={image} alt={model} fill className='object-contain' />
        {tag && (
          <span className='absolute top-0 left-0 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase'>
            {tag}
          </span>
        )}
      </div>

      {/* Info */}
      <div className='space-y-1'>
        <p className='text-gray-400 text-xs font-bold uppercase tracking-widest'>{brand}</p>
        <h3 className='text-white font-bold text-lg'>{model}</h3>
        <p className='text-orange-500 font-black mt-2 text-xl'>KES {price}</p>
      </div>

      {/* Buttons */}
      <div className='mt-6 flex gap-2'>
        <button className='flex-1 bg-orange-500 hover:bg-orange-600 text-white text-[10px] font-bold py-2 rounded uppercase transition-colors'>
          Order Now
        </button>
        <Link href={`/tyres`} className='flex-1 border border-white/20 text-white text-[10px] font-bold py-2 rounded uppercase hover:bg-white/10 transition-colors text-center'>
          Details
        </Link>
      </div>

    </div>
  )
}

export default TyreCard