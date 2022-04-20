import React from 'react'
import './ItemList.css'

const Item = ({ item, onClick }) => {
    return (
        <div className='mb-4 item' onClick={() => onClick(item)}>
            <img src={item.url} alt="" width="100px" height="100px" />
        </div>
    )
}

export default Item;