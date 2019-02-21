// Catch unhandled errors
function handleErrors(error, req, res, next) {
  console.log(error.stack)
  res.status(500).send({ message: 'Something went wrong' })
}

module.exports = handleErrors