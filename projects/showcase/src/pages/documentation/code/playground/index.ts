// Button component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { FunctionalModule, BasicsModule, FormModule, CodeModule } from '../../../../../../iqui-ngx-elements/src';

// Showcase component
@Component({
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class PlaygroundShowcaseComponent {

  // Expose modules needed to render syntax
  public CodeModule = CodeModule;

  // Playground context
  public context = {
    Title:        'Demo in a Demo',
    Class:        '',
    NgClass:      {},
    Syntax:       '<div [class]="context.class"> I do declare: "{{context.message}}" </div>',
    Context:      {
                    class: 'card p-3',
                    message: 'HelloWorld!'
                  },
    Module:       [CodeModule, FunctionalModule, BasicsModule, FormModule]
  };

}