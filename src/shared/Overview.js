import React from 'react';
import { Button} from 'culturetrip-ui/dist/components/Button';

export class Overview extends React.Component {
  render() {
    return (
      <div>
        <h1>Overview</h1>
        <Button variant="primary" type="button" size="medium" onClick={() => console.log('clicked')}>Click</Button>
      </div>
    );
  }
}
