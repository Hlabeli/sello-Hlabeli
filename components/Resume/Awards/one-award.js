const OneAward = ({ data }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-end">
        <a href={data.what.link} className="text-lg font-bold" rel="noopener">
          {data.what.label}
        </a>
        <span className="text-gray-600 dark:text-gray-400 text-sm whitespace-nowrap">{`${data.when}`}</span>
      </div>

      <hr className="dark:border-eerie mb-2" />
      <p></p>
      <p>{data.description}</p>
    </div>
  );
};
export default OneAward;
