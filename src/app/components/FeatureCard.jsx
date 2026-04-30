const FeatureCard = ({ heading, description, icon: Icon, isActive }) => {
    return (
      <div className={`bg-[#0A0A0A] border rounded-xl p-5 transition-all duration-300 flex flex-col gap-3 ${
        isActive
          ? 'border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.15)]'
          : 'border-white/10 hover:border-orange-500/50'
      }`}>
  
        {/* Icon */}
        <div className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-full text-orange-500 shrink-0">
          <Icon size={22} strokeWidth={2} />
        </div>
  
        {/* Info */}
        <div>
          <h3 className="text-white text-sm font-bold uppercase mb-1 tracking-tight">
            {heading}
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            {description}
          </p>
        </div>
  
      </div>
    )
  }
  
  export default FeatureCard