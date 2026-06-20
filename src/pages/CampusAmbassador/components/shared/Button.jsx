import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * Props:
 * - label: Button text
 * - navigateTo: Route path (for Link navigation)
 * - onClick: Callback function (for non-routing actions)
 * - icon: Icon component from lucide-react
 * - variant: 'primary' | 'secondary' | 'cta-yellow' | 'submit' (color scheme)
 * - type: 'button' | 'submit' | 'reset' (HTML button type, defaults based on variant)
 * - disabled: Boolean
 * - className: extra Tailwind classes to extend or override defaults
 */

/* eslint-disable react/prop-types */
export function Button({
  label,
  navigateTo = null,
  onClick = null,
  icon: Icon = ArrowRight,
  variant = 'primary',
  type = null,
  disabled = false,
  className = '',
  iconClassName = 'w-5 h-5 text-amber-600',
}) {
  // Determine button type: default to 'submit' for submit variant, 'button' for others
  const buttonType = type || (variant === 'submit' ? 'submit' : 'button');
  const baseClasses = 'relative px-10 py-3.5 bg-zinc-950 border border-white/10 text-white font-bold text-xs tracking-widest uppercase rounded-full transition-transform duration-300 active:scale-95 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const gradientClasses = {
    primary: 'absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500',
    secondary: 'absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500',
    'cta-yellow': '',
    'submit': 'absolute -inset-0.5 bg-gradient-to-r from-amber-400 via-purple-600 to-amber-500 rounded-xl blur opacity-35 group-hover:opacity-75 transition duration-500',
  };
  
  const variantBaseClasses = {
    // cta-yellow uses a visible yellow background and black text
    'cta-yellow': 'relative px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-black text-sm tracking-tighter uppercase rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed',
    // submit variant with gradient blur effect and white background
    'submit': 'relative w-full bg-white hover:bg-zinc-100 text-black px-8 py-4 rounded-xl font-black text-xs tracking-widest uppercase transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
  };

  // If custom classes are passed via className, they can override defaults because they are appended last.
  const computedClassName = `${variantBaseClasses[variant] || baseClasses} ${className}`.trim();

  const ButtonContent = ({ iconClassName: customIconClassName = iconClassName } = {}) => (
    <>
      {label}
      <Icon className={`${customIconClassName} group-hover:translate-x-1 transition-transform`} />
    </>
  );

  if (navigateTo) {
    return (
      <div className="relative group">
        <div className={gradientClasses[variant] || ''} />
        <Link
          to={navigateTo}
          className={computedClassName}
          {...(disabled && { onClick: (e) => e.preventDefault() })}
        >
          <ButtonContent iconClassName={iconClassName} />
        </Link>
      </div>
    );
  }

  return (
    <div className="relative group">
      <div className={gradientClasses[variant] || ''} />
      <button
        type={buttonType}
        onClick={onClick}
        disabled={disabled}
        className={computedClassName}
      >
        <ButtonContent iconClassName={iconClassName} />
      </button>
    </div>
  );
}
