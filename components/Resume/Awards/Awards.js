import SectionTitle from "../Common/section-title";
import OneAward from "./one-award";
const Awards = ({ title, data }) => {
  return (
    <div>
      <SectionTitle title={title} />
      {data.map((award, index) => {
        return <OneAward key={index} data={award} />;
      })}
    </div>
  );
};

export default Awards;
