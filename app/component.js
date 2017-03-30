import Backbone from 'backbone';
import Ractive from 'ractive';
import backboneAdaptor from 'ractive-adaptors-backbone';
import $ from 'jquery';

class Component {

  constructor(config) {
    backboneAdaptor.Backbone = Backbone;
    this.element = config.el;
    this.template = config.template;
    this.data = config.data;
  }

  load() {

    let self = this;

    $.get( this.template ).done( function ( result ) {
      let ractive = new Ractive({
        el: 'main',
        template: result,
        data: self.data,
        adapt: [ backboneAdaptor ]
      });

      self.done(ractive);
    }).fail( function (e) {
      console.log('FAILED', e);

      self.fail(e);
    });

  }

  done(ractive) {
    // Override this to add custom behaviour on load done
  }

  fail(e) {
    console.log('FAILED', e);
    // Override this to add custom behaviour on load error
  }

}

export default Component;