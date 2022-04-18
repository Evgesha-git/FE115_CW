import { useState } from 'react';

function usePagination({contentPerPage, count}){
    const [page, setPage] = useState(1);
    const pageCount = Math.ceil(count / contentPerPage);
    const lastContentIndex = page * contentPerPage;
    const firstContentIndex = lastContentIndex - contentPerPage;

    function changePage(direction){
        setPage((state) => {
            if (direction){
                if (state === pageCount){
                    return state;
                }
                return state + 1;
            }else{
                if (state === 1){
                    return state;
                }
                return state - 1;
            }
        })
    }

    function setPageSalfe(num){
        if (num > pageCount){
            setPage(pageCount);
        }else if (num < 1){
            setPage(1);
        }else{
            setPage(num);
        }
    }

    return {
        totalPage: pageCount,
        nextPage: () => changePage(true),
        prevPage: () => changePage(false),
        setPage: setPageSalfe,
        firstContentIndex,
        lastContentIndex,
        page,
    };
}

export default usePagination;