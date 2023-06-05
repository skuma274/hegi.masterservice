import { DatabaseService } from './database.service';
import { DataSource } from 'typeorm';

export const typOrmConnect = async (databaseService: DatabaseService): Promise<DataSource> => {
  const dataSource = new DataSource(databaseService.typeOrmConfig);
  return dataSource.initialize();
};
