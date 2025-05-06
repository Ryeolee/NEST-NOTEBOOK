import { Injectable } from '@nestjs/common';
import { getWords } from './dao/word.dao';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}
  async getWords() {
    const words = await getWords(this.configService);
    return words;
  }
}
