import log from './modules/js/log'

$(function() {
  $('body').fadeIn(500);
});

if (module.hot) {
  module.hot.accept()
}

const yo = Symbol('')

// eslint-disable-next-line
String.prototype[yo] = () => 'Yo 👋'

log(''[yo]())

