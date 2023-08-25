
const getCroppedImages = (url : string) => {
    if (!url) return null;
    const target = 'media/';
    const index = url.indexOf(target) + target.length; 
    const newurl = url.slice(0,index) + 'crop/600/400/' + url.slice(index);

    return newurl;
}

export default getCroppedImages;