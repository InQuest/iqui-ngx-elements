// Collapse component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { FunctionalModule, BasicsModule, CodeModule } from '../../../../../../../iqui-ngx/src/public-api';

// Showcase component
@Component({
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class CollapseShowcaseComponent {

  // Expose modules needed to render syntax
  public modules = [FunctionalModule, BasicsModule, CodeModule];

  // Playground context
  public context = {};

}
