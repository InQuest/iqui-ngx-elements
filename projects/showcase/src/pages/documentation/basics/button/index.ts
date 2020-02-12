// Button component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';

// Import module registration service instance
import { register } from '../register';

// Showcase component
@Component({
  selector:     'iqui-button-showcase',
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class ButtonShowcaseComponent {

  // Playground attribute values
  public attributes = {
    disabled: [false, true],
    class:    '',
    ngClass:  {},
    size:     ['sm', 'lg', ''],
    theme:    ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark', 'link', ''],
    href:     'https://example.com',
    target:   ['_blank', '_self', '']
  };

  // Playground content
  public content = 'Button content';

}

// Register declarations to module
register.registerDeclarationAndExport(ButtonShowcaseComponent);