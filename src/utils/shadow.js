export default Shadow = (DEPTH, COLOR) => {
  return {
    shadowColor: COLOR,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

    elevation: 1,
  }
}