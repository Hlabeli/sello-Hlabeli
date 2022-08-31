const OneExperience = ({ data }) => {
  return (
    <div className="mb-6 leading-loose ">
      <div className="flex justify-between items-end">
        <span className="text-xl font-bold">{data.what}</span>
        <span className="text-gray-600 dark:text-gray-400 text-sm whitespace-nowrap">{` ${data.when.start}-${data.when.end}`}</span>
      </div>

      <hr className="dark:border-eerie mb-2" />
      <p>
        <a href={data.where.link} className="font-bold" rel="noopener">
          {data.where.label}
        </a>
      </p>
      <hr className="dark:border-eerie my-2" />
      <p>{data.description}</p>
      <p className="font-bold">Responsibilities:</p>
      <ul>
        {data.accomplishments.map((acc, index) => {
          return (
            <li key={index} className="list-inside list-disc">
              {acc}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default OneExperience;
