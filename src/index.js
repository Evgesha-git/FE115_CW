import Post from '@component/Post';
import './style/index.css';
import WebpackLogo from './image/webpack-image';
import * as $ from 'jquery';

const post = new Post('Webpack post', WebpackLogo);
console.log('POST2', post.toString())

$('pre').html(post.toString())

