export class Img {
    
    constructor(id, name, desc, width, height, src, likes, created_at, url_full, download, selector) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.width = width;
        this.height = height;
        this.src = src;
        this.likes = likes;
        this.created_at = created_at;
        this.url_full = url_full;
        this.download = download;
        this.selector = selector;
    }

    setFav() {
        this.favorites = true;
    }

    unsetFav() {
        this.favorites = false;
    }

    toJson() {
        return {
            'id': this.id,
            'description': this.desc || '',
            'height': this.height,
            'width': this.width,
            'likes': this.likes,
            'created_at': this.created_at,
            'alt_description': this.name,
            'urls': {
                'raw': this.src,
                'full': this.url_full
            },
            'links': {
                'download': this.download
            }
            
        }
    }
}