module.exports = () => {
    const getParse = (str) => {
        let params = {};
        str.split('&').map( kv => {
            kv = kv.split('=');
            params[kv[0]] = kv[1];
        });
        return params;
    }
    
    const postParse = (str) => {
        str = decodeURIComponent(str)
        let [data, param] = str.split("=")
        return JSON.parse(param);
    }

    return {
        getParse: getParse,
        postParse: postParse
    }
}