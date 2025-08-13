
export const validateCartItem = (item) =>{
    if(!item.id && item.id !== 0) throw new Error(`제품은 구분아이디가 필요합니다. :${item.id}`); 
    if(!item.name) throw new Error(`제품에 이름이 필요합니다. :${item.name}`); 
    if(!item.price && item.price !== 0) throw new Error(`제품 가격이 정확하지 않습니다. :${item.price}`); 
    if(!item.quantity || item.quantity < 1) throw new Error(`최소 수량이 선택되어야 합니다. :${item.quantity}`); 
    if(!item.selectedSize) throw new Error(`사이즈를 선택해야 합니다. :${item.selectedSize}`); 
}

export const calculateItemTotal = (item) =>{
    const price = Number(item.discountPrice || item.price) || 0;
    return price*(item.quantity || 1);
}

export const calculateCartTotal = (items) =>{
    if(!Array.isArray(items)){ return 0; }
    return items.reduce((total,item)=> total+calculateCartTotal(item), 0);
}