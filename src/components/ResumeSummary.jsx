function ResumeSummary({ summary }) {
  return (
    <>
      {summary && (
        <>
          <h3 className="resume__subtitle">Summary</h3>
          <p className="resume__summary">{summary}</p>
        </>
      )}
    </>
  );
}

export default ResumeSummary;
