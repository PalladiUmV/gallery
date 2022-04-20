import { CircularProgress } from '@mui/material';
import React, { useEffect } from 'react'
import { Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


const ItemPage = () => {
    const params = useParams()
    const navigate = useNavigate()
    const picture = useSelector(state => state.picture[0])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({
            type: "GET_PICTURE",
            payload: params.id
        })
    }, [])

    return (
        <Stack gap={2} className="col-md-5 mx-auto align-items-center">
            {
                picture ?
                    <>
                        <h1> Страница фото c id: {picture?.id} </h1>
                        <div>
                            <span className="me-2 text-danger">Title: </span> {picture?.title}
                        </div>
                        <div>
                            <span className="m-2 text-danger">URL: </span>{picture?.url}
                        </div>
                        <div>
                            <img src={picture?.url} alt="" width="100px" height="100px" />
                        </div>
                    </>
                    : <CircularProgress />
            }
            <button onClick={() => navigate('/')}>Назад</button>
        </Stack >
    )
}

export default ItemPage