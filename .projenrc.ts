import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.63.0',
  defaultReleaseBranch: 'main',
  name: '@gammarer/aws-waf-rate-limit-rule-group',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/yicr/aws-waf-rate-limit-rule-group.git',
  keywords: ['aws', 'cdk', 'aws-cdk', 'waf', 'acl', 'rate'],
  releaseToNpm: false,
  npmAccess: javascript.NpmAccess.PUBLIC,
});
project.synth();