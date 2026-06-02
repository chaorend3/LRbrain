export default function Button({
  children,
  variant = "default",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "secondary";
}) {
  const baseStyles =
    "rounded px-6 py-3 text-sm font-semibold transition-all duration-200";
  const variants = {
    default: "bg-black text-white hover:bg-gray-800",
    outline: "bg-transparent border border-black text-black hover:bg-gray-100",
    secondary: "bg-gray-100 text-black hover:bg-gray-200",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
