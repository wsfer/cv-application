function ResumeHeader({ name, contacts }) {
  const haveContacts = Object.keys(contacts).length > 0;

  return (
    <>
      {name && <h2 className="resume__name">{name}</h2>}
      {haveContacts && (
        <div className="resume__contacts">
          {Object.values(contacts).map((contact, index) => (
            <span className="resume__contact-data" key={index}>
              {contact}
            </span>
          ))}
        </div>
      )}
    </>
  );
}

export default ResumeHeader;
