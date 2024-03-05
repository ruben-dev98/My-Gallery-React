const initValues = () => {
        const local = localStorage.getItem('favs') !== null ? JSON.parse(localStorage.getItem('favs')) : [];
        const initialTags = [];
        const items = 20
        const rest_total_pages_per_data = local.length % items;
        const total_pages_per_data = parseInt(local.length / items.toFixed(0));
        const initialPages = (rest_total_pages_per_data === 0 || rest_total_pages_per_data >= 10) && local.length !== 0
            ? total_pages_per_data : total_pages_per_data + 1;
        if (local.length > 0) {
            local.forEach((img) => {
                img.tags.forEach((tag) => {
                    const indexTag = initialTags.findIndex((tag_fav) => tag_fav.tag === tag);
                    if (indexTag !== -1) {
                        initialTags[indexTag].count += 1;
                    } else {
                        initialTags.push({ tag: tag, count: 1 });
                    }
                })
            });
        }
        return {
            'initData': local,
            'initTags': initialTags,
            'initItems': items,
            'initTotal_pages': initialPages
        }
}

export const {initData, initTags, initItems, initTotal_pages} = initValues;