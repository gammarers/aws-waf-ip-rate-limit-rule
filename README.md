# AWS WAF IP Rete Limit Rule Group

This is an AWS CDK Construct for IP Rate Limit Rule on WAF V2

## Resources

This construct creating resource list.

- WAF V2 RuleGroup

## Install

### TypeScript

```shell
npm install @gammarer/aws-waf-ip-rate-limit-rule-group
# or
yarn add @gammarer/aws-waf-ip-rate-limit-rule-group
```

## Example

```typescript
import { Scope, WafRateLimitRuleGroup } from '@gammarer/aws-waf-ip-rate-limit-rule-group';

new WafIpRateLimitRuleGroup(stack, 'WafIpRateLimitRuleGroup', {
  name: 'rate-limit-rule-group',
  scope: Scope.REGIONAL,
  rateLimitCount: 3000, // default 1000
});

```

## License

This project is licensed under the Apache-2.0 License.


