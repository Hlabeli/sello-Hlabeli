const OneEducation = ({ data }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-end">
        <span className="text-xl font-bold">{data.what}</span>
        <span className="text-gray-600 dark:text-gray-400 text-sm whitespace-nowrap">{` ${data.when.start}-${data.when.end}`}</span>
      </div>

      <hr className="dark:border-eerie mb-2" />
      <a href={data.where.link} className="" rel="noopener">
        {data.where.label}
      </a>
    </div>
  );
};
export default OneEducation;
