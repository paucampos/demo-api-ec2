const checkSession = (req, res, next) => {
  const headerAuth = req.headers.authorization || '';
  // Bearer 1q2w3e4r
  const token = headerAuth.split(' ').pop() // 1q2w3e4r
  if(!token) {
    res.status(401);
    res.send({ error: 'No tienes credenciales validas'});
  } else {
    next();
  }
}

module.exports = { checkSession }