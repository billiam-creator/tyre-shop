// src/app/components/Button.jsx
const Button = ({ text, variant, href }) => {
    const baseStyles = "px-8 py-3 rounded-md font-bold text-xs tracking-widest transition-all duration-300 uppercase";
    
    const variantStyles = variant === 'solid'
      ? "bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-900/20"
      : "border-2 border-white/30 hover:border-white hover:bg-white/10 text-white";
  
    return (
      <button className={`${baseStyles} ${variantStyles}`}>
        {text}
      </button>
    );
  };
  
  export default Button;