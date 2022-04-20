import React from 'react'
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import './ItemList.css'
import Item from './Item';
const MainItems = () => {
    const data = useSelector((state) => state.data)
    const loading = useSelector((state) => state.loading)
    return (
        <div className="wrapper">
            {
                loading ? <CircularProgress /> :
                    data.map(item =>
                        <Item key={item.title} item={item} />


                    )
            }
        </div>
    )
}

export default MainItems;
