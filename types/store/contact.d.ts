/*
 * Project: ZilPay-wallet
 * Author: Rinat(lich666dead)
 * -----
 * Modified By: the developer formerly known as Rinat(lich666dead) at <lich666black@gmail.com>
 * -----
 * Copyright (c) 2020 ZilPay
 */

import { ContactTypes } from 'src/config/account-type';

export interface Contact {
  name: string;
  address: string;
  type: ContactTypes;
}
