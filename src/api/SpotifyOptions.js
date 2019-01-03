import $ from 'jquery';
const REFRESH_TOKEN = 'AQD0a1X4vkBoA1tkweUL8aK37u7JJ-ai9caE6wjFQiNzhxTew4dZi6F0PSgyw4PRJpR-W1t6UdBlXyO5FrFwbaFfHfiUaz4cSZMYzIlNt2YquTtiUJAzjLhwBAjhXiXQ64st5w';
//lucho 'AQA2Mdh_njAeAUYpKL-DZeh9MVHUhWTb06yiIaRfIcpjyfLQJcfAmsrh4_9OKhmcCqx6NrINUMdNzuABJ3YtC7Q6GWPW0qogQgYa_DZL7WsUDoPu5o_MobTrS0JA7bbIlqkY_w'
class SpotifyOptions {
    constructor() {
        this.options = {
            method: 'GET',
            mode: 'cors',
            headers: '',
            cache: 'default'
        }
        this.refreshToken();
        this.refreshTokenInterval();
    }

    getLocalStgOpts() {
        return localStorage.spotifyOptions ?
            JSON.parse(localStorage.getItem('spotifyOptions')) : ''
    }

    refreshToken() {
        let _self = this;
        const url = 'http://localhost:8888/refresh_token';
        return $.ajax({
            url,
            data: {
                'refresh_token': REFRESH_TOKEN
            }
        }).done(function (data) {
            _self.options.headers = {
                'Authorization': 'Bearer ' + data.access_token
            }
            localStorage.setItem("spotifyOptions", JSON.stringify(_self.options));
        });
    }

    refreshTokenInterval(time = 1000 * 60 * 30) {
        let _self = this;
        setInterval(function () {
            return _self.refreshToken();
        }, time);
    }
}

export default SpotifyOptions;