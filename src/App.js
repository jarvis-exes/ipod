import React, { createRef, Component } from 'react'
import ZingTouch from 'zingtouch';
import Wheel from './Wheel'
import Screen from './Screen'

class App extends Component {

  constructor() {
    super();
    
    this.state = {
      // State Managing the Menu
      menu: {
        // Menu Options along with their Sub-Menu Options
        options: [
          {
            music: ["all-songs", "artists", "albums"],
          },
          {
            games: [],
          },
          {
            coverflow: [],
          },
          {
            settings: [
              "change-wallpaper",
              "change-orientation",
              "change-theme",
            ],
          },
        ],
        // Making the Menu Visible
        menuVisible: "no",
        musicVisible: "no",
        settingsVisible: "no",
        // Menu Options Index for traversal in Options and Sub Options
        optionsIndex: 0,
        musicIndex: 0,
        settingsIndex: 0,
        // used for Main Page Rendering like songs,artists,albums
        pageRender: "no",
      },
    }

    this.wheelRef = createRef();
  }

  componentDidMount() {

    this.rotate();
  }

  rotate = () => {
    let containerElementOuter = this.wheelRef.current;
    let activeRegionOuter = ZingTouch.Region(containerElementOuter);

    activeRegionOuter.bind(containerElementOuter, 'rotate', (event) => {
      // console.log("rotate");
      console.log(event.detail.distanceFromLast);
    });

  }

  render() {
    const{menu} = this.state
    return (
      <div className="App">
        <div className='main-frame'>
          <Screen
            menu={menu}
          />
          <Wheel
            wheelRef={this.wheelRef}
          />
        </div>
      </div>
    );
  }
}

export default App;
