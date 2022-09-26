exports.get404 = (req, res, next) => {
  res.status(404).render("404", 
  // add path:"" to help define 404 route
  { pageTitle: "Page Not Found!", path:"/404" });  
};
