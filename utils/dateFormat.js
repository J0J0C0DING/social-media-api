const { DateTime } = require('luxon');

const formatDate = function (date) {
  return date.toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY);
};

module.exports = formatDate;
