import SectionTitle from "../Common/section-title";
import OneEducation from "./one-education";
const Education = ({ title, data }) => {
  return (
    <div>
      <SectionTitle title={title} />
      {data.map((edu, index) => {
        return <OneEducation key={index} data={edu} />;
      })}
    </div>
  );
};

export default Education;
