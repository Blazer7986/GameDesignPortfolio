const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col flex-center gap-5">
      <div className="font-semibold text-5xl text-center">{title}</div>

      <div className="hero-badge">
        <p>{sub}</p>
      </div>
    </div>
  );
};

export default TitleHeader;
