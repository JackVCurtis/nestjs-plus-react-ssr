import { LandingData } from 'interfaces/LandingData';
import Landing from '../app/pages/Landing';
import { Page, PageController } from './page';

@PageController()
export class AppController {
  constructor() {}

  @Page('/', Landing)
  getLanding(): LandingData {
    return { greeting: 'Wassup' };
  }

  @Page('/espanol', Landing)
  getSpanishLanding(): LandingData {
    return { greeting: 'Hola' };
  }
}
