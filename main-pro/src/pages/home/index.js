import styles from './index.less';
import { Button, Container, Divider, Grid, Header, Image, Menu, Segment } from 'semantic-ui-react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { mockPort } from '../../tools/port';
import {history} from '../../.umi/core/history';


const MenuComponent = styled(Menu)`
  margin-bottom: 0!important;
`

const SegmentWrapper = styled(Segment)`
  margin: 0 !important;
  height: 300px;
  background-color: rgba(208, 206, 206, .2)!important;

  @media screen and (min-width: 780px) {
    height: 320px;
    padding: 6em 0!important;
  }
  @media screen and (max-width: 779px) {
    height: 200px;
    padding: 3em 0 !important;
  }
`

const ButtonWrapper = styled(Button)`
  margin-top: 1.5em!important;
`

const GridWrapper = styled(Grid)`
  margin: 3.5em 0!important;
`

export default function IndexPage() {

  const [active, setActive] = useState(0);
  const [boxs, setBoxs] = useState([]);

  const MenuItems = [
    { key: 'home', name: 'Home' },
    { key: 'review', name: 'Reviews' },
    { key: 'events', name: 'Upcoming Events' },
  ]


  useEffect(()=>{
    axios.get(mockPort + '/home/box')
      .then(res => {
        const {data} = res;
        setBoxs(data.data);
      })
  }, [])

  return (
    <div>

      <MenuComponent activeIndex={active} pointing secondary color='black' items={MenuItems} onItemClick={(e, data) => setActive(data.index)}/>

      <SegmentWrapper basic textAlign='center'>
        <Header as='h1'>
          Rotten Work
          <Header.Subheader>👎 Meme is either good or bad, but it must be tough.</Header.Subheader>
        </Header>
        <Segment.Inline>
          <ButtonWrapper onClick={()=>history.push('/work')}>Start</ButtonWrapper>
        </Segment.Inline>
      </SegmentWrapper>

      <Container>

        <GridWrapper>
            {
              boxs.map((item, index) => (
                <Grid.Column key={index} computer={5} tablet={16}>
                  <Segment textAlign='center' basic>

                    <Grid>
                      <Grid.Column computer={16} tablet={3} mobile={4}>
                        <Image centered src={item.image}/></Grid.Column>
                      <Grid.Column computer={16} tablet={13} mobile={12}>
                        <Header as='h2'>{item.title}</Header>
                        <div>{item.desc}</div>
                      </Grid.Column>
                    </Grid>

                  </Segment>
                </Grid.Column>
              ))
            }
        </GridWrapper>

        <Divider />

        <div style={{textAlign:'center', padding:'2em'}}>
           - Footer - © 2023.06.14
        </div>
      </Container>

    </div>
  );
}
