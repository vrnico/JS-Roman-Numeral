import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Romnum} from './romnum';

$(document).ready(function(){
  var romnum = new Romnum(4);
  return romnum;
});
