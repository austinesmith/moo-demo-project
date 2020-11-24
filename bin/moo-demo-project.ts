#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { MooDemoProjectStack } from '../lib/moo-demo-project-stack';

const app = new cdk.App();
new MooDemoProjectStack(app, 'MooDemoProjectStack');
