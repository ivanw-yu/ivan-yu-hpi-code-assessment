export function formatDate(date){
  var dateString = new Date(date).toString();
  return dateString;
  //return dateString.substring(0, dateString.lastIndexOf(":"));
}
