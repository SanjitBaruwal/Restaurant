const ResuableCard = ({ color = "#fff", bg }) => {
  return (
    <div
      style={{ color, backgroundColor: bg }}
      className="flex flex-col gap-4 p-4 justify-center rounded-lg"
    >
      <h3>Primary Card Title</h3>
      <h3>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </h3>
    </div>
  );
};

export default ResuableCard;
