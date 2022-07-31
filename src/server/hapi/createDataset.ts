import { Dataset } from '../router/types';

export const createDataset: () => Dataset = () => ({
  applied_taxes: [
    {
      id: 0,
      tax_id: 0,
      store_id: 0,
      transaction_id: 0,
      rate: 8.0,
      name: 'US Sales Tax',
      amount: 1.7765,
      apply_to_handling: true,
      apply_to_shipping: true,
      is_future_tax: false,
      shipto: '',
      date_created: '2021-03-29T13:57:40-0700',
      date_modified: '2021-03-29T13:57:40-0700',
    },
  ],

  discounts: [
    {
      id: 0,
      store_id: 0,
      coupon_id: 0,
      customer_id: 0,
      coupon_code_id: 0,
      transaction_id: 0,
      code: '1WLCM',
      amount: -1,
      name: 'Welcome Bonus',
      display: '-1.00',
      is_taxable: false,
      is_future_discount: false,
      date_created: '2021-03-29T13:57:40-0700',
      date_modified: '2021-03-29T13:57:40-0700',
    },
  ],

  payments: [
    {
      id: 0,
      store_id: 0,
      transaction_id: 0,
      type: 'plastic',
      gateway_type: 'authorize',
      processor_response: 'Authorize.net Transaction ID: 2233990980',
      processor_response_details: '',
      purchase_order: '',
      cc_number_masked: 'xxxxxxxxxxxx1111',
      cc_type: 'Visa',
      cc_exp_month: '01',
      cc_exp_year: '2017',
      fraud_protection_score: 0,
      paypal_payer_id: '',
      third_party_id: '',
      amount: 20.15,
      date_created: '2015-05-21T14:22:09-0700',
      date_modified: '2015-05-21T14:22:09-0700',
    },
  ],

  error_entries: [
    {
      id: 0,
      store_id: 0,
      transaction_id: 0,
      url: 'https://serverless.foxycartdev.com/checkout',
      error_message: 'DataFeed Failed: (2) 2012-08-10 12:12:49 No data returned',
      user_agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6)',
      referrer: 'https://serverless.foxycart.test/checkout',
      ip_address: '10.0.0.1',
      ip_country: 'United States',
      post_values: '',
      get_values: '',
      hide_error: false,
      date_created: '2021-03-29T13:57:40-0700',
      date_modified: '2021-03-29T13:57:40-0700',
    },
  ],

  custom_fields: [
    {
      id: 0,
      store_id: 0,
      transaction_id: 0,
      name: 'Terms & Conditions',
      value: 'Checked',
      is_hidden: true,
      date_created: '2013-08-05T14:15:59-0700',
      date_modified: '2013-08-05T14:15:59-0700',
    },
  ],

  customer_attributes: [
    {
      id: 0,
      name: 'Hours',
      value: '9am to 5pm',
      customer_id: 0,
      visibility: 'private',
      date_created: '2013-08-05T14:15:59-0700',
      date_modified: '2013-08-05T14:15:59-0700',
    },
  ],

  item_attributes: [
    {
      id: 0,
      name: 'Color',
      value: 'Red',
      item_id: 0,
      visibility: 'private',
      date_created: '2013-08-05T14:15:59-0700',
      date_modified: '2013-08-05T14:15:59-0700',
    },
  ],

  shipment_attributes: [
    {
      id: 0,
      name: 'Color',
      value: 'Red',
      item_id: 0,
      visibility: 'private',
      date_created: '2013-08-05T14:15:59-0700',
      date_modified: '2013-08-05T14:15:59-0700',
    },
  ],

  item_options: [
    {
      id: 0,
      item_id: 0,
      store_id: 0,
      transaction_id: 0,
      name: 'Color',
      value: 'Blue',
      price_mod: 11.98,
      weight_mod: 0,
      date_created: '2012-02-29T13:55:09-0800',
      date_modified: '2012-02-29T13:55:09-0800',
    },
    {
      id: 1,
      item_id: 0,
      store_id: 0,
      transaction_id: 0,
      name: 'Box & Ribbon',
      value: 'No',
      price_mod: -1.99,
      weight_mod: -2,
      date_created: '2012-02-29T13:55:09-0800',
      date_modified: '2012-02-29T13:55:09-0800',
    },
    {
      id: 2,
      item_id: 0,
      store_id: 0,
      transaction_id: 0,
      name: 'Message',
      value: 'None',
      price_mod: 0,
      weight_mod: 0,
      date_created: '2012-02-29T13:55:09-0800',
      date_modified: '2012-02-29T13:55:09-0800',
    },
  ],

  customer_addresses: [
    {
      id: 0,
      store_id: 0,
      customer_id: 0,
      address_name: 'Example address',
      first_name: 'Sarah',
      last_name: 'Jane',
      company: 'My company',
      address1: '12345 Any Street',
      address2: '',
      city: 'Any City',
      region: 'TN',
      postal_code: '37211',
      country: 'US',
      phone: '',
      is_default_billing: true,
      is_default_shipping: false,
      ignore_address_restrictions: false,
      date_created: '2013-08-16T14:53:46-0700',
      date_modified: '2013-08-16T14:53:46-0700',
    },
    {
      id: 1,
      store_id: 0,
      customer_id: 0,
      address_name: 'Example address',
      first_name: 'Sarah',
      last_name: 'Jane',
      company: 'My company',
      address1: '12345 Any Street',
      address2: '',
      city: 'Any City',
      region: 'TN',
      postal_code: '37211',
      country: 'US',
      phone: '',
      is_default_billing: false,
      is_default_shipping: true,
      ignore_address_restrictions: false,
      date_created: '2013-08-16T14:53:46-0700',
      date_modified: '2013-08-16T14:53:46-0700',
    },
    {
      id: 2,
      store_id: 0,
      customer_id: 0,
      address_name: 'Example address',
      first_name: 'Sarah',
      last_name: 'Jane',
      company: 'My company',
      address1: '12345 Any Street',
      address2: '',
      city: 'Any City',
      region: 'TN',
      postal_code: '37211',
      country: 'US',
      phone: '',
      is_default_billing: false,
      is_default_shipping: false,
      ignore_address_restrictions: false,
      date_created: '2013-08-16T14:53:46-0700',
      date_modified: '2013-08-16T14:53:46-0700',
    },
    {
      id: 3,
      store_id: 0,
      customer_id: 0,
      address_name: 'Example address',
      first_name: 'Sarah',
      last_name: 'Jane',
      company: 'My company',
      address1: '12345 Any Street',
      address2: '',
      city: 'Any City',
      region: 'TN',
      postal_code: '37211',
      country: 'US',
      phone: '',
      is_default_billing: false,
      is_default_shipping: false,
      ignore_address_restrictions: false,
      date_created: '2013-08-16T14:53:46-0700',
      date_modified: '2013-08-16T14:53:46-0700',
    },
  ],

  email_templates: [
    {
      id: 0,
      store_id: 0,
      description: 'Email Receipt Template',
      subject: '{{ store_name }} Order ({{ order_id }})',
      content_html: '',
      content_html_url: 'https://example.com/template.html',
      content_text: '',
      content_text_url: 'https://example.com/text_template.txt',
      date_created: '2012-08-10T11:58:54-0700',
      date_modified: '2012-08-10T11:58:54-0700',
    },
  ],

  payment_methods: [
    {
      id: 0,
      customer_id: 0,
      save_cc: true,
      cc_type: 'MasterCard',
      cc_number_masked: 'xxxxxxxxxxxx1111',
      cc_exp_month: '12',
      cc_exp_year: '2020',
      date_created: '2009-02-10T21:41:51-0800',
      date_modified: '2013-08-17T17:40:22-0700',
    },
  ],

  subscriptions: [
    {
      id: 0,
      store_id: 0,
      customer_id: 0,
      last_transaction_id: 0,
      transaction_template_id: 0,
      next_transaction_date: '2021-05-19T10:58:39-0700',
      start_date: '2020-08-19T10:58:39-0700',
      end_date: null,
      frequency: '1m',
      error_message: '',
      past_due_amount: 0,
      first_failed_transaction_date: null,
      is_active: true,
      third_party_id: '',
      date_created: '2020-08-19T10:58:39-0700',
      date_modified: '2020-08-19T10:58:39-0700',
    },
  ],

  transactions: [
    {
      id: 0,
      store_id: 0,
      customer_id: 0,
      subscription_id: 0,
      is_test: true,
      is_editable: true,
      hide_transaction: false,
      data_is_fed: true,
      transaction_date: '2013-06-06T17:26:07-05:00',
      locale_code: 'en_US',
      customer_first_name: 'Test',
      customer_last_name: 'User',
      customer_tax_id: '',
      customer_email: 'testing@example.com',
      customer_ip: '10.1.248.210',
      ip_country: '',
      total_item_price: 10,
      total_tax: 1.9,
      total_shipping: 0,
      total_future_shipping: 0,
      total_order: 11.9,
      date_created: '2013-06-06T15:26:07-0700',
      date_modified: '2013-06-06T15:26:07-0700',
      currency_code: 'USD',
      currency_symbol: '$',
      status: 'completed',
    },
    {
      id: 1,
      store_id: 0,
      customer_id: 0,
      subscription_id: 0,
      is_test: true,
      is_editable: false,
      hide_transaction: false,
      data_is_fed: true,
      transaction_date: '2021-06-06T17:26:07-05:00',
      locale_code: 'en_US',
      customer_first_name: 'Test',
      customer_last_name: 'User',
      customer_tax_id: '',
      customer_email: 'testing@example.com',
      customer_ip: '10.1.248.210',
      ip_country: '',
      total_item_price: 20,
      total_tax: 1.9,
      total_shipping: 0,
      total_future_shipping: 0,
      total_order: 21.9,
      date_created: '2021-06-06T15:26:07-0700',
      date_modified: '2021-06-06T15:26:07-0700',
      currency_code: 'EUR',
      currency_symbol: '€',
      status: 'approved',
    },
  ],

  customers: [
    {
      id: 0,
      store_id: 0,
      tax_id: 'XXX-XX-XXXX',
      payment_method_id: 0,
      last_login_date: '2013-08-16T14:13:54-0700',
      first_name: 'Sally',
      last_name: 'Sims',
      email: 'sally.sims@example.com',
      password_salt: null,
      password_hash: '4443fe50df6b177ba84b78dd91f0958a',
      password_hash_type: 'md5',
      password_hash_config: null,
      forgot_password: 'blah',
      forgot_password_timestamp: '2013-08-16T14:13:54-0700',
      is_anonymous: false,
      date_created: '2013-08-16T14:13:54-0700',
      date_modified: '2013-08-16T14:13:54-0700',
    },
    {
      id: 1,
      store_id: 0,
      tax_id: 'XXX-XX-XXXX',
      payment_method_id: 0,
      last_login_date: '2013-08-16T14:13:54-0700',
      first_name: 'Jim',
      last_name: 'Tucker',
      email: 'jim.tucker@example.com',
      password_salt: null,
      password_hash: '4443fe50df6b177ba84b78dd91f0958a',
      password_hash_type: 'md5',
      password_hash_config: null,
      forgot_password: 'blah',
      forgot_password_timestamp: '2013-08-16T14:13:54-0700',
      is_anonymous: false,
      date_created: '2013-08-16T14:13:54-0700',
      date_modified: '2013-08-16T14:13:54-0700',
    },
    {
      id: 2,
      store_id: 0,
      tax_id: 'XXX-XX-XXXX',
      payment_method_id: 0,
      last_login_date: '2013-08-16T14:13:54-0700',
      first_name: 'George',
      last_name: 'Cole',
      email: 'george.cole@example.com',
      password_salt: null,
      password_hash: '4443fe50df6b177ba84b78dd91f0958a',
      password_hash_type: 'md5',
      password_hash_config: null,
      forgot_password: 'blah',
      forgot_password_timestamp: '2013-08-16T14:13:54-0700',
      is_anonymous: false,
      date_created: '2013-08-16T14:13:54-0700',
      date_modified: '2013-08-16T14:13:54-0700',
    },
    {
      id: 3,
      store_id: 0,
      tax_id: 'XXX-XX-XXXX',
      last_login_date: '2013-08-16T14:13:54-0700',
      first_name: 'Nora',
      last_name: 'Payne',
      email: 'nora.payne@example.com',
      password_salt: null,
      password_hash: '4443fe50df6b177ba84b78dd91f0958a',
      password_hash_type: 'md5',
      password_hash_config: null,
      forgot_password: 'blah',
      forgot_password_timestamp: '2013-08-16T14:13:54-0700',
      is_anonymous: false,
      date_created: '2013-08-16T14:13:54-0700',
      date_modified: '2013-08-16T14:13:54-0700',
    },
    {
      id: 4,
      store_id: 0,
      tax_id: 'XXX-XX-XXXX',
      last_login_date: '2013-08-16T14:13:54-0700',
      first_name: 'Rafael',
      last_name: 'Reyes',
      email: 'rafael.reyes@example.com',
      password_salt: null,
      password_hash: '4443fe50df6b177ba84b78dd91f0958a',
      password_hash_type: 'md5',
      password_hash_config: null,
      forgot_password: 'blah',
      forgot_password_timestamp: '2013-08-16T14:13:54-0700',
      is_anonymous: false,
      date_created: '2013-08-16T14:13:54-0700',
      date_modified: '2013-08-16T14:13:54-0700',
    },
  ],

  stores: [
    {
      id: 0,
      store_version_uri: '',
      store_name: 'Acme Corporation',
      store_domain: 'acme',
      use_remote_domain: false,
      store_url: 'https://example.com/',
      receipt_continue_url: '',
      store_email: 'example@example.com',
      from_email: 'john.doe@example.com',
      use_email_dns: false,
      bcc_on_receipt_email: true,
      smtp_config: '',
      postal_code: '37211',
      region: 'TN',
      country: 'US',
      locale_code: 'en_US',
      timezone: 'America/Los_Angeles',
      hide_currency_symbol: false,
      hide_decimal_characters: false,
      use_international_currency_symbol: true,
      language: 'english',
      logo_url: 'https://picsum.photos/64',
      checkout_type: 'default_account',
      use_webhook: false,
      webhook_url: '',
      webhook_key: '',
      use_cart_validation: false,
      use_single_sign_on: false,
      single_sign_on_url: '',
      customer_password_hash_type: 'sha256_salted_suffix',
      customer_password_hash_config: '48',
      features_multiship: false,
      products_require_expires_property: false,
      app_session_time: 0,
      shipping_address_type: 'residential',
      require_signed_shipping_rates: false,
      unified_order_entry_password: '',
      custom_display_id_config: '',
      affiliate_id: 0,
      is_maintenance_mode: false,
      is_active: false,
      first_payment_date: '2016-02-05T10:25:26-0800',
      date_created: '2016-02-05T10:25:26-0800',
      date_modified: '2016-02-05T10:25:26-0800',
    },
  ],

  items: new Array(20).fill(0).map((_, id) => ({
    id,
    cart_id: 0,
    store_id: 0,
    shipment_id: id > 9 ? 1 : 0,
    transaction_id: id > 9 ? 1 : 0,
    subscription_id: 0,
    item_category_uri: '',
    name: `Basic Product #${id}`,
    price: 10,
    quantity: Math.ceil(Math.random() * 10),
    quantity_min: 0,
    quantity_max: 0,
    weight: 5,
    code: '',
    parent_code: '',
    discount_name: '',
    discount_type: '',
    discount_details: '',
    subscription_frequency: '1m',
    subscription_start_date: '2015-04-15',
    subscription_next_transaction_date: '2022-05-12',
    subscription_end_date: null,
    is_future_line_item: false,
    shipto: 'Me',
    url: '',
    image: 'https://picsum.photos/320',
    length: 0,
    width: 0,
    height: 0,
    expires: 0,
    date_created: '2015-04-15T08:45:49-0700',
    date_modified: '2015-04-15T08:45:49-0700',
  })),

  carts: [
    {
      id: 0,
      store_id: 0,
      customer_id: 0,
      template_set_id: 0,
      customer_uri: '',
      template_set_uri: '',
      language: 'english',
      use_customer_shipping_address: true,
      billing_first_name: 'Grace',
      billing_last_name: 'Hopper',
      billing_company: '',
      billing_address1: '1234 Mulberry Dr.',
      billing_address2: '#567',
      billing_city: 'MANHATTAN',
      billing_state: 'NY',
      billing_postal_code: '10001',
      billing_country: 'US',
      billing_phone: '',
      shipping_first_name: 'test1',
      shipping_last_name: 'test2',
      shipping_company: 'test3',
      shipping_address1: 'test4',
      shipping_address2: 'test5',
      shipping_city: 'Austin',
      shipping_state: 'TX',
      shipping_postal_code: '78767',
      shipping_country: 'US',
      shipping_phone: '',
      total_item_price: 0,
      total_tax: 0,
      total_shipping: 0,
      total_future_shipping: 0,
      total_order: 0,
      date_created: '2012-02-29T13:55:09-0800',
      date_modified: '2012-02-29T13:55:09-0800',
    },
  ],

  cart_templates: [
    {
      id: 0,
      store_id: 0,
      description: 'Cart Template',
      content: '',
      content_url: 'http://example.com/cart-template',
      date_created: '2012-08-10T11:58:54-0700',
      date_modified: '2012-08-10T11:58:54-0700',
    },
  ],

  customer_portal_settings: [
    {
      id: 0,
      store_id: 0,
      session_lifespan_in_minutes: 90,
      allowed_origins: ['https://themancan.com'],
      subscriptions: {
        allow_frequency_modification: [
          {
            jsonata_query: '$contains(frequency, "m")',
            values: ['.5m', '1m', '2m'],
          },
        ],
        allow_next_date_modification: [
          {
            allowed_days: {
              days: [1, 3, 5],
              type: 'day',
            },
            disallowed_dates: ['2021-09-02', '2021-09-03', '2021-09-01'],
            jsonata_query: '$contains(frequency, "m")',
            max: '2y',
            min: '1w',
          },
        ],
      },
      sso: true,
      date_created: '2020-04-13T08:44:09-0700',
      date_modified: '2020-04-13T08:46:03-0700',
    },
  ],

  taxes: [
    {
      id: 0,
      store_id: 0,
      name: 'Beverage tax',
      type: 'region',
      country: 'US',
      region: 'TN',
      city: '',
      is_live: true,
      service_provider: 'avalara',
      apply_to_shipping: true,
      use_origin_rates: true,
      exempt_all_customer_tax_ids: true,
      rate: 1,
      date_created: '2013-08-19T10:58:39-0700',
      date_modified: '2013-08-19T10:58:39-0700',
    },
    {
      id: 1,
      store_id: 0,
      name: 'Sample tax',
      type: 'region',
      country: 'US',
      region: 'TN',
      city: '',
      is_live: true,
      service_provider: 'avalara',
      apply_to_shipping: true,
      use_origin_rates: true,
      exempt_all_customer_tax_ids: true,
      rate: 1,
      date_created: '2013-08-19T10:58:39-0700',
      date_modified: '2013-08-19T10:58:39-0700',
    },
  ],

  tax_item_categories: [],

  users: [
    {
      id: 0,
      store_id: 0,
      first_name: 'Ann',
      last_name: 'Doe',
      email: 'ann.doe@example.com',
      phone: '444-444-4444',
      affiliate_id: 0,
      is_programmer: true,
      is_front_end_developer: false,
      is_designer: false,
      is_merchant: true,
      date_created: '2007-05-23T16:09:12-0700',
      date_modified: '2013-07-10T22:37:49-0700',
    },
  ],

  template_configs: [
    {
      id: 0,
      store_id: 0,
      description: 'Template Config',
      json: '{"cart_type":"default","checkout_type":"default_account","csc_requirements":"all_cards","tos_checkbox_settings":{"usage":"none","initial_state":"unchecked","is_hidden":false,"url":""},"eu_secure_data_transfer_consent":{"usage":"required"},"newsletter_subscribe":{"usage":"none"},"analytics_config":{"usage":"none","google_analytics":{"usage":"none","account_id":"","include_on_site":false},"segment_io":{"usage":"none","account_id":""}},"colors":{"usage":"none","primary":"4D4D4D","secondary":"FFFFFF","tertiary":"FFFFFF"},"use_checkout_confirmation_window":{"usage":"none"},"supported_payment_cards":["visa","mastercard","discover","amex"],"custom_checkout_field_requirements":{"cart_controls":"enabled","coupon_entry":"enabled","billing_first_name":"required","billing_last_name":"required","billing_company":"optional","billing_tax_id":"hidden","billing_phone":"optional","billing_address1":"required","billing_address2":"optional","billing_city":"required","billing_region":"default","billing_postal_code":"required","billing_country":"required"},"cart_display_config":{"usage":"required","show_product_weight":false,"show_product_category":true,"show_product_code":true,"show_product_options":true,"show_sub_frequency":true,"show_sub_startdate":true,"show_sub_nextdate":true,"show_sub_enddate":true,"hidden_product_options":["my_option"]},"foxycomplete":{"usage":"required","show_combobox":true,"combobox_open":"\\u25bc","combobox_close":"\\u25b2","show_flags":true},"custom_script_values":{"header":"","footer":"","checkout_fields":"","multiship_checkout_fields":""},"http_receipt":false,"custom_config":{},"debug":{"usage":"none"},"location_filtering":{"usage":"both","shipping_filter_type":"blacklist","billing_filter_type":"blacklist","shipping_filter_values":{"CA":["ON","AB","QB"]},"billing_filter_values":{"CA":["ON","AB","QB"]}},"postal_code_lookup":{"usage":"enabled"}}',
      date_created: '2012-08-10T11:58:54-0700',
      date_modified: '2012-08-10T11:58:54-0700',
    },
  ],

  coupons: new Array(12).fill(0).map((_, id) => ({
    id,
    store_id: 0,
    name: `October Sale ${id}`,
    start_date: '2020-03-29T13:57:40-0700',
    end_date: null,
    number_of_uses_allowed: 100,
    number_of_uses_to_date: 31,
    number_of_uses_allowed_per_code: 0,
    coupon_discount_type: 'quantity_percentage',
    coupon_discount_details: 'repeat|6-10',
    combinable: true,
    multiple_codes_allowed: true,
    product_code_restrictions: 'abc123,fun_*,*_small,-foobar,-*_example,-test_code',
    exclude_category_discounts: false,
    exclude_line_item_discounts: false,
    is_taxable: true,
    date_created: '2014-04-21T13:40:45-0700',
    date_modified: '2015-03-16T12:30:58-0700',
  })),

  coupon_codes: new Array(100).fill(0).map((_, id) => ({
    id,
    store_id: 0,
    coupon_id: 0,
    code: `OCTBRSL22${id}`,
    number_of_uses_to_date: Math.floor(Math.random() * 100),
    date_created: '2014-04-21T13:40:45-0700',
    date_modified: '2022-02-16T12:30:58-0700',
  })),

  generate_codes: [
    {
      id: 0,
      message: 'All codes added successfully.',
    },
  ],

  item_categories: new Array(12).fill(0).map((_, id) => ({
    id: id,
    store_id: 0,
    admin_email_template_uri: '',
    customer_email_template_uri: '',
    code: `CATEGORY_${id}`,
    name: `Test Category ${id}`,
    item_delivery_type: 'notshipped',
    max_downloads_per_customer: 3,
    max_downloads_time_period: 24,
    customs_value: 0,
    default_weight: 1,
    default_weight_unit: 'LBS',
    default_length_unit: 'IN',
    shipping_flat_rate: 0,
    shipping_flat_rate_type: 'per_order',
    handling_fee: 0,
    handling_fee_minimum: 0,
    handling_fee_type: 'none',
    handling_fee_percentage: 0,
    discount_name: null,
    discount_type: null,
    discount_details: null,
    send_customer_email: false,
    send_admin_email: false,
    admin_email: null,
    date_created: '2012-10-31T14:12:39-0700',
    date_modified: '2012-10-31T14:12:39-0700',
  })),

  coupon_item_categories: [],

  gift_cards: [
    {
      id: 0,
      store_id: 0,
      name: 'Silver Gift Card (US)',
      currency_code: 'USD',
      expires_after: '5y',
      product_code_restrictions: 'abc123,fun_*,*_small,-foobar,-*_example,-test_code',
      date_created: '2014-04-21T13:40:45-0700',
      date_modified: '2015-03-16T12:30:58-0700',
    },
  ],

  gift_card_codes: new Array(100).fill(0).map((_, id) => ({
    id,
    store_id: 0,
    gift_card_id: 0,
    code: `GIFTCARD${id}`,
    end_date: Math.random() > 0.5 ? '2022-02-16T12:30:58-0700' : null,
    current_balance: Math.round(Math.random() * 100),
    date_created: '2014-04-21T13:40:45-0700',
    date_modified: '2022-02-16T12:30:58-0700',
    ...(id % 2 === 0 ? { item_id: 0 } : null),
  })),

  gift_card_code_logs: [
    {
      id: 0,
      store_id: 0,
      gift_card_id: 0,
      gift_card_code_id: 0,
      transaction_id: 0,
      external_id: null,
      balance_adjustment: -40.3,
      user_id: null,
      source: null,
      date_created: '2021-11-15T19:30:33-0800',
      date_modified: '2021-11-15T19:30:35-0800',
    },
    {
      id: 1,
      store_id: 0,
      gift_card_id: 0,
      gift_card_code_id: 0,
      transaction_id: null,
      external_id: null,
      balance_adjustment: 20,
      user_id: 0,
      source: null,
      date_created: '2021-10-08T12:30:33-0800',
      date_modified: '2021-10-08T12:30:35-0800',
    },
  ],

  gift_card_item_categories: [],

  reports: [
    {
      id: 0,
      user_id: 0,
      store_id: 0,
      name: 'customers',
      version: '1',
      datetime_start: '2022-01-01T00:00:00-0800',
      datetime_end: '2022-12-31T00:00:00-0800',
      status: 'ready',
      date_created: '2022-01-01T00:00:00-0800',
      date_modified: '2022-01-01T00:00:00-0800',
    },
    {
      id: 1,
      user_id: 0,
      store_id: 0,
      name: 'customers_ltv',
      version: '1',
      datetime_start: '2022-01-01T00:00:00-0800',
      datetime_end: '2022-12-31T00:00:00-0800',
      status: 'error',
      date_created: '2022-01-01T00:00:00-0800',
      date_modified: '2022-01-01T00:00:00-0800',
    },
    {
      id: 2,
      user_id: 0,
      store_id: 0,
      name: 'complete',
      version: '1',
      datetime_start: '2022-01-01T00:00:00-0800',
      datetime_end: '2022-12-31T00:00:00-0800',
      status: 'queued',
      date_created: '2022-01-01T00:00:00-0800',
      date_modified: '2022-01-01T00:00:00-0800',
    },
  ],

  discount_details: new Array(3).fill(0).map((_, id) => ({
    id,
    item_id: 0,
    store_id: 0,
    transaction_id: 0,
    name: `Product Level Discount #${id}`,
    amount_per: 0 - Math.random() * 10,
    date_created: '2022-01-01T00:00:00-0800',
    date_modified: '2022-01-01T00:00:00-0800',
  })),

  coupon_details: new Array(3).fill(0).map((_, id) => ({
    id,
    item_id: 0,
    store_id: 0,
    coupon_id: 0,
    coupon_code_id: 0,
    transaction_id: 0,
    name: 'October Sale',
    code: `OCTBRSL${id}`,
    amount_per: 0 - Math.random() * 10,
    date_created: '2022-01-01T00:00:00-0800',
    date_modified: '2022-01-01T00:00:00-0800',
  })),

  shipments: [
    {
      id: 0,
      store_id: 0,
      transaction_id: 0,
      customer_id: 0,
      customer_address_id: 0,
      address_name: 'Default Shipping Address',
      first_name: 'John',
      last_name: 'Doe',
      company: '',
      address1: '1234 Anystreet',
      address2: '',
      city: 'NASHVILLE',
      region: 'TN',
      postal_code: '37211',
      country: 'US',
      phone: '555-555-55555',
      shipping_service_id: 55,
      shipping_service_description: 'FedEx Home Delivery',
      total_item_price: 10,
      total_tax: 1.99,
      total_shipping: 11.29,
      total_price: 23.28,
      date_created: '2015-04-15T08:46:39-0700',
      date_modified: '2015-04-15T08:46:39-0700',
    },
    {
      id: 1,
      store_id: 0,
      transaction_id: 1,
      customer_id: 0,
      customer_address_id: 0,
      address_name: 'Default Shipping Address',
      first_name: 'John',
      last_name: 'Doe',
      company: '',
      address1: '1234 Anystreet',
      address2: '',
      city: 'NASHVILLE',
      region: 'TN',
      postal_code: '37211',
      country: 'US',
      phone: '555-555-55555',
      shipping_service_id: 55,
      shipping_service_description: 'FedEx Home Delivery',
      total_item_price: 10,
      total_tax: 1.99,
      total_shipping: 11.29,
      total_price: 23.28,
      date_created: '2015-04-15T08:46:39-0700',
      date_modified: '2015-04-15T08:46:39-0700',
    },
  ],

  webhooks: [
    {
      id: 0,
      store_id: 0,
      format: 'json',
      version: 2,
      name: 'My JSON endpoint',
      url: 'https://example.com',
      query: 'zoom=items',
      encryption_key: 'HNL978XVXXCM66DM5N2T78D5MT66BC6D',
      event_resource: 'transaction',
      date_created: '2020-10-28T07:03:19-0700',
      date_modified: '2020-10-28T08:45:46-0700',
    },
  ],

  webhook_statuses: [
    {
      id: 0,
      store_id: 0,
      webhook_id: 0,
      resource_id: 0,
      resource_type: 'transaction',
      status: 'pending',
      date_created: '2020-10-28T07:03:19-0700',
      date_modified: '2020-10-28T08:45:46-0700',
    },
  ],

  webhook_logs: [
    {
      id: 0,
      store_id: 0,
      webhook_id: 0,
      resource_id: 0,
      resource_type: 'transaction',
      response_body: JSON.stringify({ status: 'OK', timestamp: Date.now() }),
      response_code: '200',
      date_created: '2020-10-28T07:03:19-0700',
      date_modified: '2020-10-28T08:45:46-0700',
    },
  ],

  store_shipping_methods: [
    {
      id: 0,
      store_id: 0,
      shipping_method_id: 0,
      shipping_container_id: 0,
      shipping_drop_type_id: 0,
      shipping_method_uri: 'https://demo.api/hapi/shipping_methods/0',
      shipping_container_uri: 'https://demo.api/hapi/shipping_containers/0',
      shipping_drop_type_uri: 'https://demo.api/hapi/shipping_drop_types/0',
      accountid: 'my-account-123',
      password: 'super-secret-password',
      meter_number: '',
      authentication_key: '',
      use_for_domestic: true,
      use_for_international: false,
      date_created: '2020-10-28T07:03:19-0700',
      date_modified: '2020-10-28T08:45:46-0700',
    },
    {
      id: 1,
      store_id: 0,
      shipping_method_id: 1,
      shipping_method_uri: 'https://demo.api/hapi/shipping_methods/1',
      use_for_domestic: true,
      use_for_international: true,
      deployment_status: 'deployed',
      custom_code:
        "rates.add(10002, 5, '', 'Ground Custom 2002');\r\nrates.add(10012, 50, '', 'Expensive');\r\n\r\nif (!rates.exists()) {\r\n\trates.add(10001, 15, '', 'Fallback Shipping');\r\n}",
      date_created: '2020-10-28T07:03:19-0700',
      date_modified: '2020-10-28T08:45:46-0700',
    },
  ],

  store_shipping_services: [
    {
      id: 0,
      store_id: 0,
      shipping_method_id: 0,
      shipping_service_id: 0,
      shipping_method_uri: 'https://demo.api/hapi/shipping_methods/0',
      shipping_service_uri: 'https://demo.api/hapi/shipping_services/0',
      date_created: '2020-10-28T07:03:19-0700',
      date_modified: '2020-10-28T08:45:46-0700',
    },
  ],

  shipping_methods: [
    {
      id: 0,
      name: 'United States Postal Service',
      code: 'USPS',
      date_created: null,
      date_modified: null,
    },
    {
      id: 1,
      name: 'Custom Shipping Code',
      code: 'CUSTOM-CODE',
      date_created: null,
      date_modified: null,
    },
  ],

  shipping_containers: [
    {
      id: 0,
      shipping_method_id: 0,
      name: 'Regular Size',
      code: 'VARIABLE',
      date_created: null,
      date_modified: null,
    },
  ],

  shipping_drop_types: [
    {
      id: 0,
      shipping_method_id: 0,
      name: 'Regular Pickup',
      code: 'REGULARPICKUP',
      date_created: null,
      date_modified: null,
    },
  ],

  shipping_services: [
    {
      id: 0,
      shipping_method_id: 0,
      name: 'Priority Mail',
      code: '1',
      is_international: true,
      date_created: null,
      date_modified: null,
    },
  ],
});
