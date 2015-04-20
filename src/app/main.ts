import WebApplication = require('mayhem/WebApplication');

var app:WebApplication = new WebApplication({
  name: 'Test App',
  components: {
    router: {
      routes: {
        'index': {
          model: 'app/viewModels/Index',
          path: 'index',
          view: 'app/views/Index.html'
        }
      }
    }
  }
});
app.run().otherwise(function (error:Error):void {
  console.log('app error', error);
});

export = app;
