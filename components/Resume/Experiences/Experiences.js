import SectionTitle from "../Common/section-title";
import OneExperience from "./one-experience";
const Experiences = ({ title, data }) => {
  return (
    <div>
      <SectionTitle title={title} />

      {data.map((exp, index) => {
        return <OneExperience key={index} data={exp} />;
      })}
    </div>
  );
};

export default Experiences;
