function dateToMonthYear(date) {
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  return `${month} ${year}`;
}

function dateToMonthInput(date) {
  const month = date.toLocaleString('default', { month: '2-digit' });
  const year = date.getFullYear();
  return `${year}-${month}`;
}

export { dateToMonthYear, dateToMonthInput };
