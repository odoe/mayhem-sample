var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports"], function (require, exports) {
    var Index = (function (_super) {
        __extends(Index, _super);
        function Index() {
            _super.apply(this, arguments);
        }
        Index.prototype._textGetter = function () {
            return 'Index View';
        };
        return Index;
    })(Observable);
    return Index;
});
//# sourceMappingURL=index.js.map