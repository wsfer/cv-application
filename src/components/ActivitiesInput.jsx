function ActivitiesInput({
  currentActivities,
  newActivityValue,
  setNewActivityValue,
  handleAddActivity,
  handleDeleteActivity,
}) {
  return (
    <>
      <label htmlFor="activity">Activities</label>
      <ul aria-label="Current activities">
        {currentActivities.map((activity, index) => (
          <li key={index}>
            {activity}
            <button type="button" onClick={() => handleDeleteActivity(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <textarea
        value={newActivityValue}
        onChange={(event) => setNewActivityValue(event.target.value)}
        name="activity"
        id="activity"
        cols="30"
        rows="10"
      ></textarea>
      <button type="button" onClick={handleAddActivity}>
        Add activity
      </button>
    </>
  );
}

export default ActivitiesInput;