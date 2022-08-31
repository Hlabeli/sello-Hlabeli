import SectionTitle from "../Common/section-title";
import OneCertification from "./one-certification";
const Certifications = ({ title, data }) => {
  return (
    <div>
      <SectionTitle title={title} />
      {data.map((cert, index) => {
        return <OneCertification key={index} data={cert} />;
      })}
    </div>
  );
};

export default Certifications;
