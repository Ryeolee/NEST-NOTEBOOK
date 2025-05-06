import { Injectable } from '@nestjs/common';
import { getWords } from './dao/word.dao';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}
  async getWords(): Promise<string> {
    const words = await getWords(this.configService);
    return 'Hello World!';
  }
}
