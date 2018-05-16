import Amplify from 'aws-amplify';
import { GraphiQL } from './GraphiQL';
import aws_exports from '../aws-exports';
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(aws_exports);

export const WrappedGraphiQL = withAuthenticator(GraphiQL);
