const getNextIndex = (index, array) => (
  index + 1 >= array.length ? 0 : index + 1
)

export default getNextIndex
