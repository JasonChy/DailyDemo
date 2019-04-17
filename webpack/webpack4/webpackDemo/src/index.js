import _ from 'lodash';
import $ from 'jquery';

const dom = $('<div>');
dom.html(_.join([ 'Hello ', 'World' ], '--'));
$('body').append(dom);
