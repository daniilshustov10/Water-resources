export default function dateFilter(allDay, date, time) {
    let dd = date.getDate()
    if (dd < 10) dd = '0' + dd
  
    let mm = date.getMonth() + 1
    if (mm < 10) mm = '0' + mm
  
    let yyyy = date.getFullYear()

    return allDay ? `${yyyy}-${mm}-${dd}` : `${yyyy}-${mm}-${dd}T${time}`
}