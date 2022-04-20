import React from 'react'

const Item = ({ item }) => {
    return (
        <div className='mb-4'>
            <img src={item.url} alt="" width="100px" height="100px" />
        </div>
    )
}

export default Item