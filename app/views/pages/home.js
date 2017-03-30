import Component from '../../component';
import user from './home.model';

const config = {
  template: '/app/views/pages/home.html',
  data: {
    user: user
  }
};

// Define and load the component.
class HomePage extends Component {

  constructor(params) {
    super(Object.assign(config, params));
  }

  done(home) {
    let html = home.toHTML();
    console.log('RETURNING', html);

    // If you interact with the model, the view will change
    user.set( 'name', 'world' );

    setTimeout(function () {
      user.set( 'name', 'everybody (Changed after initialising the template)' );
    }, 1000);

    home.on( 'addToItems', function ( event ) {
      console.log('ADD NEW ITEM', event);
      user.set( 'name', 'adder (User is adding new items' );
      user.addNewItem();
    });

    home.on( 'removeFromItems', function ( event, item ) {
      console.log('REMOVE', item);
      user.set( 'name', 'remover (User is removing item ' + 'ITEM' );
      user.removeItem(item);
    });
  }

  error(e) {
    console.log('ERROR CAN HANDLE', e);
  }
}

export default HomePage;