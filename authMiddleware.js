const isAuthenticated = (req, res, next) => {
  // Check if the user is authenticated
  const isAuthenticated = checkUserAuthentication(); // Implement your own authentication logic here

  if (isAuthenticated) {
    // User is authenticated, continue to the next middleware or route handler
    next();
  } else {
    // User is not authenticated, send an error response
    res.status(401).json({ error: "Unauthorized" });
  }
};
