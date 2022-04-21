import React, {useContext, useEffect, useState} from "react";
import {ProductPreview} from "./product";
import './catalog.css';
import {ProductContext} from '../App';
import usePagination from "./psgination/pgination";

function Catalog(props){
    const {dataFind, setDataFind} = useContext(ProductContext);
    const [dataCatalog, setDataCatalog] = useState(dataFind)
    const {
            totalPage,
            nextPage,
            prevPage,
            setPage,
            firstContentIndex,
            lastContentIndex,
            page,
        } = usePagination({
        contentPerPage: 3,
        count: dataCatalog.length,
    });


    const category = [...new Set(dataFind.reduce((f, i) => [...f, i.category], []))];

    // function getData(){
    //     if (data.length === 0) {
    //         if (JSON.parse(localStorage.getItem('catalog')).length > 0) {
    //             setData([...JSON.parse(localStorage.getItem('catalog'))])
    //             console.log(JSON.parse(localStorage.getItem('catalog')));
    //             return;
    //         } else {
    //             fetch('https://fakestoreapi.com/products/')
    //                 .then(resp => resp.json())
    //                 .then(data => {
    //                     setData([...data])
    //                     localStorage.setItem('catalog', JSON.stringify(data));
    //
    //                 });
    //         }
    //     }
    // }

    function categoryHandler(f){
        let filterData = dataFind.filter(item => item.category === f);
        setDataCatalog(filterData);
    }

    useEffect(() =>{
        let category = "men's clothing";
        let f = [...new Set(dataFind.reduce((f, i) => [...f, i.category], []))];
        console.log(dataFind);
        console.log(f);
    })

    // getData();

    return (
        <div className='product-container'>
            <div className="pagination">
                <p className="text">
                    {page}/{totalPage}
                </p>
                <button
                    onClick={prevPage}
                    className={`page `}
                    disabled={page === 1}
                >
                    &larr;
                </button>
                {[...Array(totalPage).keys()].map(el => (
                    <button
                        onClick={() => setPage(el + 1)}
                        key={el.toString()}
                        className={`page ${page === el + 1 ? 'active' : ''}`}
                        disabled={page === el + 1}
                    >
                        {el + 1}
                    </button>

                ))}
                <button
                    onClick={nextPage}
                    className={`page`}
                    disabled={page === totalPage}
                >
                    &rarr;
                </button>
            </div>
            <div className="category">
                {category.map((item, i) => {
                    return (
                        <>
                            <input type='radio' name={`cat`} id={i} key={i.toString()} onChange={() => categoryHandler(item)}/>
                            <label htmlFor={i} key={i.toString()}>{item}</label>
                        </>
                    )
                })}
            </div>
            <div className="container-page">
                {dataCatalog.slice(firstContentIndex, lastContentIndex).map((product, index) =>{
                    return <ProductPreview
                        key={index.toString()}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        id={product.id}
                        add={props.add}
                    />
                })}
            </div>
            {/*<Outlet/>*/}
        </div>
    )
}

export default Catalog;