import { PrismaService } from '@/prisma/prisma.service';

const shouldRun = !!process.env.DATABASE_URL;

(shouldRun ? describe : describe.skip)('PrismaService integration', () => {
  let service: PrismaService;

  beforeAll(async () => {
    service = new PrismaService();
    await service.$connect();
  });

  it('connects and can run a simple query', async () => {
    const res = await service.$queryRawUnsafe('SELECT 1 as result');
    expect(res).toBeDefined();
  });

  afterAll(async () => {
    if (service) await service.$disconnect();
  });
});
