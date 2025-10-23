// interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
//   type: string;
// }

// const Logo: React.FC<LogoProps> = ({ type, ...props }) => {
//   const logoClasses = ["hidden dark:block", "block dark:hidden"];

//   return (
//     <>
//       <img className={`h8 dark: dark:brightness-0 dark:invert`} src="/logo.svg" alt="Green UPDate logo white text" />
//     </>
//   );
// };

// export default Logo;

function Logo() {
  return <img className="h-8 dark:brightness-0 dark:invert" src="/logo-white.svg" alt="Green UPDate logo white text" />;
}

export default Logo;
