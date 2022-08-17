function Settings(){

const URL = "https://ca1.giggga.dk/tomcat/x22/"

function getUrl() {
    return URL;
}

return{
    getUrl
}
}
const settings = Settings();
export default settings;