import React from 'react';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import style from './Detail.module.css';
import { getDetail, getClean } from '../../redux/actions';
import { Link } from 'react-router-dom';



function Detail() {

    const dispatch = useDispatch();
    const { id } = useParams();  /* Obtiene la info (id) del parametro variable de la url */
    const detail = useSelector((state) => state.dogDetail) /* me subscribo al subestado dogDetail */
    // console.log(detail);

    // Cuando se monta el componente se despecha la accion para obtener el detalle 
    useEffect(() => {
        dispatch(getDetail(id))

        return () => {
            dispatch(getClean()); /* Al desmontar el componente se despacha getClean para limpiar el estado dogDetail */
        }
    }, [id])

    // console.log(id);
    return (
        <div className={style.divDet}>
            <div>
                <img src={detail?.image} alt={detail?.name} className={style.imgDetail} />
            </div>
            <div className={style.divCont}>
                <div className={style.divTxD}>
                    <h3 className={style.h3d}>Name: {detail?.name}</h3> {/*  Con ? estamos haciendo un renderizado condicional para que el codigo no se rompa en lo que carga la info de la API */}
                </div>
                <div className={style.divTxD}>
                    <h3 className={style.h3d}>Height: {detail?.height} cm</h3>
                </div>
                <div className={style.divTxD}>
                    <h3 className={style.h3d}>Weight Min: {detail?.weightMin} Kg</h3>
                </div>
                <div className={style.divTxD}>
                    <h3 className={style.h3d}>Weight Max:{detail?.weightMax} Kg</h3>
                </div>
                <div className={style.divTxD}>
                    <h3 className={style.h3d}>Temperament: {detail?.temperament}</h3>
                </div>
                <div className={style.divTxD}>
                    <h3 className={style.h3d}>Life_Span: {detail?.life_span}</h3>
                </div>

                    <Link to='/home'  className={style.linkReturn}> Home 🐾</Link>

            </div>

        </div>
    )
}

export default Detail;