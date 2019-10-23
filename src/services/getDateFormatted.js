export default  function getDateFormatted (date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
}).format(new Date(date))
}