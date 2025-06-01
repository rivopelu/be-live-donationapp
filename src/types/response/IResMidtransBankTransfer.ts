export interface IResMidtransBankTransfer {
  status_code: string;
  status_message: string;
  transaction_id: string;
  order_id: string;
  merchant_id: string;
  gross_amount: string;
  currency: string;
  payment_type: string;
  transaction_time: string;
  transaction_status: string;
  va_numbers: { bank: string; va_number: string }[];
  fraud_status: string;
}
