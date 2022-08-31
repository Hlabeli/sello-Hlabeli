const InfoItem = (props) => {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-bold">{props.title}</h3>
      <hr className="dark:border-eerie mb-2" />
      <address>{props.content}</address>
    </div>
  );
};
export default InfoItem;
