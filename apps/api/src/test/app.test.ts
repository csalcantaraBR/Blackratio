import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../modules/app.module';

describe('AppModule', () => {
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [AppModule],
    })
    .overrideProvider('PrismaService')
    .useValue({
      $connect: jest.fn(),
      $disconnect: jest.fn(),
    })
    .compile();
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });

  it('should have AppModule imported', () => {
    const appModule = module.get(AppModule);
    expect(appModule).toBeDefined();
  });
});
