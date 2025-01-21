```javascript
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './auth/[...nextauth]';

export default async function MyComponent(props) {
  const session = await unstable_getServerSession(req, res, authOptions);

  // ... rest of your component
}
```