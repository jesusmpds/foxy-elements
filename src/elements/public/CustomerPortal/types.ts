import { State, Context } from './machine';
import { AnyEventObject, EventObject, Typestate, State as MachineState } from 'xstate';
import { Templates as CustomerTemplates } from '../Customer/types';
import { Templates as AccessRecoveryFormTemplates } from '../AccessRecoveryForm/types';
import { Templates as SignInFormTemplates } from '../SignInForm/types';
import { Renderer } from '../../../mixins/configurable';
import { CustomerPortal } from '.';

type ComputedState<
  TContext,
  TTypestate extends Typestate<TContext>,
  TSV extends TTypestate['value'],
  TEvent extends EventObject,
  TStateSchema
> = MachineState<
  (TTypestate extends any
    ? {
        value: TSV;
        context: any;
      } extends TTypestate
      ? TTypestate
      : never
    : never)['context'],
  TEvent,
  TStateSchema,
  TTypestate
> & {
  value: TSV;
};

export type ComputedElementProperties<
  TSV extends State['value'],
  TContext extends Context = ComputedState<Context, State, TSV, AnyEventObject, any>['context']
> = { settings: TContext['settings'] };

export type Templates = {
  'sign-in:before'?: Renderer<CustomerPortal>;
  'sign-in:after'?: Renderer<CustomerPortal>;
  'sign-in:header:before'?: Renderer<CustomerPortal>;
  'sign-in:header:after'?: Renderer<CustomerPortal>;
  'sign-in:form:email:before'?: SignInFormTemplates['email:before'];
  'sign-in:form:email:after'?: SignInFormTemplates['email:after'];
  'sign-in:form:password:before'?: SignInFormTemplates['password:before'];
  'sign-in:form:password:after'?: SignInFormTemplates['password:after'];
  'sign-in:form:error:before'?: SignInFormTemplates['error:before'];
  'sign-in:form:error:after'?: SignInFormTemplates['error:after'];
  'sign-in:form:submit:before'?: SignInFormTemplates['submit:before'];
  'sign-in:form:submit:after'?: SignInFormTemplates['submit:after'];
  'sign-in:recover:before'?: Renderer<CustomerPortal>;
  'sign-in:recover:after'?: Renderer<CustomerPortal>;

  'access-recovery:before'?: Renderer<CustomerPortal>;
  'access-recovery:after'?: Renderer<CustomerPortal>;
  'access-recovery:header:before'?: Renderer<CustomerPortal>;
  'access-recovery:header:after'?: Renderer<CustomerPortal>;
  'access-recovery:form:email:before'?: AccessRecoveryFormTemplates['email:before'];
  'access-recovery:form:email:after'?: AccessRecoveryFormTemplates['email:after'];
  'access-recovery:form:message:before'?: AccessRecoveryFormTemplates['message:before'];
  'access-recovery:form:message:after'?: AccessRecoveryFormTemplates['message:after'];
  'access-recovery:form:submit:before'?: AccessRecoveryFormTemplates['submit:before'];
  'access-recovery:form:submit:after'?: AccessRecoveryFormTemplates['submit:after'];
  'access-recovery:back:before'?: Renderer<CustomerPortal>;
  'access-recovery:back:after'?: Renderer<CustomerPortal>;

  'customer:header:before'?: CustomerTemplates['header:before'];
  'customer:header:after'?: CustomerTemplates['header:after'];
  'customer:header:actions:before'?: CustomerTemplates['header:actions:before'];
  'customer:header:actions:after'?: CustomerTemplates['header:actions:after'];
  'customer:header:actions:edit:before'?: CustomerTemplates['header:actions:edit:before'];
  'customer:header:actions:edit:after'?: CustomerTemplates['header:actions:edit:after'];
  'customer:header:actions:edit:form:first-name:before'?: CustomerTemplates['header:actions:edit:form:first-name:before'];
  'customer:header:actions:edit:form:first-name:after'?: CustomerTemplates['header:actions:edit:form:first-name:after'];
  'customer:header:actions:edit:form:last-name:before'?: CustomerTemplates['header:actions:edit:form:last-name:before'];
  'customer:header:actions:edit:form:last-name:after'?: CustomerTemplates['header:actions:edit:form:last-name:after'];
  'customer:header:actions:edit:form:email:before'?: CustomerTemplates['header:actions:edit:form:email:before'];
  'customer:header:actions:edit:form:email:after'?: CustomerTemplates['header:actions:edit:form:email:after'];
  'customer:header:actions:edit:form:tax-id:before'?: CustomerTemplates['header:actions:edit:form:tax-id:before'];
  'customer:header:actions:edit:form:tax-id:after'?: CustomerTemplates['header:actions:edit:form:tax-id:after'];
  'customer:header:actions:edit:form:timestamps:before'?: CustomerTemplates['header:actions:edit:form:timestamps:before'];
  'customer:header:actions:edit:form:timestamps:after'?: CustomerTemplates['header:actions:edit:form:timestamps:after'];
  'customer:header:actions:edit:form:delete:before'?: CustomerTemplates['header:actions:edit:form:delete:before'];
  'customer:header:actions:edit:form:delete:after'?: CustomerTemplates['header:actions:edit:form:delete:after'];
  'customer:header:actions:edit:form:create:before'?: CustomerTemplates['header:actions:edit:form:create:before'];
  'customer:header:actions:edit:form:create:after'?: CustomerTemplates['header:actions:edit:form:create:after'];
  'customer:addresses:before'?: CustomerTemplates['addresses:before'];
  'customer:addresses:after'?: CustomerTemplates['addresses:after'];
  'customer:addresses:actions:before'?: CustomerTemplates['addresses:actions:before'];
  'customer:addresses:actions:after'?: CustomerTemplates['addresses:actions:after'];
  'customer:addresses:actions:create:before'?: CustomerTemplates['addresses:actions:create:before'];
  'customer:addresses:actions:create:after'?: CustomerTemplates['addresses:actions:create:after'];
  'customer:addresses:actions:create:form:address-name:before'?: CustomerTemplates['addresses:actions:create:form:address-name:before'];
  'customer:addresses:actions:create:form:address-name:after'?: CustomerTemplates['addresses:actions:create:form:address-name:after'];
  'customer:addresses:actions:create:form:first-name:before'?: CustomerTemplates['addresses:actions:create:form:first-name:before'];
  'customer:addresses:actions:create:form:first-name:after'?: CustomerTemplates['addresses:actions:create:form:first-name:after'];
  'customer:addresses:actions:create:form:last-name:before'?: CustomerTemplates['addresses:actions:create:form:last-name:before'];
  'customer:addresses:actions:create:form:last-name:after'?: CustomerTemplates['addresses:actions:create:form:last-name:after'];
  'customer:addresses:actions:create:form:region:before'?: CustomerTemplates['addresses:actions:create:form:region:before'];
  'customer:addresses:actions:create:form:region:after'?: CustomerTemplates['addresses:actions:create:form:region:after'];
  'customer:addresses:actions:create:form:city:before'?: CustomerTemplates['addresses:actions:create:form:city:before'];
  'customer:addresses:actions:create:form:city:after'?: CustomerTemplates['addresses:actions:create:form:city:after'];
  'customer:addresses:actions:create:form:phone:before'?: CustomerTemplates['addresses:actions:create:form:phone:before'];
  'customer:addresses:actions:create:form:phone:after'?: CustomerTemplates['addresses:actions:create:form:phone:after'];
  'customer:addresses:actions:create:form:company:before'?: CustomerTemplates['addresses:actions:create:form:company:before'];
  'customer:addresses:actions:create:form:company:after'?: CustomerTemplates['addresses:actions:create:form:company:after'];
  'customer:addresses:actions:create:form:address-line-one:before'?: CustomerTemplates['addresses:actions:create:form:address-line-one:before'];
  'customer:addresses:actions:create:form:address-line-one:after'?: CustomerTemplates['addresses:actions:create:form:address-line-one:after'];
  'customer:addresses:actions:create:form:address-line-two:before'?: CustomerTemplates['addresses:actions:create:form:address-line-two:before'];
  'customer:addresses:actions:create:form:address-line-two:after'?: CustomerTemplates['addresses:actions:create:form:address-line-two:after'];
  'customer:addresses:actions:create:form:postal-code:before'?: CustomerTemplates['addresses:actions:create:form:postal-code:before'];
  'customer:addresses:actions:create:form:postal-code:after'?: CustomerTemplates['addresses:actions:create:form:postal-code:after'];
  'customer:addresses:actions:create:form:timestamps:before'?: CustomerTemplates['addresses:actions:create:form:timestamps:before'];
  'customer:addresses:actions:create:form:timestamps:after'?: CustomerTemplates['addresses:actions:create:form:timestamps:after'];
  'customer:addresses:actions:create:form:delete:before'?: CustomerTemplates['addresses:actions:create:form:delete:before'];
  'customer:addresses:actions:create:form:delete:after'?: CustomerTemplates['addresses:actions:create:form:delete:after'];
  'customer:addresses:actions:create:form:create:before'?: CustomerTemplates['addresses:actions:create:form:create:before'];
  'customer:addresses:actions:create:form:create:after'?: CustomerTemplates['addresses:actions:create:form:create:after'];
  'customer:addresses:list:before'?: CustomerTemplates['addresses:list:before'];
  'customer:addresses:list:after'?: CustomerTemplates['addresses:list:after'];
  'customer:addresses:list:card:address-name:before'?: CustomerTemplates['addresses:list:card:address-name:before'];
  'customer:addresses:list:card:address-name:after'?: CustomerTemplates['addresses:list:card:address-name:after'];
  'customer:addresses:list:card:full-name:before'?: CustomerTemplates['addresses:list:card:full-name:before'];
  'customer:addresses:list:card:full-name:after'?: CustomerTemplates['addresses:list:card:full-name:after'];
  'customer:addresses:list:card:full-address:before'?: CustomerTemplates['addresses:list:card:full-address:before'];
  'customer:addresses:list:card:full-address:after'?: CustomerTemplates['addresses:list:card:full-address:after'];
  'customer:addresses:list:card:company:before'?: CustomerTemplates['addresses:list:card:company:before'];
  'customer:addresses:list:card:company:after'?: CustomerTemplates['addresses:list:card:company:after'];
  'customer:addresses:list:card:phone:before'?: CustomerTemplates['addresses:list:card:phone:before'];
  'customer:addresses:list:card:phone:after'?: CustomerTemplates['addresses:list:card:phone:after'];
  'customer:addresses:list:form:address-name:before'?: CustomerTemplates['addresses:list:form:address-name:before'];
  'customer:addresses:list:form:address-name:after'?: CustomerTemplates['addresses:list:form:address-name:after'];
  'customer:addresses:list:form:first-name:before'?: CustomerTemplates['addresses:list:form:first-name:before'];
  'customer:addresses:list:form:first-name:after'?: CustomerTemplates['addresses:list:form:first-name:after'];
  'customer:addresses:list:form:last-name:before'?: CustomerTemplates['addresses:list:form:last-name:before'];
  'customer:addresses:list:form:last-name:after'?: CustomerTemplates['addresses:list:form:last-name:after'];
  'customer:addresses:list:form:region:before'?: CustomerTemplates['addresses:list:form:region:before'];
  'customer:addresses:list:form:region:after'?: CustomerTemplates['addresses:list:form:region:after'];
  'customer:addresses:list:form:city:before'?: CustomerTemplates['addresses:list:form:city:before'];
  'customer:addresses:list:form:city:after'?: CustomerTemplates['addresses:list:form:city:after'];
  'customer:addresses:list:form:phone:before'?: CustomerTemplates['addresses:list:form:phone:before'];
  'customer:addresses:list:form:phone:after'?: CustomerTemplates['addresses:list:form:phone:after'];
  'customer:addresses:list:form:company:before'?: CustomerTemplates['addresses:list:form:company:before'];
  'customer:addresses:list:form:company:after'?: CustomerTemplates['addresses:list:form:company:after'];
  'customer:addresses:list:form:address-line-one:before'?: CustomerTemplates['addresses:list:form:address-line-one:before'];
  'customer:addresses:list:form:address-line-one:after'?: CustomerTemplates['addresses:list:form:address-line-one:after'];
  'customer:addresses:list:form:address-line-two:before'?: CustomerTemplates['addresses:list:form:address-line-two:before'];
  'customer:addresses:list:form:address-line-two:after'?: CustomerTemplates['addresses:list:form:address-line-two:after'];
  'customer:addresses:list:form:postal-code:before'?: CustomerTemplates['addresses:list:form:postal-code:before'];
  'customer:addresses:list:form:postal-code:after'?: CustomerTemplates['addresses:list:form:postal-code:after'];
  'customer:addresses:list:form:timestamps:before'?: CustomerTemplates['addresses:list:form:timestamps:before'];
  'customer:addresses:list:form:timestamps:after'?: CustomerTemplates['addresses:list:form:timestamps:after'];
  'customer:addresses:list:form:delete:before'?: CustomerTemplates['addresses:list:form:delete:before'];
  'customer:addresses:list:form:delete:after'?: CustomerTemplates['addresses:list:form:delete:after'];
  'customer:addresses:list:form:create:before'?: CustomerTemplates['addresses:list:form:create:before'];
  'customer:addresses:list:form:create:after'?: CustomerTemplates['addresses:list:form:create:after'];
  'customer:payment-methods:before'?: CustomerTemplates['payment-methods:before'];
  'customer:payment-methods:after'?: CustomerTemplates['payment-methods:after'];
  'customer:payment-methods:list:before'?: CustomerTemplates['payment-methods:list:before'];
  'customer:payment-methods:list:after'?: CustomerTemplates['payment-methods:list:after'];
  'customer:payment-methods:list:card:actions:before'?: CustomerTemplates['payment-methods:list:card:actions:before'];
  'customer:payment-methods:list:card:actions:after'?: CustomerTemplates['payment-methods:list:card:actions:after'];
  'customer:payment-methods:list:card:actions:delete:before'?: CustomerTemplates['payment-methods:list:card:actions:delete:before'];
  'customer:payment-methods:list:card:actions:delete:after'?: CustomerTemplates['payment-methods:list:card:actions:delete:after'];
  'customer:attributes:before'?: CustomerTemplates['attributes:before'];
  'customer:attributes:after'?: CustomerTemplates['attributes:after'];
  'customer:attributes:actions:before'?: CustomerTemplates['attributes:actions:before'];
  'customer:attributes:actions:after'?: CustomerTemplates['attributes:actions:after'];
  'customer:attributes:actions:create:before'?: CustomerTemplates['attributes:actions:create:before'];
  'customer:attributes:actions:create:after'?: CustomerTemplates['attributes:actions:create:after'];
  'customer:attributes:actions:create:form:name:before'?: CustomerTemplates['attributes:actions:create:form:name:before'];
  'customer:attributes:actions:create:form:name:after'?: CustomerTemplates['attributes:actions:create:form:name:after'];
  'customer:attributes:actions:create:form:value:before'?: CustomerTemplates['attributes:actions:create:form:value:before'];
  'customer:attributes:actions:create:form:value:after'?: CustomerTemplates['attributes:actions:create:form:value:after'];
  'customer:attributes:actions:create:form:visibility:before'?: CustomerTemplates['attributes:actions:create:form:visibility:before'];
  'customer:attributes:actions:create:form:visibility:after'?: CustomerTemplates['attributes:actions:create:form:visibility:after'];
  'customer:attributes:actions:create:form:timestamps:before'?: CustomerTemplates['attributes:actions:create:form:timestamps:before'];
  'customer:attributes:actions:create:form:timestamps:after'?: CustomerTemplates['attributes:actions:create:form:timestamps:after'];
  'customer:attributes:actions:create:form:delete:before'?: CustomerTemplates['attributes:actions:create:form:delete:before'];
  'customer:attributes:actions:create:form:delete:after'?: CustomerTemplates['attributes:actions:create:form:delete:after'];
  'customer:attributes:actions:create:form:create:before'?: CustomerTemplates['attributes:actions:create:form:create:before'];
  'customer:attributes:actions:create:form:create:after'?: CustomerTemplates['attributes:actions:create:form:create:after'];
  'customer:attributes:list:before'?: CustomerTemplates['attributes:list:before'];
  'customer:attributes:list:after'?: CustomerTemplates['attributes:list:after'];
  'customer:attributes:list:card:name:before'?: CustomerTemplates['attributes:list:card:name:before'];
  'customer:attributes:list:card:name:after'?: CustomerTemplates['attributes:list:card:name:after'];
  'customer:attributes:list:card:value:before'?: CustomerTemplates['attributes:list:card:value:before'];
  'customer:attributes:list:card:value:after'?: CustomerTemplates['attributes:list:card:value:after'];
  'customer:attributes:list:form:name:before'?: CustomerTemplates['attributes:list:form:name:before'];
  'customer:attributes:list:form:name:after'?: CustomerTemplates['attributes:list:form:name:after'];
  'customer:attributes:list:form:value:before'?: CustomerTemplates['attributes:list:form:value:before'];
  'customer:attributes:list:form:value:after'?: CustomerTemplates['attributes:list:form:value:after'];
  'customer:attributes:list:form:visibility:before'?: CustomerTemplates['attributes:list:form:visibility:before'];
  'customer:attributes:list:form:visibility:after'?: CustomerTemplates['attributes:list:form:visibility:after'];
  'customer:attributes:list:form:timestamps:before'?: CustomerTemplates['attributes:list:form:timestamps:before'];
  'customer:attributes:list:form:timestamps:after'?: CustomerTemplates['attributes:list:form:timestamps:after'];
  'customer:attributes:list:form:delete:before'?: CustomerTemplates['attributes:list:form:delete:before'];
  'customer:attributes:list:form:delete:after'?: CustomerTemplates['attributes:list:form:delete:after'];
  'customer:attributes:list:form:create:before'?: CustomerTemplates['attributes:list:form:create:before'];
  'customer:attributes:list:form:create:after'?: CustomerTemplates['attributes:list:form:create:after'];
  'customer:transactions:before'?: CustomerTemplates['transactions:before'];
  'customer:transactions:after'?: CustomerTemplates['transactions:after'];
  'customer:subscriptions:before'?: CustomerTemplates['subscriptions:before'];
  'customer:subscriptions:after'?: CustomerTemplates['subscriptions:after'];
  'customer:subscriptions:form:header:before'?: CustomerTemplates['subscriptions:form:header:before'];
  'customer:subscriptions:form:header:after'?: CustomerTemplates['subscriptions:form:header:after'];
  'customer:subscriptions:form:items:before'?: CustomerTemplates['subscriptions:form:items:before'];
  'customer:subscriptions:form:items:after'?: CustomerTemplates['subscriptions:form:items:after'];
  'customer:subscriptions:form:items:actions:before'?: CustomerTemplates['subscriptions:form:items:actions:before'];
  'customer:subscriptions:form:items:actions:after'?: CustomerTemplates['subscriptions:form:items:actions:after'];
  'customer:subscriptions:form:end-date:before'?: CustomerTemplates['subscriptions:form:end-date:before'];
  'customer:subscriptions:form:end-date:after'?: CustomerTemplates['subscriptions:form:end-date:after'];
  'customer:subscriptions:form:end-date:form:warning:before'?: CustomerTemplates['subscriptions:form:end-date:form:warning:before'];
  'customer:subscriptions:form:end-date:form:warning:after'?: CustomerTemplates['subscriptions:form:end-date:form:warning:after'];
  'customer:subscriptions:form:end-date:form:end-date:before'?: CustomerTemplates['subscriptions:form:end-date:form:end-date:before'];
  'customer:subscriptions:form:end-date:form:end-date:after'?: CustomerTemplates['subscriptions:form:end-date:form:end-date:after'];
  'customer:subscriptions:form:end-date:form:submit:before'?: CustomerTemplates['subscriptions:form:end-date:form:submit:before'];
  'customer:subscriptions:form:end-date:form:submit:after'?: CustomerTemplates['subscriptions:form:end-date:form:submit:after'];
  'customer:subscriptions:form:next-transaction-date:before'?: CustomerTemplates['subscriptions:form:next-transaction-date:before'];
  'customer:subscriptions:form:next-transaction-date:after'?: CustomerTemplates['subscriptions:form:next-transaction-date:after'];
  'customer:subscriptions:form:frequency:before'?: CustomerTemplates['subscriptions:form:frequency:before'];
  'customer:subscriptions:form:frequency:after'?: CustomerTemplates['subscriptions:form:frequency:after'];
  'customer:subscriptions:form:transactions:before'?: CustomerTemplates['subscriptions:form:transactions:before'];
  'customer:subscriptions:form:transactions:after'?: CustomerTemplates['subscriptions:form:transactions:after'];
};
