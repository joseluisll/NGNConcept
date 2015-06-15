/**
 * Created by Jose Luis on 15/06/2015.
 */

module NGNUmbrella {
    class mainApp{
        private _version: string;
        private _name:string;

        constructor() {
            this._version="0.1";
            this._name="NGNUmbrellaApp";
        }

        getVersion() {
            return this._version;
        }
    }
}