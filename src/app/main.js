define(["require", "exports", 'mayhem/WebApplication'], function (require, exports, WebApplication) {
    var app = new WebApplication({
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
    app.run().otherwise(function (error) {
        console.log('app error', error);
    });
    return app;
});
//# sourceMappingURL=main.js.map