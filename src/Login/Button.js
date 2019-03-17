import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import './Button.css'
const ButtonExampleAnimated = () => (
  <div>
    <Button animated id="btn">
      <Button.Content visible>Next</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    </div>
)

export default ButtonExampleAnimated