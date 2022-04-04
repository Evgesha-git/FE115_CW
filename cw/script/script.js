/*
* 1 - Создание элементов
* 2 - отображение на страницк
* */

const main = document.createElement('main');
main.classList.add('main');
main.setAttribute('data-id', 'r7ew9rw9');
main.innerText = 'Main content';

const h2 = document.createElement('h2');
h2.innerText = 'Header';

const p = document.createElement('p');
p.innerText = 'Lorem ipsum dolor sit amet, consectetur.';

document.querySelector('#app').append(main, h2, p);

//----------------------------------------



const h2R = React.createElement('h2', null, 'Header react');
const pR = React.createElement('p', null, 'Lorem ipsum dolor sit amet, consectetur.');

const mainReact = React.createElement('name',
    {
        className: 'main class2 class3',
        'data-id': '7er98t7e9',
    },
    [
        'Main react content',
        h2R,
        pR,
        React.createElement('img', {
            src: 'https://via.placeholder.com/60',
            alt: '###',
        })
    ]);

ReactDOM.render(mainReact, document.querySelector('#app-react'));

/*
*3 - создание компонентов
* */

function Logo(){
    this.create = () => {
        this.elem = document.createElement('div');
        this.elem.classList.add('logo');
        this.elem.innerHTML = `
            <a href='#'><img src="https://via.placeholder.com/60"/>Home</a>
        `;
        return this.elem;
    }
}

const logo = new Logo().create();
document.querySelector('#app').append(logo);

function ReactLogo(){
    const logo = React.createElement('div',
        {className: 'logo'},
        React.createElement('a',
            {href: '#'},
            [
                React.createElement('img',
                    {src: 'https://via.placeholder.com/60'},
                    ),
                'Home'
            ]
            )
    )
    return logo;
}

ReactDOM.render(
    React.createElement('div', null, [mainReact, ReactLogo]),
    document.querySelector('#app-react')
);

// JSX => React

ReactDOM.render(
    <React.Fragment>
        <main className='main' data-id='y243iy423i'>
            <h2 id="title-3">Header JSX</h2>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
            <div className="logo">
                <a href="#"><img src="https://via.placeholder.com/60" alt=""/>Home</a>
            </div>
        </main>
    </React.Fragment>,
    document.querySelector('#app-react-jsx')
)

/*
* 4 - пропсы
* 5 - стейты
* 6 - события
* */

function Header(props){
    //code
    return (<header className='header'>
        Header content {props.content}, {props.a + props.b}
    </header>);
}

class Header2 extends React.Component{
    constructor(props) {
        super();
    }
    //code
    render(){
        return(
            <header className='header2'>
                Header Content {this.props.content}, {this.props.a + this.props.b}
            </header>
        )
    }
}

function Block(props){
    return <div>{props.children}</div>
}

ReactDOM.render(
    <>
        <Header content='Некоторый контент' a={12} b={6}/>
        <Header2 content='Некоторый контент' a='12' b='6'/>
        <Block>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, magni.
        </Block>
    </>,
    document.querySelector('#app-react-jsx-2')
)

/*
* 5 - стейты
* 6 - события
* */

function ButtonLike(){
    const [count, setCount] = React.useState(0);
    const [text, setText] = React.useState('')
    //onClick
    //onChange
    //onKeyUp

    const likeHandler = (event) =>{
        // alert('like');
        console.log(event);
        let value = count
        setCount(++value);
    }

    return (
        <button onClick={likeHandler}>Like {count}</button>
    )
}

class ButtonDislike extends React.Component{
    constructor() {
        super();
        this.state = {
            count: 0,
            text: ''
        };
        this.dislikeHandler = this.dislikeHandler.bind(this);
    }
    dislikeHandler(){
        console.log(this);
        // alert('Dislike');
        let value = this.state.count
        this.setState({
        count: ++value,
        });
    }

    textHandler (event){
        console.log(event);
        let value = event.target.value;
        this.setState({
            text: value,
        })
    }

    render(){
        return (
            <div>
                <button onClick={this.dislikeHandler}>Dislike {this.state.count}</button>
                <input onChange={(e) => this.textHandler(e)} type="text"/>
                <span>{this.state.text}</span>
            </div>
        )
    }
}

ReactDOM.render(
    <>
        <ButtonLike/>
        <ButtonDislike/>
    </>,
    document.querySelector('#app-react-jsx-3')
)