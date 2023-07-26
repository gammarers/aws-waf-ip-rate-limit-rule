# AWS WAF Rete Limit Rule Group

This is an AWS CDK Construct for Rate Limit Rule on WAF V2

## Resources

This construct creating resource list.

- WAF V2 RuleGroup

## Install

### TypeScript

```shell
npm install @gammarer/aws-waf-rate-limit-rule-group
# or
yarn add @gammarer/aws-waf-rate-limit-rule-group
```

### Python

```shell
pip install @gammarer/aws-waf-rate-limit-rule-group
```

## Example

```typescript
import { WafRateLimitRuleGroup } from '@gammarer/aws-waf-rate-limit-rule-group';

new WafRateLimitRuleGroup(stack, 'WafRateLimitRuleGroup', {
  name: 'rate-limit-rule-group',
  rateLimitCount: 3000, // default 1000
});

```

## License

This project is licensed under the Apache-2.0 License.


