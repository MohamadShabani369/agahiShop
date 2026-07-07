import type { ComponentProps } from "react";
type Size = "sm" | "md" | "icon";
type Tvariant = "primary" | "secondary" | "danger" | "success";
type Tbutton = ComponentProps<"button"> & {
  variant?: Tvariant;
  size? : Size
};

function Button({ children, variant="primary",size = "md" , className= "", ...rest }: Tbutton) {
 
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600 text-black font-bold cursor-pointer",
    secondary: "bg-gray-500 hover:bg-gray-600 text-black font-bold cursor-pointer",
    danger: "bg-red-500 hover:bg-red-600 text-black font-bold cursor-pointer",
    success: "bg-green-500 hover:bg-green-600 text-black font-bold cursor-pointer"
  };

  const sizes = {
  sm: "px-2 py-1",
  md: "px-4 py-3",
  icon: "w-10 h-10 flex items-center justify-center",
};

  return (
    <button
      {...rest}
      className={` rounded ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </button>
  );
}
export default Button;
