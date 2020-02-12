// Tooltip component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';

// Import module registration service instance
import { register } from '../register';

// Showcase component
@Component({
  selector:     'iqui-tooltip-showcase',
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class TooltipShowcaseComponent {

  // Playground attribute values
  public attributes = {
    iquiTooltip:                'Tooltip content',
    iquiTooltipPosition:        [
                                  'auto',
                                  'bottom', 'bottom center', 'bottom left', 'bottom right',
                                  'right', 'right center', 'right top', 'right bottom',
                                  'left', 'left center', 'left top', 'left bottom',
                                  'top', 'top center', 'top left', 'top right'
                                ],
    iquiTooltipShowOnFocus:     [true, false],
    iquiTooltipShowOnHover:     [true, false],
    iquiTooltipStayInViewport:  [true, false]
  };

  // Playground content
  public content = 'Host component content';

}

// Register declarations to module
register.registerDeclarationAndExport(TooltipShowcaseComponent);