let request = new XMLHttpRequest();

class ajax{
    constructor(url, type, data=null){
        this.url = url;
        this.type = type;
        this.data = data;
        request.open(this.type, this.url)
    }
}