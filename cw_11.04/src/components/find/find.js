import React, {useContext, useRef} from "react";
import {ProductContext} from '../../App';
import {useLocation, useNavigate} from "react-router-dom";

function FindData(){
    const {dataFind, setDataFind} = useContext(ProductContext);
    const inputRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();

    function handleFind(e){
        e.preventDefault();
        let findText = inputRef.current.value;
        console.log(findText);
        let regFind = new RegExp(findText.toLowerCase());
        if (findText.length > 0) {
            setDataFind([...dataFind.filter(el => {
                console.log(el.title.toLowerCase())
                return regFind.test(el.title.toLowerCase())
        })])
        }else{
            setDataFind([])
        }
        if(location.pathname !== "/catalog"){
            navigate("/catalog")
        }
        // console.log(navigate);
        // console.log(location);
    }

    return (
        <form action="" onSubmit={handleFind}>
            <input ref={inputRef} type="text" placeholder='Поиск по каталогу'/>
            <button type='submit'>Поиск</button>
        </form>
    )
}

export default FindData;