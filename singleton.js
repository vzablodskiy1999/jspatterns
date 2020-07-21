//Check instance of class every time we create the same.

class ProxyConnection {
    constructor(ip) {
        if (ProxyConnection.connected) {
            return ProxyConnection.instance;
        }

        ProxyConnection.instance = this;
        ProxyConnection.connected = true;
        this.ip = ip;
    }

    logIp () {
        console.log(this.ip);
    }
}

const ukrainianIp = new ProxyConnection("12.13.14.51");
ukrainianIp.logIp();
const polishIp = new ProxyConnection("13.12.15.17");
polishIp.logIp();