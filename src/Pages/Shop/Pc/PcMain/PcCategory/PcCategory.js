import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { accessories } from '../../../../../data/data';
import PcItems from '../../PcItems/PcItems';
import styles from './PcCategory.module.css';

const PcCategory = () => {

    const params = useParams();

    console.log(params);

    let dir = null;

    const item = Object.values(accessories[params.deviceId]).map((item, index) => {
        dir = `/${params.queryId}/${params.deviceId}/${params.itemId}/${params.model}/${item.title}/inquiry`;
        return <Link key={index} to={dir}>
            <PcItems key={item}
                     img={item.img} 
                     items={item.title} />
        </Link>
    })
    
    return (
        <div className={styles.Main}>
            {params.deviceId === 'pc' ? <h2>Shop By Category</h2> : null}
            
            <div className={styles.Shop}>
                {item}
            </div>
        </div>
    )
}


export default PcCategory;
