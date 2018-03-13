import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { conversion } from './romnum';

$(document).ready(function(){
  $('#conversion-form').submit(function() {
    var inputNum = $("#input-number").val();
    console.log(inputNum);

    $('#result').show();
    $('#convertedNum').text(conversion(inputNum));
    return false;
  });
});
