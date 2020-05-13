import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CriptographyService {
  async genPassword(password: String): Promise<String> {
    return await this.encodePassword(password, await this.genSalt());
  }

  private async encodePassword(password: String, salt: String): Promise<String> {
    return await bcrypt.hash(password, salt);
  }

  private async genSalt(): Promise<String> {
    return await bcrypt.genSalt();
  }

  async compare(plainPassword: String, hashPassword: String): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hashPassword);
  }
}