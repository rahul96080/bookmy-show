import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Components/Styling/Navbar.module.css";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import clsx from "clsx";
import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cityRequest, storeAuth } from "../Redux/app/actions";
import Login from "../Pages/LoginPage";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  list: {
    width: 350,
  },
  fullList: {
    width: "auto",
  },
});
const location = [
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/mumbai.png",
    name: "Mumbai",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/ncr-selected.png",
    name: "NCR",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/bang.png",
    name: "Bangaluru",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/hyd.png",
    name: "Hyderabad",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/ahd.png",
    name: "Ahemdabad",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/chd.png",
    name: "Chandigarh",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/chen.png",
    name: "Chennai",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/pune.png",
    name: "Pune",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/kolk.png",
    name: "Kolkata",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/koch.png",
    name: "Kochi",
  },
];
const Navbar = () => {
  const [query, setQuery] = React.useState("");
  const [city, setCity] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [cityName, setCityName] = React.useState("Select City");
  const theme = useTheme();
  const classes = useStyles();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [state, setState] = React.useState(false);
  const [auth, setAuth] = React.useState(false);
  const [action, setAction] = React.useState(false);
  const isAuth = useSelector((state) => state.app.isAuth);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleLocation = (name) => {
    setOpen(false);
    setCityName(name);
  };

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(cityRequest(cityName));
  }, [cityName]);

  const toggleDrawer = (open) => (event) => {
    setState(!state);
  };

  const handleSignIn = () => {
    setAction(true);
    setState(false);
  };
  const handleCloseLogin = (number) => {
    if (+number === 8125303614) {
      setAuth(true);
      alert("Successfully Logged in");
    } else if (+number === 8125303614) {
      setAuth(true);
      alert("Successfully Logged in");
    } else if (+number === "") {
      alert("Please type your number");
      handleCloseLogin(number);
    } else {
      alert("You are not registered");
    }
    setAction(false);
    setState(false);
  };

  const handleSignout = () => {
    setAuth(false);
    alert("Successfully Logged out");
  }

  React.useEffect(() => {
    dispatch(storeAuth(auth));
  }, [auth]);

  console.log(isAuth);
  return (
    <div>
      <div className={styles.navbar}>
        <div style={{ display: "flex", alignItems: "center", width: "65%" }}>
          <Link className={styles.link} to="/">
            <svg height="40" width="150">
              <image
                // href="//in.bmscdn.com/webin/common/icons/bms.svg"
                href="http://localhost:3000/bookmymovie-logo.png"
                width="150"
                height="40"
              ></image>
            </svg>
          </Link>
          <div className={styles.searchBar}>
            <SearchIcon />
            <input
              type="text"
              placeholder="Search for Movies"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", fontSize: "17px" }}
        >
          <div className={styles.location} onClick={handleClickOpen}>
            <div>{cityName}</div>
            <ArrowDropDownIcon />
          </div>
          {!isAuth && (
            <button onClick={handleSignIn} className={styles.signBtn}>
                <p>Sign In</p>              
            </button>
          )}
          <Login action={action} handleCloseLogin={handleCloseLogin} />
          <div
            onClick={toggleDrawer(true)}
            onClose={toggleDrawer(false)}
            className={styles.profile}
          >
            {isAuth && <AccountCircleIcon style={{ fontSize: "40px" }} />}
            {isAuth && <div>Hi, User..</div>}

            <Drawer anchor="right" open={state}>
              <div className={styles.drawer}>
                <div>
                  <div>Hi, User </div>
                  <Link
                    style={{ marginLeft: 0, fontSize: "17px" }}
                    className={styles.link}
                  >
                    Edit Profile
                  </Link>
                </div>
                <AccountCircleIcon style={{ fontSize: "40px" }} />
              </div>
              <div className={styles.sideber_content}>             
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#666"
                      fill-rule="evenodd"
                      d="M14 2c.25 0 .46.18.49.42l.38 2.65c.61.25 1.17.58 1.69.98l2.49-1a.5.5 0 0 1 .61.22l2 3.46c.12.22.07.49-.12.64l-2.11 1.65c.04.32.07.64.07.98 0 .34-.03.66-.07.98l2.11 1.65c.19.15.24.42.12.64l-2 3.46c-.09.16-.26.25-.43.25-.06 0-.12-.01-.18-.03l-2.49-1c-.52.39-1.08.73-1.69.98l-.38 2.65c-.03.24-.24.42-.49.42h-4c-.25 0-.46-.18-.49-.42l-.38-2.65c-.61-.25-1.17-.58-1.69-.98l-2.49 1a.5.5 0 0 1-.61-.22l-2-3.46a.505.505 0 0 1 .12-.64l2.11-1.65A7.93 7.93 0 0 1 4.5 12c0-.33.03-.66.07-.98L2.46 9.37a.493.493 0 0 1-.12-.64l2-3.46c.09-.16.26-.25.43-.25.06 0 .12.01.18.03l2.49 1c.52-.39 1.08-.73 1.69-.98l.38-2.65c.03-.24.24-.42.49-.42zm-.437 1h-3.126l-.398 2.778-.53.217a6.672 6.672 0 0 0-1.469.855l-.45.338-.523-.21-2.076-.836-1.568 2.712 2.21 1.727-.07.563A6.881 6.881 0 0 0 5.5 12c0 .251.02.524.062.856l.07.563-.446.349-1.763 1.378 1.567 2.71 2.607-1.047.453.348c.461.355.945.637 1.46.848l.529.217.08.566.318 2.212h3.126l.398-2.778.53-.217a6.672 6.672 0 0 0 1.469-.855l.45-.338.523.21 2.076.836 1.568-2.712-2.21-1.727.07-.563A6.73 6.73 0 0 0 18.5 12c0-.258-.02-.518-.062-.856l-.07-.563.446-.349 1.763-1.378-1.567-2.71-2.607 1.047-.453-.348a6.305 6.305 0 0 0-1.46-.848l-.529-.217-.08-.566L13.562 3zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
                    ></path>
                  </svg>
                  <span>Settings</span>
                </div>
                <div className={styles.signout_button}>
                  <button onClick={handleSignout}>Sign out</button>
                </div>
              </div>
            </Drawer>
          </div>
        </div>
      </div>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        TransitionComponent={Transition}
      >
        <DialogContent className={styles.Dialog}>
          <DialogContentText className={styles.location_content}>
            <SearchIcon />
            <input
              style={{
                border: "none",
                width: "550px",
                height: "40px",
                outline: "none",
              }}
              type="text"
              onChange={(e) => setCity(e.target.value)}
              placeholder="Search for your city"
            />
          </DialogContentText>
          <div>Popular cities</div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "baseline",
              textAlign: "center",
            }}
          >
            {location.map((loc) => (
              <div style={{ margin: "2px" }}>
                <img
                  onClick={() => handleLocation(loc.name)}
                  src={loc.link}
                  alt={loc.name}
                />
                <div>{loc.name}</div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
      <div className={styles.secondNav}>
        <div>
          <Link className={styles.link} to="">
            Movies
          </Link>
        </div>
        <div>
          <Link className={styles.link} to="">
            Gift Cards
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
