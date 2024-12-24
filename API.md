# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

### RuleConfig <a name="RuleConfig" id="@gammarers/aws-waf-ip-rate-limit-rule.RuleConfig"></a>

#### Initializer <a name="Initializer" id="@gammarers/aws-waf-ip-rate-limit-rule.RuleConfig.Initializer"></a>

```typescript
import { RuleConfig } from '@gammarers/aws-waf-ip-rate-limit-rule'

const ruleConfig: RuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-waf-ip-rate-limit-rule.RuleConfig.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@gammarers/aws-waf-ip-rate-limit-rule.RuleConfig.property.cloudWatchMetricsName">cloudWatchMetricsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-waf-ip-rate-limit-rule.RuleConfig.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |

---

##### `priority`<sup>Required</sup> <a name="priority" id="@gammarers/aws-waf-ip-rate-limit-rule.RuleConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `cloudWatchMetricsName`<sup>Optional</sup> <a name="cloudWatchMetricsName" id="@gammarers/aws-waf-ip-rate-limit-rule.RuleConfig.property.cloudWatchMetricsName"></a>

```typescript
public readonly cloudWatchMetricsName: string;
```

- *Type:* string

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@gammarers/aws-waf-ip-rate-limit-rule.RuleConfig.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

### WAFIPRateLimitRuleProps <a name="WAFIPRateLimitRuleProps" id="@gammarers/aws-waf-ip-rate-limit-rule.WAFIPRateLimitRuleProps"></a>

#### Initializer <a name="Initializer" id="@gammarers/aws-waf-ip-rate-limit-rule.WAFIPRateLimitRuleProps.Initializer"></a>

```typescript
import { WAFIPRateLimitRuleProps } from '@gammarers/aws-waf-ip-rate-limit-rule'

const wAFIPRateLimitRuleProps: WAFIPRateLimitRuleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-waf-ip-rate-limit-rule.WAFIPRateLimitRuleProps.property.rateLimit">rateLimit</a></code> | <code>number</code> | *No description.* |

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@gammarers/aws-waf-ip-rate-limit-rule.WAFIPRateLimitRuleProps.property.rateLimit"></a>

```typescript
public readonly rateLimit: number;
```

- *Type:* number

---

## Classes <a name="Classes" id="Classes"></a>

### WAFIPRateLimitRule <a name="WAFIPRateLimitRule" id="@gammarers/aws-waf-ip-rate-limit-rule.WAFIPRateLimitRule"></a>

#### Initializers <a name="Initializers" id="@gammarers/aws-waf-ip-rate-limit-rule.WAFIPRateLimitRule.Initializer"></a>

```typescript
import { WAFIPRateLimitRule } from '@gammarers/aws-waf-ip-rate-limit-rule'

new WAFIPRateLimitRule(props: WAFIPRateLimitRuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-waf-ip-rate-limit-rule.WAFIPRateLimitRule.Initializer.parameter.props">props</a></code> | <code><a href="#@gammarers/aws-waf-ip-rate-limit-rule.WAFIPRateLimitRuleProps">WAFIPRateLimitRuleProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@gammarers/aws-waf-ip-rate-limit-rule.WAFIPRateLimitRule.Initializer.parameter.props"></a>

- *Type:* <a href="#@gammarers/aws-waf-ip-rate-limit-rule.WAFIPRateLimitRuleProps">WAFIPRateLimitRuleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-waf-ip-rate-limit-rule.WAFIPRateLimitRule.blockRule">blockRule</a></code> | *No description.* |

---

##### `blockRule` <a name="blockRule" id="@gammarers/aws-waf-ip-rate-limit-rule.WAFIPRateLimitRule.blockRule"></a>

```typescript
public blockRule(config: RuleConfig): RuleProperty
```

###### `config`<sup>Required</sup> <a name="config" id="@gammarers/aws-waf-ip-rate-limit-rule.WAFIPRateLimitRule.blockRule.parameter.config"></a>

- *Type:* <a href="#@gammarers/aws-waf-ip-rate-limit-rule.RuleConfig">RuleConfig</a>

---





