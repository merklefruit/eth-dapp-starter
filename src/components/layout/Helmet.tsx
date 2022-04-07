import { Helmet as AsyncHelmet } from 'react-helmet-async';
import config from '../../app.config';

export default function Helmet() {
  return (
    <AsyncHelmet>
      <title>{config.appName}</title>
      <meta name='description' content={config.appDescription} />
    </AsyncHelmet>
  );
}
