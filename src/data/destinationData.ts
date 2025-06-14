
import { Country } from './types';
import { netherlands } from './destinations/netherlands';
import { japan } from './destinations/japan';
import { australia } from './destinations/australia';
import { unitedKingdom } from './destinations/united-kingdom';
import { germany } from './destinations/germany';
import { unitedStates } from './destinations/united-states';

export const destinations: Country[] = [
  netherlands,
  japan,
  australia,
  unitedKingdom,
  germany,
  unitedStates
];

export { destinations as countries };
