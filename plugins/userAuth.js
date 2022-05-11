export default (context) => {
  if(process.client){
    context.app.router.beforeEach( (to, from, next) => {
      next();
    })
  }
};