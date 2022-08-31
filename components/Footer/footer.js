import { GrTwitter, GrLinkedinOption } from "react-icons/gr";
const social = [
  {
    label: "Twitter",
    icon: <GrTwitter />,
    link: "https://twitter.com/HlabeliSello",
  },
  {
    label: "LinkedIn",
    icon: <GrLinkedinOption />,
    link: "https://www.linkedin.com/in/sello-hlabeli-229494177",
  },
];
const Footer = () => {
  return (
    <div className=" w-full mt-20 flex flex-col space-y-3 md:flex-row justify-center md:justify-between items-center text-gray-600 dark:text-gray-400">
      <p className="text-sm text-center">
        <span>
          <span className="sr-only">copyright</span>&#169;
        </span>
        2021 Sello Hlabeli.
      </p>

      <address className="flex space-x-2 text-base">
        {social.map((item) => {
          return (
            <a
              className="w-6 h-6 hover:text-black dark:hover:text-white"
              key={item.label}
              href={item.link}
              rel="noopener"
              title={`my ${item.label}`}
            >
              {item.icon}
              <span className="sr-only">{item.label}</span>
            </a>
          );
        })}
      </address>
    </div>
  );
};

export default Footer;
