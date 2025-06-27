
import { Country } from './types';
import { netherlands } from './destinations/netherlands';
import { japan } from './destinations/japan';
import { australia } from './destinations/australia';
import { unitedKingdom } from './destinations/united-kingdom';
import { germany } from './destinations/germany';
import { unitedStates } from './destinations/united-states';
import { singapore } from './destinations/singapore';

export const destinations: Country[] = [
  netherlands,
  japan,
  australia,
  unitedKingdom,
  germany,
  unitedStates,
  singapore
];

export { destinations as countries };
