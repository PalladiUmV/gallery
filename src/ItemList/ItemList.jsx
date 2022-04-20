import React from 'react'
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import './ItemList.css'
import Item from './Item';
import { useNavigate } from "react-router-dom";


const MainItems = () => {
    const data = useSelector((state) => state.data)
    const loading = useSelector((state) => state.loading)
    const navigate = useNavigate()
    return (
        <div className="wrapper">
            {
                loading ? <CircularProgress /> :
                    data.map(item =>
                        <Item onClick={(item) => navigate('/' + item.id)} key={item.title} item={item} className="item" />
                    )
            }
        </div>
    )
}

export default MainItems;
