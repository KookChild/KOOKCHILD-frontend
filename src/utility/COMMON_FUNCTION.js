export const getDaysDifference = (startTime, endTime) => {
  const startDate = new Date(startTime)
  const endDate = new Date(endTime)
  const timeDifference = endDate - startDate

  const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24))

  return daysLeft
}
export const formattedDate = data => {
  const date = new Date(data)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0') // Adding 1 because months are zero-based
  const day = String(date.getDate()).padStart(2, '0')

  const formattedDate = `${year}-${month}-${day}`
  return formattedDate
}
