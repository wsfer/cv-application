import { dateToMonthYear } from '../utils/dates';
import Edit from '../assets/edit.svg';
import Delete from '../assets/delete.svg';
import '../styles/FormSavedData.css';

function Data({ type, obj }) {
  if (type === 'experience') {
    const { title, company, start, end } = obj;
    const startDate = dateToMonthYear(start);
    const endDate = end ? dateToMonthYear(end) : 'present';
    return (
      <p className="saved-data__data">
        <span className="form__bold-text">{title}</span>, {company} -{' '}
        {startDate} - {endDate}
      </p>
    );
  }

  if (type === 'projects') {
    return (
      <p className="saved-data__data">
        <span className="form__bold-text">{obj.name}</span>
      </p>
    );
  }

  if (type === 'education') {
    const { name, location } = obj;
    return (
      <p className="saved-data__data">
        <span className="form__bold-text">{name}</span> - {location}
      </p>
    );
  }
}

function FormSavedData({ type, data, newData, editData, deleteData }) {
  return (
    <section className="form__saved-data saved-data">
      <div className="saved-data__wrapper">
        <h3 className="saved-data__title">Current {type}</h3>
        <button
          className="saved-data__button button"
          type="button"
          onClick={newData}
        >
          New
        </button>
      </div>
      {data.length > 0 ? (
        <ul className="saved-data__list">
          {data.map((obj, index) => {
            return (
              <li className="saved-data__list-item" key={obj.id}>
                <Data type={type} obj={obj} />
                <div className="saved-data__buttons">
                  <button
                    className="saved-data__icon-button"
                    aria-label="Edit"
                    type="button"
                    onClick={() => editData(index)}
                  >
                    <img src={Edit} alt="Edit" />
                  </button>
                  <button
                    className="saved-data__icon-button"
                    aria-label="Delete"
                    type="button"
                    onClick={() => deleteData(index)}
                  >
                    <img src={Delete} alt="Delete" />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Empty</p>
      )}
    </section>
  );
}

export default FormSavedData;
