function App(){
    const [count, setCount] = React.useState(0);

    console.log('Function component create');

    function clickHandler(){
        let value = count;
        setCount(++value);
    }

    React.useEffect(() => {
        console.log('Function component')
    });
    return (
        <>
            <div>Function component</div>
            <button onClick={clickHandler}>Add</button> {count}
        </>
    );
}

class Test extends React.Component{

    componentDidMount(){
        console.log('Component mount')
    }

    componentWillUnmount(){
        console.log('Component unmount')
    }

    render(){
        return (
            <div>Test</div>
        )
    }
}

class App2 extends React.Component{
    constructor() {
        super();
        console.log('Class component create');
        this.state = {
            count: 0,
            test: null,
        }
    }

    clickHandler(){
        let value = this.state.count
        if (value != 4) {
            this.setState({
                count: ++value
            })
        }else{
            this.setState({
                count: ++value,
                test: <Test/>
            })
        }
        if(value == 9){
            this.setState({
                count: 0,
                test: null
            })
        }
    }

    componentDidMount(){
        // console.log('Class component');
    }

    componentDidUpdate(){
        // console.log('Class component update');
    }

    render(){
        return (
            <>
                <div>Class component</div>
                <button onClick={() => this.clickHandler()}>Add</button> {this.state.count}
                {this.state.test}
            </>
        );
    }
}

ReactDOM.render(
    <>
        <App/>
        <App2/>
    </>,
    document.querySelector('#app')
)

// rest, spread

function f1(a, b, c){
    console.log(a, b, c);
    console.log(arguments);
}

f1(1, 2, 'rer', 4732, 'dfs', 565);

const f2 = (a, b, c, ...arg) => {
    console.log(a, b, c);
    console.log(arg);
}

f2(1, 2, 'rer', 4732, 'dfs', 565);

//----------------------
// Деструктуризация
let arr = [1, 2, 3, () => alert('f3')]
const [a, b, c, f3] = arr;

console.log(a);
console.log(b);
console.log(c);
// f3();

let obj ={
    a2: 1,
    b2: 2,
    f4: () => alert('f4')
}

const {b2: x, f4: x2} = obj;

console.log(x);
// x2();

//--------------


let arr2 = [1, 2, 3]
let arr3 = [4, 5, 6]
let arr4 = [0, ...arr2, ...arr3]
console.log(arr4);

let obj2 = ({...obj, c2: 5});

console.log(obj2);

let arr5 = [1, 2, 3, 4];
let arr6 = arr5;
let arr7 = [...arr5];

arr5[2] = 10;

console.log(arr5);
console.log(arr6);
console.log(arr7);