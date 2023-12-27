function ActivitiesInput({
  currentActivities,
  newActivityValue,
  setNewActivityValue,
  handleAddActivity,
  handleDeleteActivity,
}) {
  return (
    <div className="input">
      <label htmlFor="activity">Activities</label>
      <ul aria-label="Current activities">
        {currentActivities.map((activity, index) => (
          <li key={index}>
            {activity}
            <button
              className="cancel-button"
              type="button"
              onClick={() => handleDeleteActivity(index)}
            >
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
      <button className="button" type="button" onClick={handleAddActivity}>
        Add activity
      </button>
    </div>
  );
}

export default ActivitiesInput;
