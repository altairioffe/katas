let talkingCalendar = function (date) {
  let suffix;
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  date = new Date(date)
  let month = months[date.getMonth()]
  let day = date.getUTCDate();
  let year = date.getFullYear();
  switch (day) {
    case 1 || 21 || 31:
      suffix = 'st';
      break;
    case 02 || 22:
      suffix = 'nd';
      break;
    case 03 || 23:
      break;
    default:
      suffix = 'th';
  }
  return `${month} ${day}${suffix}, ${year}`
}
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));