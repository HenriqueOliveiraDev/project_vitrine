import { Module } from '@nestjs/common';
import { databaseProviders } from './connection.database'

@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})
export class ConnectionModule { }
