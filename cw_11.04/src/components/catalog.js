import React, {useContext, useEffect} from "react";
import {ProductPreview} from "./product";
import './catalog.css';
import {ProductContext} from '../App';
import usePagination from "./psgination/pgination";

function Catalog(props){
    const {dataFind} = useContext(ProductContext);
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
        count: dataFind.length,
    })

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

    useEffect(() =>{
        console.log(dataFind)
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
            <div className="container-page">
                {dataFind.slice(firstContentIndex, lastContentIndex).map((product, index) =>{
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