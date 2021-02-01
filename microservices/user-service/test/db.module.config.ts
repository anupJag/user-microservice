import { MongooseModule } from '@nestjs/mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

export default () => {
  return MongooseModule.forRootAsync({
    useFactory: async () => {
      const mongodInstance = new MongoMemoryServer();
      const uri = await mongodInstance.getConnectionString();
      return { uri };
    },
  });
};
