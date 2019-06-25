import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default class WebshopBasketController extends Controller {
  @service basket

  @action
  removeOrderLine(offering, amount) {
    this.basket.removeOffer( offering, amount );
  }
}
