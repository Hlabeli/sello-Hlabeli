const SocialMediaButton = (props) => {
  return (
    <a
      className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-900 dark:bg-white hover:bg-gray-700 text-white dark:text-black dark:hover:bg-gray-200"
      href={props.href}
      rel="noopener"
    >
      <span>{props.icon}</span>
      <span className="sr-only">{props.label}</span>
    </a>
  );
};
export default SocialMediaButton;
