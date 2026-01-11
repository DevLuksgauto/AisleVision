import { PrismaService } from './prisma.service';

describe('PrismaService should: ', () => {
  let service: PrismaService;
  let connectSpy: jest.SpyInstance<Promise<void>, []>;

  beforeEach(() => {
    service = new PrismaService();
    connectSpy = jest.spyOn(service, '$connect').mockResolvedValue(undefined);
  });

  it('call $connect on onModuleInit', async () => {
    await service.onModuleInit();
    expect(connectSpy).toHaveBeenCalled();
  });
});
