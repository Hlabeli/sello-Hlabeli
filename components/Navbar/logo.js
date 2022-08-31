import Link from "next/link";
const Logo = () => {
  return (

    <Link href="/">
      <a className="flex flex-col -space-y-2  hover:text-gray-700 dark:hover:text-gray-200">
        <span className="text-lg">CS</span>
        <span className="font-bold text-2xl">
          <span className="text-3xl">H</span>labeli
        </span>
      </a>
    </Link>
  );
};
export default Logo;
