export const getDaysDifference = (startTime, endTime) => {
  const startDate = new Date(startTime)
  const endDate = new Date(endTime)
  const timeDifference = endDate - startDate

  const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24))

  return daysLeft
}
