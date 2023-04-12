import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  OutlinedInput,
  FormControl,
  Stack,
} from "@mui/material";
import { useContext, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";

import { useRouter } from "next/router";
import { AuthContext } from "../../provider/AuthContext";
const image =
  "https://res.cloudinary.com/dymjjmeyc/image/upload/v1679913069/AccountTrader/0x0_zfidbn.jpg";

export const SignUp = () => {
  const { userData, setUserData, userName, createUser, setUserName } =
    useContext(AuthContext);
  const [check, setCheck] = useState("");
  const [checkPassword, setCheckPassword] = useState(false);
  const [match, setMatch] = useState(false);
  const checkPass = () => {
    if (userData.password.length === 8) {
      setCheckPassword(false);
      if (userData.password === check) {
        setMatch(false);
        createUser();
      } else {
        setMatch(true);
      }
    } else {
      setCheckPassword(true);
    }
  };
  // const createUser = async () => {
  //   try {
  //     await axios.post("http://localhost:8000/api/v1/user/auth/signup", {
  //       userName,
  //       userData,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const router = useRouter();
  return (
    <Box sx={styles.mainContainer}>
      <Container>
        <Box sx={styles.center}>
          <Box sx={styles.signBox}>
            <Typography sx={styles.topic}>Бүртгүүлэх</Typography>
            <Box>
              <Box>
                <Typography sx={styles.infos}>Нэр</Typography>
              </Box>
              <TextField
                id="outlined-basic"
                variant="outlined"
                sx={styles.textInput}
                onChange={(e) =>
                  setUserName({ ...userName, name: e.target.value })
                }
              />
              <Box sx={styles.firstPadding}>
                <Typography sx={styles.infos}>И-мэйл</Typography>
              </Box>
              <TextField
                id="outlined-basic"
                variant="outlined"
                sx={styles.textInput}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
              <Box sx={styles.inputPadding}>
                <Typography sx={styles.infos}>Нууц үг</Typography>
              </Box>
              <FormControl
                sx={{ width: "100%", backgroundColor: "#F7F7F7" }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password"></InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                />
              </FormControl>
              <Box sx={styles.inputPadding}>
                <Typography sx={styles.infos}>
                  Нууц үгээ баталгаажуулах
                </Typography>
              </Box>
              <FormControl
                sx={{ width: "100%", backgroundColor: "#F7F7F7" }}
                variant="outlined"
              >
                <InputLabel
                  htmlFor="outlined-adornment-password"
                  onChange={(e) => setCheck(e.target.value)}
                ></InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <Button
                style={styles.SignUpButton}
                onClick={() => {
                  // checkPass();
                  createUser();
                  // router.push("/");
                  console.log("err");
                }}
              >
                <Typography>Бүртгүүлэх</Typography>
              </Button>
            </Box>
            <Box>
              <Box sx={styles.secondSection}>
                <Typography sx={styles.alreadyUser}>
                  Хэрвээ та хэрэглэгч бол?
                </Typography>
                <Typography
                  sx={styles.signInTypography}
                  onClick={() => {
                    router.push("/auth/signin");
                  }}
                >
                  Нэвтрэх
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const styles = {
  mainContainer: {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
  center: { display: "flex", justifyContent: "center", alignItems: "center" },
  signBox: {
    width: "550px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "60px 35px 35px 35px",
    display: "flex",
    flexDirection: "column",
  },
  topic: {
    fontSize: "38px",
    fontWeight: 400,
    lineHeight: "1.2",
    fontFamily: "inherit",
    color: "#55555",
    textAlign: "center",
    paddingBottom: "50px",
  },
  width100: {
    width: 100,
  },
  infos: {
    fontFamily: "inherit",
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.5",
    fontWeight: 600,
  },
  SignUpButton: {
    backgroundColor: "#333333",
    borderRadius: "10px",
    width: "100%",
    height: "60px",
    marginTop: "10px",
    fontFamily: "inherit",
    fontSize: "16px",
    color: "#ffffff",
    fontWeight: 600,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  secondSection: {
    width: "100%",
    textAlign: "center",
    paddingTop: "55px",
    display: "flex",
    justifyContent: "center",
  },
  signInTypography: {
    borderBottom: "1px solid #99999",
    textDecoration: "underline",
    fontFamily: "inherit",
    fontSize: "14px",
    lineHeight: "1.5",
    marginLeft: "8px",
    fontWeight: 400,
    color: "#999",
  },
  alreadyUser: {
    fontFamily: "inherit",
    fontSize: "14px",
    color: "#999",
    fontWeight: 400,
  },
  textInput: {
    width: "100%",
    fontSize: "18px",
    lineHeight: "1.2",
    height: "60px",
    backgroundColor: "#F7F7F7",
  },
  firstPadding: {
    paddingBottom: "5px",
    paddingTop: "6px",
  },
  inputPadding: {
    paddingBottom: "9px",
    paddingTop: "13px",
    display: "flex",
  },
};

export default SignUp;
