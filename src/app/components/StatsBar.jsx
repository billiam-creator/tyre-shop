import { Star } from 'lucide-react'

const StatsBar = ({ label, value, icon: Icon }) => {
  return (
    <div className='border border-white/5 rounded-xl p-4 backdrop-blur-md bg-white/[0.02] flex items-center gap-3 group hover:bg-white/[0.05] transition-all duration-300'>

      {/* Icon */}
      <div className='relative flex items-center justify-center'>
        <div className="absolute inset-0 bg-orange-500/20 blur-lg rounded-full group-hover:bg-orange-500/40 transition-all" />
        <Icon className='relative text-orange-500' size={20} strokeWidth={1.5} />
      </div>

      {/* Value and Label */}
      <div className='flex flex-row items-baseline gap-2'>
        <h2 className='text-2xl font-black text-white tracking-tighter'>
          {value}
        </h2>
        <div className='flex flex-col justify-center'>
          {label === 'Customer Rating' && (
            <div className="flex gap-0.5 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={8} className="fill-orange-500 text-orange-500" />
              ))}
            </div>
          )}
          <p className='text-[9px] leading-tight font-bold text-gray-400 uppercase tracking-[0.2em] max-w-[70px]'>
            {label}
          </p>
        </div>
      </div>

    </div>
  )
}

export default StatsBar