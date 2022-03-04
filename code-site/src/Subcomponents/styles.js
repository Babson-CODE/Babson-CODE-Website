import { theme } from './theme';
import aboutImage from '../Assets/img/aboutBackgroundStock.jpg';
import blueGrey from '@material-ui/core/colors/blueGrey';
import albumphoto from "../Assets/img/thisisengineering.jpg";
import codecover from "../Components/Landing/code-cover.jpg";

const drawerWidth = 240;

export const styles = {
    root: {
    flexGrow: 1,
    padding: theme.spacing(0),
    height: "100vh",
  },
  container: {
    maxWidth: false,
    disableGutters: true,
  },
  heroHead: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    padding: theme.spacing(4),
    height: "90vh",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  tabBar: {
    float: "right",
    //    flexGrow: 1,
  },
  iconButton: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  mapContainer: {
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  sidebarStyle: {
    display: "inline-block",
    position: "absolute",
    top: 0,
    left: 0,
    margin: "12px",
    padding: "6px",
  },
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
    alignItems: "center",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(1),
      paddingRight: 0,
    },
  },
  contactUsFooter: {
    position: "relative",
  },
  image: {
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
    //    backgroundImage: {codecover},
    //    maxWidth: '100%',
    //   maxHeight: '100%',
    width: "100vw",
  },
  albumImg: {
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "contain",
    backgroundPosition: "center",
    //    backgroundImage: {codecover},
    maxWidth: "100%",
    maxHeight: "100%",
    //    width: '100vw',
    //   height: '100vh',
  },
  albumContainer: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  albumTabPanel: {
    width: "100%",
    height: "100%",
    //    overflow: 'hidden',
    backgroundSize: "cover",
  //  marginTop: theme.spacing(8),
  },
  album:{
//    display: 'flex',
    flexGrow: 1,
    width: '100%', 
    height: '100%',
    padding: theme.spacing(0),
  },
  paper: {
    margin: theme.spacing(3, 2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
  },
  imgPaper: {
    //   margin: theme.spacing(3, 2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    //    padding: 20
  },
  footer: {
    backgroundcolor: "text.secondary",
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor: theme.palette.type === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
    position: 'fixed',
      },
  centerstyle: {
    padding: theme.spacing(3, 2),
    height: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  toTop: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  menuAppBar: {
    flexGrow: 0,
    elevation: 10,
  },
  tabPanelBox: {
    flexGrow: 1,
  },
  subscribeFab: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
  toTopFab: {
    margin: theme.spacing(1),
  },
  iconTab:{
    marginLeft: 'auto',
    display: 'flex',
  },
  albumJumbotron:{
    backgroundImage: `url(${albumphoto})`,
  },
  tabPanelContainer:{
    padding: 0,
    flexGrow: 1,
  },
  landingJumbotron:{
    backgroundImage: `url(${codecover})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: '100vw',
    height: '100vh',
    justifyContent: "center",
    alignItems: 'center',
    marginBottom: theme.spacing(6)
  },
  heroContent: {
    //    backgroundColor: theme.palette.background.paper,
   padding: '25%',
//   height: '100%',
   flexDirection: "column",
//   justifyContent: "center",
   alignItems: 'center',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  contain:{
    alignContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  aboutUsBox:{
    marginTop: theme.spacing(0),
  },
  aboutJumbo:{
    paddingTop: 'auto',
    paddingBottom: 'auto',
    backgroundImage: `url(${aboutImage})`,
    backgroundSize: 'cover',
    color: 'white',
    marginBottom: theme.spacing(2),
  },
  aboutTextContainers:{
      padding: theme.spacing(9,2),
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      marginTop: theme.spacing(2),
      marginBotton: theme.spacing(2),
  },
  memberCarouselBox:{
      alignItems: "center",
      justifyContent: "true",
      flexGrow: 1,
  },
  main: {
//    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
}

