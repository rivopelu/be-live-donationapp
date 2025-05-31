export enum TRANSACTION_STATUS_ENUM {
  CREATED = 'CREATED', // Disaat transaction dibuat
  WAITING_PAYMENT = 'WAITING_PAYMENT', // disaat request payment gateway
  SETTLEMENT = 'SETTLEMENT', // di saat status payment settlement
  SUCCESS = 'SUCCESS', // disaat message ke overlay di tampilkan
  CANCELED = 'CANCELED',
}
