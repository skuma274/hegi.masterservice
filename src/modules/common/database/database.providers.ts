import { DatabaseService } from './database.service';
import { TYPEORM } from '../../../constants';
import { typOrmConnect } from './database.connect';

export const databaseProviders = [
  {
    provide: TYPEORM,
    useFactory: typOrmConnect,
    inject: [DatabaseService],
  },
];
