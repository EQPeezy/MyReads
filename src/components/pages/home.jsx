//File still in testing

import React from "react";
import { Grid, Image } from "semantic-ui-react";
import picture from "../../images/bookshelfBackground.jpg";

const Home = () => (
  
    <Grid divided="vertically">
      <Grid.Row columns={2}>
        <Grid.Column>
          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Grid.Column>
        <Grid.Column>
          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  
);

export default Home;
