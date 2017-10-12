const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'


export const getImages = () =>
    fetch(`${api}/files/`)
        .then(res => res.json())
        .catch(error => {
            console.log("This is error.");
            return error;
        });

export const uploadFile = (payload) =>
//console.log(uploadFiles);
    fetch(`${api}/files/upload`, {
        method: 'POST',
        body: payload
    }).then(res => {
        return res.status;
    }).catch(error => {
            console.log("This is error");
            return error;
        });

export const listfiles= () =>
fetch(`${api}/listfiles`, {
        method: 'POST',
       // body: payload
    }).then((response) => response.json()).then((responseJson) => {
        console.log("hii its response JSon"+ responseJson);
                return responseJson;
    //}).then(res => {
        //return res.status;
    }).catch(error => {
            console.log("This is error");
            return error;
        });