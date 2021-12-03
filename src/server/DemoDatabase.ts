import Dexie from 'dexie';
import IDBExportImport from 'indexeddb-export-import';
import dump from './dump.json';

class DemoDatabase extends Dexie {
  static async fill(db: IDBDatabase): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      IDBExportImport.clearDatabase(db, (err: unknown) => {
        if (err) return reject(err);
        IDBExportImport.importFromJsonString(db, JSON.stringify(dump), (err: unknown) => {
          return err ? reject(err) : resolve();
        });
      });
    });
  }

  customerPortalSettings: Dexie.Table<any, number>;

  cartIncludeTemplates: Dexie.Table<any, number>;

  customerAttributes: Dexie.Table<any, number>;

  customerAddresses: Dexie.Table<any, number>;

  checkoutTemplates: Dexie.Table<any, number>;

  receiptTemplates: Dexie.Table<any, number>;

  paymentMethods: Dexie.Table<any, number>;

  emailTemplates: Dexie.Table<any, number>;

  subscriptions: Dexie.Table<any, number>;

  cartTemplates: Dexie.Table<any, number>;

  appliedTaxes: Dexie.Table<any, number>;

  transactions: Dexie.Table<any, number>;

  errorEntries: Dexie.Table<any, number>;

  customFields: Dexie.Table<any, number>;

  customers: Dexie.Table<any, number>;

  discounts: Dexie.Table<any, number>;

  payments: Dexie.Table<any, number>;

  stores: Dexie.Table<any, number>;

  items: Dexie.Table<any, number>;

  carts: Dexie.Table<any, number>;

  users: Dexie.Table<any, number>;

  taxes: Dexie.Table<any, number>;

  constructor() {
    super('foxy_demo_db');

    this.version(9).stores({
      customer_portal_settings: 'store',
      cart_include_templates: '++id,store',
      customer_attributes: '++id,customer',
      customer_addresses: '++id,customer',
      checkout_templates: '++id,store',
      receipt_templates: '++id,store',
      email_templates: '++id,store',
      payment_methods: '++id,customer',
      cart_templates: '++id,store',
      subscriptions: '++id,store,customer',
      applied_taxes: '++id,transaction',
      transactions: '++id,store,customer,subscription',
      error_entries: '++id',
      custom_fields: '++id,transaction',
      customers: '++id,store,email',
      discounts: '++id,transaction',
      payments: '++id,transaction',
      stores: '++id',
      items: '++id,cart,transaction',
      carts: '++id',
      users: '++id,store',
      taxes: '++id,store',
    });

    this.customerPortalSettings = this.table('customer_portal_settings');
    this.cartIncludeTemplates = this.table('cart_include_templates');
    this.customerAttributes = this.table('customer_attributes');
    this.checkoutTemplates = this.table('checkout_templates');
    this.customerAddresses = this.table('customer_addresses');
    this.receiptTemplates = this.table('receipt_templates');
    this.paymentMethods = this.table('payment_methods');
    this.emailTemplates = this.table('email_templates');
    this.cartTemplates = this.table('cart_templates');
    this.subscriptions = this.table('subscriptions');
    this.appliedTaxes = this.table('applied_taxes');
    this.transactions = this.table('transactions');
    this.errorEntries = this.table('error_entries');
    this.customFields = this.table('custom_fields');
    this.customers = this.table('customers');
    this.discounts = this.table('discounts');
    this.payments = this.table('payments');
    this.stores = this.table('stores');
    this.items = this.table('items');
    this.carts = this.table('carts');
    this.users = this.table('users');
    this.taxes = this.table('taxes');
  }
}

const db = new DemoDatabase();
const whenDbReady = db.open().then(() => DemoDatabase.fill(db.backendDB()));

export { db, whenDbReady, DemoDatabase };
