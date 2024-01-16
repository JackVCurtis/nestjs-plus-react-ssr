import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('getLanding', () => {
    it('returns an American greeting',async () => {
      expect(await appController.getLanding()).toEqual({greeting: 'Wassup'})
    })
  })

  describe('getSpanishLanding', () => {
    it('returns a Spanish greeting',async () => {
      expect(await appController.getSpanishLanding()).toEqual({greeting: 'Hola'})
    })  
  })
});
