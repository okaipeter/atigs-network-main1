export const gradients = {
  primary: "bg-gradient-to-r from-[#1a365d] to-[#2c5282]",
  secondary: "bg-gradient-to-r from-[#2c5282] to-[#4299e1]",
  accent: "bg-gradient-to-r from-[#4299e1] to-[#63b3ed]",
  dark: "bg-gradient-to-r from-gray-900 to-gray-800",
  light: "bg-gradient-to-r from-gray-50 to-white"
};

export const shadows = {
  sm: "shadow-sm hover:shadow-md transition-shadow duration-300",
  md: "shadow-md hover:shadow-lg transition-shadow duration-300",
  lg: "shadow-lg hover:shadow-xl transition-shadow duration-300",
  xl: "shadow-xl hover:shadow-2xl transition-shadow duration-300"
};

export const glassmorphism = {
  light: "bg-white/80 backdrop-blur-md",
  dark: "bg-black/50 backdrop-blur-md",
  primary: "bg-[#1a365d]/80 backdrop-blur-md"
};

export const buttonStyles = {
  primary: "px-8 py-3 bg-[#1a365d] text-white rounded-lg font-medium hover:bg-[#2c5282] transition-colors",
  secondary: "px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors",
  accent: "px-8 py-3 bg-[#4299e1] text-white rounded-lg font-medium hover:bg-[#63b3ed] transition-colors"
};

export const textGradients = {
  primary: "bg-clip-text text-transparent bg-gradient-to-r from-[#1a365d] to-[#2c5282]",
  secondary: "bg-clip-text text-transparent bg-gradient-to-r from-[#2c5282] to-[#4299e1]",
  accent: "bg-clip-text text-transparent bg-gradient-to-r from-[#4299e1] to-[#63b3ed]"
};

export const containers = {
  default: "container mx-auto px-4",
  narrow: "container mx-auto px-4 max-w-5xl",
  wide: "container mx-auto px-4 max-w-7xl"
};

export const cards = {
  default: "bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300",
  glass: "bg-white/80 backdrop-blur-md rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300",
  gradient: "bg-gradient-to-r from-[#1a365d] to-[#2c5282] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
};

export const grids = {
  responsive2: "grid grid-cols-1 md:grid-cols-2 gap-8",
  responsive3: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
  responsive4: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
};

export const sections = {
  default: "py-16",
  hero: "min-h-[60vh] relative flex items-center",
  feature: "py-24 bg-gray-50"
}; 